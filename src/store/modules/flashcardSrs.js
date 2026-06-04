import {
  GRADE_QUALITY,
  defaultCardState,
  dueAtFromIntervalDays,
  formatDueLabel,
  formatIntervalDays,
  getGradeKey,
  getQuality,
  isCardDue,
  normalizeSchedule,
  previewIntervalLabel,
  sm2Next,
  SRS_GRADE_KEYS,
} from "@/data/flashcardSrs";

const STORAGE_KEY = "flashcard-srs-schedule";

function migrateMap(parsed) {
  if (!parsed || typeof parsed !== "object") return {};
  const migrated = {};
  Object.entries(parsed).forEach(([bookId, cards]) => {
    if (!cards || typeof cards !== "object") return;
    migrated[bookId] = {};
    Object.entries(cards).forEach(([cardId, raw]) => {
      const norm = normalizeSchedule(raw);
      if (norm) migrated[bookId][cardId] = norm;
    });
  });
  return migrated;
}

const state = () => ({
  /** { [bookId]: { [cardId]: Sm2Schedule } } */
  scheduleMap: {},
});

const getters = {
  scheduleMap: (state) => state.scheduleMap,
  getSchedule: (state) => (bookId, cardId) => {
    const raw = state.scheduleMap?.[bookId]?.[cardId];
    return raw ? normalizeSchedule(raw) : null;
  },
  isDue: (state, getters) => (bookId, cardId, now = Date.now()) =>
    isCardDue(getters.getSchedule(bookId, cardId), now),
  dueCardIds: (state, getters) => (bookId, cardIds, now = Date.now()) =>
    cardIds.filter((id) => getters.isDue(bookId, id, now)),
  dueCount: (state, getters) => (bookId, cardIds, now = Date.now()) =>
    getters.dueCardIds(bookId, cardIds, now).length,
  dueLabel: (state, getters) => (bookId, cardId, now = Date.now()) => {
    const schedule = getters.getSchedule(bookId, cardId);
    return formatDueLabel(schedule?.dueAt, now);
  },
  gradeOptions: (state, getters) => (bookId, cardId) => {
    const schedule = getters.getSchedule(bookId, cardId);
    return SRS_GRADE_KEYS.map((key) => ({
      key,
      label: previewIntervalLabel(schedule, key),
      quality: GRADE_QUALITY[key],
    }));
  },
};

const mutations = {
  SET_SCHEDULE_MAP(state, map) {
    state.scheduleMap = map || {};
  },
  SET_CARD_SCHEDULE(state, { bookId, cardId, schedule }) {
    if (!bookId || !cardId) return;
    const next = { ...state.scheduleMap };
    const book = { ...(next[bookId] || {}) };
    book[cardId] = schedule;
    next[bookId] = book;
    state.scheduleMap = next;
  },
};

const actions = {
  init({ commit }) {
    if (typeof localStorage === "undefined") return;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      commit("SET_SCHEDULE_MAP", migrateMap(parsed));
    } catch {
      commit("SET_SCHEDULE_MAP", {});
    }
  },
  rateCard({ commit, dispatch, getters }, { bookId, cardId, gradeKey }) {
    const key = getGradeKey(gradeKey);
    const quality = getQuality(gradeKey);
    if (!bookId || !cardId || !key || quality == null) return null;

    const prev = getters.getSchedule(bookId, cardId) || defaultCardState();
    const sm2 = sm2Next(prev, quality);
    const now = Date.now();
    const schedule = {
      ...sm2,
      dueAt: dueAtFromIntervalDays(sm2.intervalDays, now),
      lastReviewedAt: now,
    };

    commit("SET_CARD_SCHEDULE", { bookId, cardId, schedule });
    dispatch("quizWorkbook/markStudied", { bookId, questionId: cardId }, { root: true });

    if (quality >= 4) {
      dispatch(
        "quizWorkbook/recordTest",
        { bookId, questionId: cardId, passed: true },
        { root: true }
      );
    }

    dispatch("persist");
    return {
      key,
      label: formatIntervalDays(sm2.intervalDays),
      quality,
      intervalDays: sm2.intervalDays,
    };
  },
  persist({ state }) {
    if (typeof localStorage === "undefined") return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.scheduleMap));
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
