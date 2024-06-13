import { PROFILES } from "@/interfaces"
import { isEmpty } from "lodash"
import { create } from "zustand"
import { AuthStoreProps, Session } from "./AuthStore.types"

export const useAuthStore = create<AuthStoreProps>((set, get) => {
	const currentLocalSession = JSON.parse(
		String(localStorage.getItem("session"))
	)

	const setSession = (newSession: Session): void => {
		localStorage.setItem("session", JSON.stringify(newSession))

		set({ session: newSession })
	}

	const deleteSession = (): void => {
		localStorage.removeItem("session")

		set({ session: {} as Session })
	}

	const isAuth = (): boolean => {
		const { session } = get()

		return !isEmpty(session)
	}
	const isAdmin = (): boolean => {
		const { session } = get()

		return (
			!isEmpty(session) &&
			session.user.Profile.id === PROFILES.ADMIN &&
			session.user.Profile.name === "ADMIN"
		)
	}

	return {
		session: currentLocalSession ?? ({} as Session),
		deleteSession,
		isAuth,
		isAdmin,
		setSession,
	}
})
