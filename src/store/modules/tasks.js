import { taskService } from "@/services/taskService";

const state = () => ({
  list: [],
  isLoading: false,
});

const getters = {
  list: (state) => state.list,
  isLoading: (state) => state.isLoading,
  groupedByStatus: (state) => {
    return state.list.reduce(
      (acc, task) => {
        acc[task.status].push(task);
        return acc;
      },
      { todo: [], doing: [], done: [] }
    );
  },
};

const mutations = {
  SET_LOADING(state, value) {
    state.isLoading = value;
  },
  SET_LIST(state, list) {
    state.list = list;
  },
  PREPEND_TASK(state, task) {
    state.list.unshift(task);
  },
  REPLACE_TASK(state, task) {
    const index = state.list.findIndex((item) => item.id === task.id);
    if (index >= 0) {
      state.list.splice(index, 1, task);
    }
  },
};

const actions = {
  async fetchList({ commit }) {
    commit("SET_LOADING", true);
    try {
      const list = await taskService.fetchList();
      commit("SET_LIST", list);
    } finally {
      commit("SET_LOADING", false);
    }
  },
  async createTask({ commit }, payload) {
    const task = await taskService.create(payload);
    commit("PREPEND_TASK", task);
  },
  async updateStatus({ commit }, { taskId, status }) {
    const task = await taskService.updateStatus(taskId, status);
    commit("REPLACE_TASK", task);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
