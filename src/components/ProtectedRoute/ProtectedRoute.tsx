import { Navigate } from "react-router-dom"
import { ProtectedRouteProps } from "./ProtectedRoute.types"
import { useProtectedRoute } from "./useProtectedRoute"

export const ProtectedRoute = (props: ProtectedRouteProps): JSX.Element => {
	const { isCurrentLocked, redirect, children } = useProtectedRoute(props)

	return isCurrentLocked ? (
		<Navigate replace to={redirect} />
	) : (
		<>{children}</>
	)
}
