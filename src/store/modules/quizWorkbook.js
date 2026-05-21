const STORAGE_KEY = "quiz-workbook-progress";

const state = () => ({
  /** { [bookId]: { [questionId]: true } } */
  studiedMap: {},
  /** { [bookId]: { [questionId]: true } } — 테스트 통과(정답) */
  testedMap: {},
});

const getters = {
  studiedMap: (state) => state.studiedMap,
  testedMap: (state) => state.testedMap,
  isStudied: (state) => (bookId, questionId) =>
    Boolean(state.studiedMap?.[bookId]?.[questionId]),
  isTested: (state) => (bookId, questionId) =>
    Boolean(state.testedMap?.[bookId]?.[questionId]),
  studiedIds: (state) => (bookId) => {
    const map = state.studiedMap?.[bookId] || {};
    return Object.keys(map).filter((id) => map[id]);
  },
  bookProgress: (state) => (bookId, questionIds) => {
    const total = questionIds.length;
    const studied = questionIds.filter((id) => state.studiedMap?.[bookId]?.[id]).length;
    const tested = questionIds.filter((id) => state.testedMap?.[bookId]?.[id]).length;
    return {
      total,
      studied,
      tested,
      studiedPercent: total ? Math.round((studied / total) * 100) : 0,
      testedPercent: total ? Math.round((tested / total) * 100) : 0,
    };
  },
  chapterProgress: (state) => (bookId, questionIds) => {
    const studied = questionIds.filter((id) => state.studiedMap?.[bookId]?.[id]).length;
    return {
      total: questionIds.length,
      studied,
      percent: questionIds.length
        ? Math.round((studied / questionIds.length) * 100)
        : 0,
    };
  },
};

const mutations = {
  SET_STUDIED_MAP(state, map) {
    state.studiedMap = map || {};
  },
  SET_TESTED_MAP(state, map) {
    state.testedMap = map || {};
  },
  TOGGLE_STUDIED(state, { bookId, questionId }) {
    if (!bookId || !questionId) return;
    const next = { ...state.studiedMap };
    const book = { ...(next[bookId] || {}) };
    if (book[questionId]) {
      delete book[questionId];
    } else {
      book[questionId] = true;
    }
    if (Object.keys(book).length === 0) {
      delete next[bookId];
    } else {
      next[bookId] = book;
    }
    state.studiedMap = next;
  },
  SET_TESTED(state, { bookId, questionId, passed }) {
    if (!bookId || !questionId) return;
    const next = { ...state.testedMap };
    const book = { ...(next[bookId] || {}) };
    if (passed) {
      book[questionId] = true;
    } else {
      delete book[questionId];
    }
    if (Object.keys(book).length === 0) {
      delete next[bookId];
    } else {
      next[bookId] = book;
    }
    state.testedMap = next;
  },
};

const actions = {
  init({ commit }) {
    if (typeof localStorage === "undefined") return;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (parsed.studiedMap) commit("SET_STUDIED_MAP", parsed.studiedMap);
      if (parsed.testedMap) commit("SET_TESTED_MAP", parsed.testedMap);
    } catch {
      commit("SET_STUDIED_MAP", {});
      commit("SET_TESTED_MAP", {});
    }
  },
  toggleStudied({ commit, dispatch }, payload) {
    commit("TOGGLE_STUDIED", payload);
    dispatch("persist");
  },
  markStudied({ state, commit, dispatch }, { bookId, questionId }) {
    if (state.studiedMap?.[bookId]?.[questionId]) return;
    commit("TOGGLE_STUDIED", { bookId, questionId });
    dispatch("persist");
  },
  recordTest({ commit, dispatch }, { bookId, questionId, passed }) {
    commit("SET_TESTED", { bookId, questionId, passed });
    dispatch("persist");
  },
  persist({ state }) {
    if (typeof localStorage === "undefined") return;
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        studiedMap: state.studiedMap,
        testedMap: state.testedMap,
      })
    );
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
