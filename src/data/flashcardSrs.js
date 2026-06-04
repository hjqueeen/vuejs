/** SM-2 spaced repetition (day-based, simplified) */

export const DEFAULT_EASE = 2.5;
export const MIN_EASE = 1.3;
const DAY_MS = 24 * 60 * 60 * 1000;

export const SRS_GRADE_KEYS = ["again", "hard", "good", "easy"];

/** SM-2 quality 0–5 */
export const GRADE_QUALITY = {
  again: 1,
  hard: 3,
  good: 4,
  easy: 5,
};

export function defaultCardState() {
  return {
    repetitions: 0,
    easeFactor: DEFAULT_EASE,
    intervalDays: 0,
    dueAt: 0,
    lastReviewedAt: 0,
  };
}

/** Legacy { step, dueAt } → SM-2 fields */
export function normalizeSchedule(raw) {
  if (!raw || typeof raw !== "object") return null;
  if (typeof raw.easeFactor === "number" && typeof raw.repetitions === "number") {
    return {
      repetitions: raw.repetitions,
      easeFactor: raw.easeFactor,
      intervalDays: raw.intervalDays ?? 0,
      dueAt: raw.dueAt ?? 0,
      lastReviewedAt: raw.lastReviewedAt ?? 0,
    };
  }
  const step = typeof raw.step === "number" ? raw.step : 0;
  return {
    repetitions: step > 0 ? Math.min(step, 2) : 0,
    easeFactor: DEFAULT_EASE,
    intervalDays: step >= 2 ? 6 : step >= 1 ? 1 : 0,
    dueAt: raw.dueAt ?? 0,
    lastReviewedAt: raw.lastReviewedAt ?? 0,
  };
}

/**
 * @param {{ repetitions: number, easeFactor: number, intervalDays: number }} prev
 * @param {number} quality SM-2 quality (0–5)
 */
export function sm2Next(prev, quality) {
  let n = prev.repetitions ?? 0;
  let ef = prev.easeFactor ?? DEFAULT_EASE;
  let interval = prev.intervalDays ?? 0;

  if (quality < 3) {
    n = 0;
    interval = 1;
  } else {
    if (n === 0) interval = 1;
    else if (n === 1) interval = 6;
    else interval = Math.max(1, Math.round(interval * ef));

    n += 1;
    ef += 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02);
    if (ef < MIN_EASE) ef = MIN_EASE;
  }

  return { repetitions: n, easeFactor: ef, intervalDays: interval };
}

export function dueAtFromIntervalDays(intervalDays, from = Date.now()) {
  return from + intervalDays * DAY_MS;
}

export function getGradeKey(key) {
  return SRS_GRADE_KEYS.includes(key) ? key : null;
}

export function getQuality(gradeKey) {
  return GRADE_QUALITY[gradeKey] ?? null;
}

/** Button label: predicted interval if this grade is chosen */
export function previewIntervalLabel(schedule, gradeKey) {
  const quality = getQuality(gradeKey);
  if (quality == null) return "";
  const prev = schedule ? normalizeSchedule(schedule) : defaultCardState();
  const next = sm2Next(prev, quality);
  return formatIntervalDays(next.intervalDays);
}

export function formatIntervalDays(days) {
  if (!days || days < 1) return "1d";
  if (days === 1) return "1d";
  if (days < 30) return `${days}d`;
  if (days < 365) return `${Math.round(days / 30)}mo`;
  return `${(days / 365).toFixed(1)}y`;
}

export function isCardDue(schedule, now = Date.now()) {
  const norm = schedule ? normalizeSchedule(schedule) : null;
  if (!norm || !norm.dueAt) return true;
  return norm.dueAt <= now;
}

export function formatDueLabel(dueAt, now = Date.now()) {
  if (typeof dueAt !== "number" || dueAt <= 0) return "새 카드";
  const diff = dueAt - now;
  if (diff <= 0) return "복습";
  const days = Math.ceil(diff / DAY_MS);
  if (days === 1) return "1일 후";
  if (days < 30) return `${days}일 후`;
  if (days < 365) return `${Math.round(days / 30)}개월 후`;
  return `${(days / 365).toFixed(1)}년 후`;
}
