import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import registerFilters from "./plugins/filters";
import permissionDirective from "./directives/permission";
import i18n from "./i18n";
import "./styles/global.css";

Vue.config.productionTip = false;

registerFilters(Vue, i18n);
Vue.directive("permission", permissionDirective(store));
store.dispatch("review/init");
store.dispatch("ui/init");
store.dispatch("quizWorkbook/init");
store.dispatch("flashcardSrs/init");

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");

