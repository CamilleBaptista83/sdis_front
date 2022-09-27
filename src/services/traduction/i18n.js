import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import TRANSLATIONS_FR from "./fr-FR/translations.json";
import { TRANSLATIONS_AN } from "./en-US/translations";

i18n.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			fr_FR: {
				translation: TRANSLATIONS_FR,
			},
			en_US: {
				translation: TRANSLATIONS_AN,
			},
		},
	});
export default i18n;
i18n.changeLanguage("fr_FR");
