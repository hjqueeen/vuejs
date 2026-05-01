import Vue from "vue";
import VueI18n from "vue-i18n";
import { messages } from "./messages";

const FIXED_LOCALE = "ko";

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: FIXED_LOCALE,
  fallbackLocale: FIXED_LOCALE,
  messages,
});

export const setLocale = (locale) => {
  if (locale !== FIXED_LOCALE) return;
  i18n.locale = FIXED_LOCALE;
};

export const availableLocales = [FIXED_LOCALE];

export default i18n;
