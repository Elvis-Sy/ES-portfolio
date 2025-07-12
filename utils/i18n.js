import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../translation/en/translation.json";
import fr from "../translation/fr/translation.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
    },
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
