const STORAGE_KEY = "review-selected-items";

const state = () => ({
  selectedMap: {},
});

const getters = {
  selectedMap: (state) => state.selectedMap,
  selectedList: (state) => Object.values(state.selectedMap).filter((item) => item.review),
  selectedCount: (state, getters) => getters.selectedList.length,
  isFlagged: (state) => (type, id, flag) => Boolean(state.selectedMap[`${type}:${id}`]?.[flag]),
  isSelected: (state, getters) => (type, id) => getters.isFlagged(type, id, "review"),
  selectedByCategory: (state, getters) => {
    const buckets = {
      structure: [],
      expression: [],
      tip: [],
      vocabulary: [],
    };
    getters.selectedList.forEach((item) => {
      if (buckets[item.type]) {
        buckets[item.type].push(item);
      }
    });
    return buckets;
  },
};

const mutations = {
  SET_SELECTED_MAP(state, value) {
    state.selectedMap = value || {};
  },
  TOGGLE_ITEM_FLAG(state, payload) {
    const { item, flag } = payload;
    const key = `${item.type}:${item.id}`;
    const prev = state.selectedMap[key] || {};
    const nextItem = {
      ...prev,
      ...item,
      review: Boolean(prev.review),
      done: Boolean(prev.done),
    };
    nextItem[flag] = !Boolean(prev[flag]);
    if (!nextItem.review && !nextItem.done) {
      const next = { ...state.selectedMap };
      delete next[key];
      state.selectedMap = next;
      return;
    }
    state.selectedMap = {
      ...state.selectedMap,
      [key]: nextItem,
    };
  },
  CLEAR_ALL(state) {
    state.selectedMap = {};
  },
};

const persist = (selectedMap) => {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(selectedMap));
};

const actions = {
  init({ commit }) {
    if (typeof localStorage === "undefined") return;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === "object") {
        const normalized = {};
        Object.entries(parsed).forEach(([key, value]) => {
          if (!value || typeof value !== "object") return;
          normalized[key] = {
            ...value,
            review: typeof value.review === "boolean" ? value.review : true,
            done: Boolean(value.done),
          };
        });
        commit("SET_SELECTED_MAP", normalized);
      }
    } catch (error) {
      commit("SET_SELECTED_MAP", {});
    }
  },
  toggleItem({ commit, state }, item) {
    commit("TOGGLE_ITEM_FLAG", { item, flag: "review" });
    persist(state.selectedMap);
  },
  toggleItemFlag({ commit, state }, payload) {
    commit("TOGGLE_ITEM_FLAG", payload);
    persist(state.selectedMap);
  },
  clearAll({ commit, state }) {
    commit("CLEAR_ALL");
    persist(state.selectedMap);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
