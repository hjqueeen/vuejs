const state = () => ({
  counter: 0,
  keyword: "",
});

const getters = {
  counter: (state) => state.counter,
  keyword: (state) => state.keyword,
  doubledCounter: (state) => state.counter * 2,
  keywordLength: (state) => state.keyword.length,
};

const mutations = {
  INCREMENT(state) {
    state.counter += 1;
  },
  DECREMENT(state) {
    state.counter -= 1;
  },
  SET_COUNTER(state, value) {
    state.counter = Number(value) || 0;
  },
  SET_KEYWORD(state, value) {
    state.keyword = value;
  },
};

const actions = {
  increment({ commit }) {
    commit("INCREMENT");
  },
  decrement({ commit }) {
    commit("DECREMENT");
  },
  async incrementAsync({ commit }) {
    await new Promise((resolve) => setTimeout(resolve, 300));
    commit("INCREMENT");
  },
  setKeyword({ commit }, value) {
    commit("SET_KEYWORD", value);
  },
  setCounter({ commit }, value) {
    commit("SET_COUNTER", value);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
