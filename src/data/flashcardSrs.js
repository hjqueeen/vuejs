import {
  createEmptyCard,
  fsrs,
  Rating,
  State,
} from "ts-fsrs";

const DAY_MS = 24 * 60 * 60 * 1000;
const MINUTE_MS = 60 * 1000;

/** Re-show card in same session when next due is within this window */
export const SESSION_REQUEUE_MS = 30 * MINUTE_MS;

export const SRS_GRADE_KEYS = ["again", "hard", "good", "easy"];

export const GRADE_LABELS_KO = {
  again: "다시",
  hard: "어려움",
  good: "좋음",
  easy: "쉬움",
};

const GRADE_TO_RATING = {
  again: Rating.Again,
  hard: Rating.Hard,
  good: Rating.Good,
  easy: Rating.Easy,
};

const STATE_PHASE = {
  [State.New]: "new",
  [State.Learning]: "learning",
  [State.Review]: "review",
  [State.Relearning]: "relearning",
};

export const scheduler = fsrs({
  request_retention: 0.9,
  enable_fuzz: false,
  enable_short_term: true,
  learning_steps: ["1m", "10m"],
  relearning_steps: ["10m"],
});

function toDate(value) {
  if (value instanceof Date) return value;
  if (typeof value === "number") return new Date(value);
  if (typeof value === "string") return new Date(value);
  return new Date();
}

function isFsrsStored(raw) {
  return (
    raw &&
    typeof raw === "object" &&
    typeof raw.state === "number" &&
    (typeof raw.due === "number" || raw.due instanceof Date || typeof raw.due === "string")
  );
}

/** @returns {import('ts-fsrs').Card} */
export function toFsrsCard(raw, now = Date.now()) {
  if (!raw) return createEmptyCard(new Date(now));

  if (isFsrsStored(raw)) {
    return {
      due: toDate(raw.due),
      stability: raw.stability ?? 0,
      difficulty: raw.difficulty ?? 0,
      elapsed_days: raw.elapsed_days ?? 0,
      scheduled_days: raw.scheduled_days ?? 0,
      learning_steps: raw.learning_steps ?? 0,
      reps: raw.reps ?? 0,
      lapses: raw.lapses ?? 0,
      state: raw.state,
      last_review: raw.last_review != null ? toDate(raw.last_review) : undefined,
    };
  }

  return migrateLegacySchedule(raw, now);
}

/** JSON-serializable FSRS card for localStorage */
export function serializeCard(card) {
  return {
    due: card.due instanceof Date ? card.due.getTime() : card.due,
    stability: card.stability,
    difficulty: card.difficulty,
    elapsed_days: card.elapsed_days ?? 0,
    scheduled_days: card.scheduled_days,
    learning_steps: card.learning_steps,
    reps: card.reps,
    lapses: card.lapses,
    state: card.state,
    last_review:
      card.last_review instanceof Date
        ? card.last_review.getTime()
        : card.last_review ?? undefined,
  };
}

export function getDueTimestamp(raw) {
  if (!raw) return 0;
  if (isFsrsStored(raw)) return toDate(raw.due).getTime();
  if (typeof raw.dueAt === "number") return raw.dueAt;
  return 0;
}

function migrateLegacySchedule(raw, now = Date.now()) {
  const dueAt = typeof raw.dueAt === "number" ? raw.dueAt : now;
  const lastReviewedAt =
    typeof raw.lastReviewedAt === "number" ? raw.lastReviewedAt : undefined;
  const base = createEmptyCard(new Date(now));

  if (raw.phase === "review" || (raw.repetitions >= 2 && (raw.intervalDays ?? 0) >= 1)) {
    const days = Math.max(1, raw.intervalDays ?? 1);
    return {
      ...base,
      state: State.Review,
      due: new Date(dueAt),
      scheduled_days: days,
      stability: Math.max(days, 0.001),
      difficulty: base.difficulty || 5,
      reps: Math.max(1, raw.repetitions ?? 1),
      last_review: lastReviewedAt ? new Date(lastReviewedAt) : undefined,
    };
  }

  if (raw.phase === "relearning") {
    return {
      ...base,
      state: State.Relearning,
      due: new Date(dueAt),
      learning_steps: raw.learningStep ?? 0,
      last_review: lastReviewedAt ? new Date(lastReviewedAt) : undefined,
    };
  }

  if (
    raw.phase === "learning" ||
    raw.repetitions > 0 ||
    (raw.intervalDays ?? 0) > 0 ||
    dueAt > now
  ) {
    return {
      ...base,
      state: State.Learning,
      due: new Date(dueAt),
      learning_steps: raw.learningStep ?? 0,
      last_review: lastReviewedAt ? new Date(lastReviewedAt) : undefined,
    };
  }

  return createEmptyCard(new Date(now));
}

/** @deprecated kept for store migration entry point */
export function normalizeSchedule(raw) {
  if (!raw || typeof raw !== "object") return null;
  return serializeCard(toFsrsCard(raw));
}

export function getGradeKey(key) {
  return SRS_GRADE_KEYS.includes(key) ? key : null;
}

/**
 * @param {object|null} prev serialized FSRS card or legacy schedule
 * @param {string} gradeKey
 * @param {number} now
 */
export function applyGrade(prev, gradeKey, now = Date.now()) {
  const key = getGradeKey(gradeKey);
  if (!key) {
    return {
      schedule: serializeCard(createEmptyCard(new Date(now))),
      requeueInSession: false,
    };
  }

  const fsrsCard = toFsrsCard(prev, now);
  const rating = GRADE_TO_RATING[key];
  const reviewedAt = new Date(now);
  const { card: nextCard } = scheduler.next(fsrsCard, reviewedAt, rating);
  const dueMs = nextCard.due.getTime();
  const diff = dueMs - now;
  const requeueInSession =
    key === "again" ||
    ((nextCard.state === State.Learning || nextCard.state === State.Relearning) &&
      diff > 0 &&
      diff <= SESSION_REQUEUE_MS);

  return {
    schedule: serializeCard(nextCard),
    requeueInSession,
    phase: STATE_PHASE[nextCard.state] ?? "new",
  };
}

export function previewIntervalLabel(schedule, gradeKey) {
  const key = getGradeKey(gradeKey);
  if (!key) return "";
  const fsrsCard = toFsrsCard(schedule);
  const rating = GRADE_TO_RATING[key];
  const preview = scheduler.repeat(fsrsCard, new Date());
  const next = preview[rating]?.card;
  if (!next) return "";
  return formatDelayUntil(next.due.getTime(), Date.now());
}

export function formatDelayUntil(dueAt, now = Date.now()) {
  if (typeof dueAt !== "number" || dueAt <= 0) return "<1m";
  const diff = dueAt - now;
  if (diff <= 0) return "<1m";
  if (diff < MINUTE_MS) return "<1m";
  if (diff < 60 * MINUTE_MS) return `${Math.round(diff / MINUTE_MS)}m`;
  if (diff < DAY_MS) {
    const h = Math.round(diff / (60 * MINUTE_MS));
    return h < 24 ? `${h}h` : "1d";
  }
  return formatIntervalDays(Math.max(1, Math.ceil(diff / DAY_MS)));
}

export function formatIntervalDays(days) {
  if (!days || days < 1) return "<1m";
  if (days === 1) return "1d";
  if (days < 30) return `${days}d`;
  if (days < 365) return `${Math.round(days / 30)}mo`;
  return `${(days / 365).toFixed(1)}y`;
}

export function isCardDue(schedule, now = Date.now()) {
  if (!schedule) return true;
  const dueAt = getDueTimestamp(schedule);
  if (!dueAt) return true;
  return dueAt <= now;
}

export function formatDueLabel(dueAt, now = Date.now()) {
  if (typeof dueAt !== "number" || dueAt <= 0) return "새 카드";
  const diff = dueAt - now;
  if (diff <= 0) return "복습";
  if (diff < MINUTE_MS) return "곧";
  if (diff < 60 * MINUTE_MS) return `${Math.ceil(diff / MINUTE_MS)}분 후`;
  if (diff < DAY_MS) {
    const h = Math.ceil(diff / (60 * MINUTE_MS));
    return h < 24 ? `${h}시간 후` : "1일 후";
  }
  const days = Math.ceil(diff / DAY_MS);
  if (days === 1) return "1일 후";
  if (days < 30) return `${days}일 후`;
  if (days < 365) return `${Math.round(days / 30)}개월 후`;
  return `${(days / 365).toFixed(1)}년 후`;
}

export function gradeOptionList(schedule) {
  return SRS_GRADE_KEYS.map((key) => ({
    key,
    name: GRADE_LABELS_KO[key],
    label: previewIntervalLabel(schedule, key),
  }));
}
