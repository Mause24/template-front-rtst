import { useNavigate } from "react-router-dom"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useMissingRoute = () => {
	const navigate = useNavigate()

	const handleGoBack = (): void => {
		navigate("/")
	}

	return {
		handleGoBack,
	}
}
