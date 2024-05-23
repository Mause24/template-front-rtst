export interface Session {
	user: User
	token: string
}

export interface User {
	id: number
	name: string
	lastname: string
	email: string
	password: string
	avatarImage: string
	profileId: number
}

export interface AuthStoreProps {
	session: Session
	setSession: (_newSession: Session) => void
	isAuth: () => boolean
	isAdmin: () => boolean
	deleteSession: () => void
}
