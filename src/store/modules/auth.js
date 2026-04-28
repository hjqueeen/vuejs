import { loginApi } from "@/services/mockApi";
import { storage } from "@/utils/storage";

const state = () => ({
  token: null,
  user: null,
  initialized: false,
});

const getters = {
  token: (state) => state.token,
  user: (state) => state.user,
  isLoggedIn: (state) => !!state.token,
  isInitialized: (state) => state.initialized,
  hasRole: (state) => (role) => state.user && state.user.role === role,
};

const mutations = {
  SET_SESSION(state, { token, user }) {
    state.token = token;
    state.user = user;
  },
  CLEAR_SESSION(state) {
    state.token = null;
    state.user = null;
  },
  SET_INITIALIZED(state, value) {
    state.initialized = value;
  },
};

const actions = {
  async bootstrap({ commit }) {
    const token = storage.getToken();
    const user = storage.getUser();
    if (token && user) {
      commit("SET_SESSION", { token, user });
    }
    commit("SET_INITIALIZED", true);
  },
  async login({ commit }, payload) {
    const result = await loginApi(payload);
    storage.setToken(result.token);
    storage.setUser(result.user);
    commit("SET_SESSION", result);
  },
  logout({ commit }) {
    storage.clearSession();
    commit("CLEAR_SESSION");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
