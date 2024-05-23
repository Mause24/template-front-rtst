import { useMemo } from "react"
import { ProtectedRouteProps } from "./ProtectedRoute.types"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useProtectedRoute = (props: ProtectedRouteProps) => {
	const {
		extraValidation = (): boolean => true,
		isLocked,
		redirect,
		children,
	} = props

	const isCurrentLocked = useMemo(
		() => isLocked || !extraValidation(),
		[isLocked, extraValidation()]
	)

	return { extraValidation, isCurrentLocked, redirect, children }
}
