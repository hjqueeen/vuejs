const state = () => ({
  toast: "",
});

const getters = {
  toast: (state) => state.toast,
};

const mutations = {
  SET_TOAST(state, message) {
    state.toast = message;
  },
};

const actions = {
  notify({ commit }, message) {
    commit("SET_TOAST", message);
    setTimeout(() => commit("SET_TOAST", ""), 1800);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
