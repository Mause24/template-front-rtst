import { Layout, ProtectedRoute } from "@/components"
import "@/sass/index.scss"
import { useAuthStore } from "@/stores"
import { Route, Routes } from "react-router-dom"
import { AdminRouter, PrivateRouter, PublicRouter } from "./routers"

const App = (): JSX.Element => {
	const { isAuth, isAdmin } = useAuthStore()

	return (
		<Layout>
			<Routes>
				{/* PUBLIC ROUTER */}
				<Route index path="/*" element={<PublicRouter />} />
				{/* PRIVATE ROUTER */}
				<Route
					path="home/*"
					element={
						<ProtectedRoute redirect="/login" isLocked={!isAuth()}>
							<PrivateRouter />
						</ProtectedRoute>
					}
				/>
				{/* ADMIN ROUTER */}
				<Route
					path="admin/*"
					element={
						<ProtectedRoute redirect="/login" isLocked={!isAdmin()}>
							<AdminRouter />
						</ProtectedRoute>
					}
				/>
			</Routes>
		</Layout>
	)
}

export default App
