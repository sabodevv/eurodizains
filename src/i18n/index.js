import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import lv from "./lv.json";
import ru from "./ru.json";
import en from "./en.json";

i18n.use(initReactI18next).init({
  resources: {
    lv: { translation: lv },
    ru: { translation: ru },
    en: { translation: en },
  },
  lng: "lv", // язык по умолчанию
  fallbackLng: "lv",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
