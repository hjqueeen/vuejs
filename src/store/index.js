import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import learning from "./modules/learning";
import tasks from "./modules/tasks";
import ui from "./modules/ui";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    learning,
    tasks,
    ui,
  },
});
