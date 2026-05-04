const STORAGE_KEY = "ui-preferences";

const state = () => ({
  toast: "",
  hideEnglish: false,
  hideKorean: false,
  /** eBook 영어 옆 번역: 한국어(`ko`) 또는 독일어(`de`) */
  studyTranslationLanguage: "ko",
  hideCompletedSentences: false,
  completedSentenceMap: {},
  readStepMap: {},
  darkMode: false,
});

const getters = {
  toast: (state) => state.toast,
  hideEnglish: (state) => state.hideEnglish,
  hideKorean: (state) => state.hideKorean,
  studyTranslationLanguage: (state) => state.studyTranslationLanguage,
  hideCompletedSentences: (state) => state.hideCompletedSentences,
  darkMode: (state) => state.darkMode,
  isSentenceCompleted: (state) => (sentenceId) => Boolean(state.completedSentenceMap[sentenceId]),
  isSentenceReadStepChecked: (state) => (sentenceId, step) => {
    const current = state.readStepMap?.[sentenceId] || {};
    return Boolean(current[String(step)]);
  },
};

const mutations = {
  SET_TOAST(state, message) {
    state.toast = message;
  },
  SET_HIDE_ENGLISH(state, value) {
    state.hideEnglish = Boolean(value);
  },
  SET_HIDE_KOREAN(state, value) {
    state.hideKorean = Boolean(value);
  },
  SET_STUDY_TRANSLATION_LANGUAGE(state, value) {
    state.studyTranslationLanguage = value === "de" ? "de" : "ko";
  },
  SET_HIDE_COMPLETED_SENTENCES(state, value) {
    state.hideCompletedSentences = Boolean(value);
  },
  SET_COMPLETED_SENTENCE_MAP(state, map) {
    state.completedSentenceMap = map || {};
  },
  SET_READ_STEP_MAP(state, map) {
    state.readStepMap = map || {};
  },
  SET_DARK_MODE(state, value) {
    state.darkMode = Boolean(value);
  },
  TOGGLE_COMPLETED_SENTENCE(state, sentenceId) {
    const next = { ...state.completedSentenceMap };
    if (next[sentenceId]) {
      delete next[sentenceId];
    } else {
      next[sentenceId] = true;
    }
    state.completedSentenceMap = next;
  },
  TOGGLE_READ_STEP(state, payload) {
    const sentenceId = payload?.sentenceId;
    const step = String(payload?.step);
    if (!sentenceId || !["1", "2", "3"].includes(step)) return;
    const next = { ...state.readStepMap };
    const current = { ...(next[sentenceId] || {}) };
    if (current[step]) {
      delete current[step];
    } else {
      current[step] = true;
    }
    if (Object.keys(current).length === 0) {
      delete next[sentenceId];
    } else {
      next[sentenceId] = current;
    }
    state.readStepMap = next;
  },
};

const actions = {
  init({ commit }) {
    if (typeof localStorage === "undefined") return;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      commit("SET_HIDE_ENGLISH", Boolean(parsed.hideEnglish));
      commit("SET_HIDE_KOREAN", Boolean(parsed.hideKorean));
      commit("SET_STUDY_TRANSLATION_LANGUAGE", parsed.studyTranslationLanguage);
      commit("SET_HIDE_COMPLETED_SENTENCES", Boolean(parsed.hideCompletedSentences));
      if (parsed.completedSentenceMap && typeof parsed.completedSentenceMap === "object") {
        commit("SET_COMPLETED_SENTENCE_MAP", parsed.completedSentenceMap);
      }
      if (parsed.readStepMap && typeof parsed.readStepMap === "object") {
        commit("SET_READ_STEP_MAP", parsed.readStepMap);
      }
      commit("SET_DARK_MODE", Boolean(parsed.darkMode));
    } catch (error) {
      commit("SET_HIDE_ENGLISH", false);
      commit("SET_HIDE_KOREAN", false);
      commit("SET_STUDY_TRANSLATION_LANGUAGE", "ko");
      commit("SET_HIDE_COMPLETED_SENTENCES", false);
      commit("SET_COMPLETED_SENTENCE_MAP", {});
      commit("SET_READ_STEP_MAP", {});
      commit("SET_DARK_MODE", false);
    }
  },
  notify({ commit }, message) {
    commit("SET_TOAST", message);
    setTimeout(() => commit("SET_TOAST", ""), 1800);
  },
  toggleHideEnglish({ state, commit, dispatch }) {
    if (!state.hideEnglish && state.hideKorean) {
      dispatch("notify", "영어와 번역문을 동시에 가릴 수 없습니다.");
      return;
    }
    commit("SET_HIDE_ENGLISH", !state.hideEnglish);
    dispatch("persist");
  },
  toggleHideKorean({ state, commit, dispatch }) {
    if (!state.hideKorean && state.hideEnglish) {
      dispatch("notify", "영어와 번역문을 동시에 가릴 수 없습니다.");
      return;
    }
    commit("SET_HIDE_KOREAN", !state.hideKorean);
    dispatch("persist");
  },
  toggleHideCompletedSentences({ state, commit, dispatch }) {
    commit("SET_HIDE_COMPLETED_SENTENCES", !state.hideCompletedSentences);
    dispatch("persist");
  },
  toggleDarkMode({ state, commit, dispatch }) {
    commit("SET_DARK_MODE", !state.darkMode);
    dispatch("persist");
  },
  setStudyTranslationLanguage({ commit, dispatch }, value) {
    commit("SET_STUDY_TRANSLATION_LANGUAGE", value);
    dispatch("persist");
  },
  toggleSentenceCompleted({ commit, dispatch }, sentenceId) {
    if (!sentenceId) return;
    commit("TOGGLE_COMPLETED_SENTENCE", sentenceId);
    dispatch("persist");
  },
  toggleSentenceReadStep({ commit, dispatch }, payload) {
    commit("TOGGLE_READ_STEP", payload);
    dispatch("persist");
  },
  persist({ state }) {
    if (typeof localStorage === "undefined") return;
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        hideEnglish: state.hideEnglish,
        hideKorean: state.hideKorean,
        studyTranslationLanguage: state.studyTranslationLanguage,
        hideCompletedSentences: state.hideCompletedSentences,
        completedSentenceMap: state.completedSentenceMap,
        readStepMap: state.readStepMap,
        darkMode: state.darkMode,
      })
    );
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
