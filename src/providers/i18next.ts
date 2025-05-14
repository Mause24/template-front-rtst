import translater from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"
// LANGUAGE EN
import welcomeEN from "@/translations/en/welcome.json"
// LANGUAGE ES
import welcomeES from "@/translations/es/welcome.json"

translater
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			es: {
				welcome: welcomeES,
			},
			en: {
				welcome: welcomeEN,
			},
		},
		lng: "en",
		fallbackLng: "en",
		interpolation: {
			escapeValue: false,
		},
	})

export default translater
