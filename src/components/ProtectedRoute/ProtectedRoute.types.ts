export interface ProtectedRouteProps {
	isAdmin?: boolean
	isLocked: boolean
	redirect: string
	children: JSX.Element | JSX.Element[]
	extraValidation?: () => boolean
}
