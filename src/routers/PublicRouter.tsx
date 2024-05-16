import { Login } from "@/screens"
import { Route, Routes } from "react-router-dom"

export const PublicRouter = (): JSX.Element => {
	return (
		<Routes>
			<Route path="login" element={<Login />} />
		</Routes>
	)
}
