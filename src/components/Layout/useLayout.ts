import { useAuthStore } from "@/stores"
import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { LayoutProps } from "./Layout.types"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useLayout = (props: LayoutProps) => {
	const { children } = props
	const { isAuth, isAdmin } = useAuthStore()
	const location = useLocation()
	const navigate = useNavigate()

	// Define las rutas permitidas
	const adminRoutes = ["/admin"]
	const authRoutes = ["/home"]
	const publicRoutes = ["/login", "/register"]

	useEffect(() => {
		const currentPath = location.pathname

		switch (true) {
			case isAdmin() && !adminRoutes.includes(currentPath):
				navigate("/admin")
				break
			case isAuth() && !authRoutes.includes(currentPath):
				navigate("/home")
				break
			case !isAuth() && !isAdmin():
				if (!publicRoutes.includes(currentPath)) {
					navigate("/login")
				}
				break
		}
	}, [isAuth(), isAdmin(), location.pathname, navigate])

	return { children }
}
