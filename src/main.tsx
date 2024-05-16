import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./App.tsx"
import { MissingRoute } from "./components"

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route errorElement={<MissingRoute />} path="/*" element={<App />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
)
