import { ADMIN_ROUTES, PRIVATE_ROUTES, PUBLIC_ROUTES } from "@/constants"
import { useHovers } from "@/hooks"
import { useAuthStore } from "@/stores"
import { useEffect, useMemo, useRef, useState } from "react"
import { HeaderProps } from "./Header.types"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useHeader = (props: HeaderProps) => {
	const { rightMenu } = props
	const { isAuth, deleteSession, isAdmin } = useAuthStore()
	const [isMobileScreen, setIsMobileScreen] = useState(false)
	const [refs, hovering] = useHovers()
	const pageRef = useRef(window)
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = (): void => {
		setIsMenuOpen(!isMenuOpen)
	}

	const onDeleteSession = (): void => {
		deleteSession()
		toggleMenu()
	}

	const linksArray = useMemo(() => {
		if (isAdmin()) {
			return ADMIN_ROUTES
		}
		return isAuth() ? PRIVATE_ROUTES : PUBLIC_ROUTES
	}, [isAuth(), isAdmin()])

	useEffect(() => {
		setIsMobileScreen(linksArray.length > 4)
		pageRef.current.addEventListener("resize", evt => {
			const currentScreen = evt.target as Window

			if (
				linksArray.length > 3 ||
				(currentScreen && currentScreen.innerWidth < 768)
			) {
				setIsMobileScreen(true)
			} else {
				setIsMobileScreen(false)
			}
		})

		return (): void => {
			pageRef.current.removeEventListener("resize", () => {})
		}
	}, [linksArray, pageRef.current])

	return {
		hovering,
		refs,
		rightMenu,
		isAuth,
		linksArray,
		toggleMenu,
		isMenuOpen,
		isMobileScreen,
		onDeleteSession,
	}
}
