import { createI18n } from "vue-i18n";
import en from "../locales/en.json";
import ar from "../locales/ar.json";

export default defineNuxtPlugin(nuxtApp => {
  const lang = localStorage.getItem("language") == "en" ? "en" : "ar";
  const i18n = createI18n({
    legacy: false,
    locale: lang, // default locale
    fallbackLocale: lang,
    messages: {
      en,
      ar,
    },
  });

  nuxtApp.vueApp.use(i18n);
});
