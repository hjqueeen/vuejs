import { buildSentenceDetails, sentences } from "@/data/englishLearningDb";

/**
 * @typedef {Object} SentenceState
 * @property {boolean} loading
 * @property {import("@/data/englishLearningDb").SentenceDetail | null} current
 * @property {import("@/data/englishLearningDb").Sentence[]} list
 * @property {string | null} error
 */

const state = () => ({
  loading: false,
  current: null,
  list: [],
  error: null,
});

const getters = {
  loading: (state) => state.loading,
  current: (state) => state.current,
  list: (state) => state.list,
  error: (state) => state.error,
  detailById: () => (sentenceId) => buildSentenceDetails().find((item) => item.sentence.id === sentenceId) || null,
};

const mutations = {
  SET_LOADING(state, value) {
    state.loading = value;
  },
  SET_LIST(state, value) {
    state.list = value;
  },
  SET_CURRENT(state, value) {
    state.current = value;
  },
  SET_ERROR(state, value) {
    state.error = value;
  },
};

const actions = {
  loadList({ commit }) {
    commit("SET_LOADING", true);
    commit("SET_ERROR", null);
    try {
      commit("SET_LIST", [...sentences]);
    } catch (error) {
      commit("SET_ERROR", error.message || "Failed to load sentence list.");
    } finally {
      commit("SET_LOADING", false);
    }
  },
  loadDetail({ commit }, sentenceId) {
    commit("SET_LOADING", true);
    commit("SET_ERROR", null);
    try {
      const detail = buildSentenceDetails().find((item) => item.sentence.id === sentenceId) || null;
      commit("SET_CURRENT", detail);
      if (!detail) {
        commit("SET_ERROR", "Sentence detail not found.");
      }
    } catch (error) {
      commit("SET_ERROR", error.message || "Failed to load sentence detail.");
    } finally {
      commit("SET_LOADING", false);
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
