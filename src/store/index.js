import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import learning from "./modules/learning";
import review from "./modules/review";
import sentences from "./modules/sentences";
import tasks from "./modules/tasks";
import ui from "./modules/ui";
import quizWorkbook from "./modules/quizWorkbook";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    learning,
    review,
    sentences,
    tasks,
    ui,
    quizWorkbook,
  },
});
