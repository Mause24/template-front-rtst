import { useAuthStore } from "@/stores"
import { useNavigate } from "react-router-dom"

export const useMissingRoute = () => {
	const navigate = useNavigate()
	const { isAuth, isAdmin } = useAuthStore()

	const handleGoBack = () => {
		switch (true) {
			case isAdmin():
				navigate("/admin")
				break
			case isAuth():
				navigate("/home")
				break
			default:
				navigate("/login")
				break
		}
	}

	return {
		handleGoBack,
	}
}
