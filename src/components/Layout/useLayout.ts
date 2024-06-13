import { ADMIN_ROUTES, PRIVATE_ROUTES, PUBLIC_ROUTES } from "@/Constants"
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
	const privateRoutes = PRIVATE_ROUTES.map(item => item.route)
	const adminRoutes = ADMIN_ROUTES.map(item => item.route)
	const publicRoutes = PUBLIC_ROUTES.map(item => item.route)

	useEffect(() => {
		const currentPath = location.pathname

		switch (true) {
			case isAdmin() && !adminRoutes.includes(currentPath):
				navigate("/home")
				break
			case !isAdmin() && isAuth() && !privateRoutes.includes(currentPath):
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
