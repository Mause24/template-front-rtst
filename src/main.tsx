import { i18next } from "@/providers"
import React from "react"
import ReactDOM from "react-dom/client"
import { I18nextProvider } from "react-i18next"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./App.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<I18nextProvider i18n={i18next}>
			<BrowserRouter>
				<Routes>
					<Route path="/*" element={<App />} />
				</Routes>
			</BrowserRouter>
		</I18nextProvider>
	</React.StrictMode>
)
