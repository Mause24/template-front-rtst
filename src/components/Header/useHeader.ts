import { ADMIN_ROUTES, PRIVATE_ROUTES, PUBLIC_ROUTES } from "@/Constants"
import { useHovers } from "@/hooks"
import { useAuthStore } from "@/stores"
import { useMemo, useState } from "react"
import { HeaderProps } from "./Header.types"

export const useHeader = (props: HeaderProps) => {
	const { rightMenu } = props
	const { isAuth, deleteSession, isAdmin } = useAuthStore()
	const [refs, hovering] = useHovers()
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	const onDeleteSession = () => {
		deleteSession()
		toggleMenu()
	}

	const linksArray = useMemo(() => {
		if (isAdmin()) {
			return ADMIN_ROUTES
		}
		return isAuth() ? PRIVATE_ROUTES : PUBLIC_ROUTES
	}, [isAuth(), isAdmin()])

	return {
		hovering,
		refs,
		rightMenu,
		isAuth,
		linksArray,
		toggleMenu,
		isMenuOpen,
		onDeleteSession,
	}
}
