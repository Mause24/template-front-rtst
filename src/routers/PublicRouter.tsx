import { MissingRoute } from "@/components"
import { Login, Register } from "@/screens"
import { Route, Routes } from "react-router-dom"

export const PublicRouter = (): JSX.Element => {
	return (
		<Routes>
			<Route path="login" element={<Login />} />
			<Route path="register" element={<Register />} />
			<Route path="*" element={<MissingRoute />} />
		</Routes>
	)
}
