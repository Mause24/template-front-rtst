import { PROFILES } from "@/interfaces"

export interface Session {
	token: string
	user: User
}

export interface User {
	id: number
	name: string
	lastname: string
	email: string
	password: string
	avatarImage: null
	profileId: number
	Profile: Profile
}

export interface Profile {
	id: number
	name: keyof typeof PROFILES
}

export interface AuthStoreProps {
	session: Session
	setSession: (_newSession: Session) => void
	isAuth: () => boolean
	isAdmin: () => boolean
	deleteSession: () => void
}
