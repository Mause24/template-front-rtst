import { Layout, MissingRoute, ProtectedRoute } from "@/components"
import "@/sass/index.scss"
import { useAuthStore } from "@/stores"
import { Route, Routes } from "react-router-dom"
import { AdminRouter, PrivateRouter, PublicRouter } from "./routers"

const App = (): JSX.Element => {
	const { isAuth } = useAuthStore()

	return (
		<Layout>
			<Routes>
				{/* PUBLIC ROUTER */}

				<Route
					errorElement={<MissingRoute />}
					index
					path="/*"
					element={<PublicRouter />}
				/>

				{/* PRIVATE ROUTER */}

				<Route
					errorElement={<MissingRoute />}
					path="home/*"
					element={
						<ProtectedRoute redirect="/login" isLocked={!isAuth()}>
							<PrivateRouter />
						</ProtectedRoute>
					}
				/>

				{/* ADMIN ROUTER */}
				<Route
					errorElement={<MissingRoute />}
					path="admin/*"
					element={<AdminRouter />}
				/>
			</Routes>
		</Layout>
	)
}

export default App
