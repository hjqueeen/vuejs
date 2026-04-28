import Vue from "vue";
import VueI18n from "vue-i18n";
import { messages } from "./messages";

const SUPPORTED_LOCALES = ["ko", "de", "en"];
const FALLBACK_LOCALE = "en";
const STORAGE_KEY = "app-locale";

Vue.use(VueI18n);

const getBrowserLocale = () => {
  const language = (navigator.language || FALLBACK_LOCALE).toLowerCase();
  const normalized = language.split("-")[0];
  return SUPPORTED_LOCALES.includes(normalized) ? normalized : FALLBACK_LOCALE;
};

const getInitialLocale = () => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved && SUPPORTED_LOCALES.includes(saved)) {
    return saved;
  }
  return getBrowserLocale();
};

const i18n = new VueI18n({
  locale: getInitialLocale(),
  fallbackLocale: FALLBACK_LOCALE,
  messages,
});

export const setLocale = (locale) => {
  if (!SUPPORTED_LOCALES.includes(locale)) return;
  i18n.locale = locale;
  localStorage.setItem(STORAGE_KEY, locale);
};

export const availableLocales = SUPPORTED_LOCALES;

export default i18n;
