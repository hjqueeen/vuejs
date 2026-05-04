import Vue from "vue";
import VueI18n from "vue-i18n";
import { messages } from "./messages";

const DEFAULT_LOCALE = "en";

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: DEFAULT_LOCALE,
  fallbackLocale: DEFAULT_LOCALE,
  messages,
});

export const setLocale = (locale) => {
  if (!messages[locale]) return;
  i18n.locale = locale;
};

export const availableLocales = Object.keys(messages);

export default i18n;
