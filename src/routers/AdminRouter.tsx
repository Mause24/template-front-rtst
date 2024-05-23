import { AdminLogin } from "@/screens"
import { Route, Routes } from "react-router-dom"

export const AdminRouter = (): JSX.Element => {
	return (
		<Routes>
			<Route path="admin">
				<Route index element={<AdminLogin />} />
			</Route>
		</Routes>
	)
}
