import { useAuthStore } from "@/stores"
import { useMemo, useState } from "react"
import { HeaderProps } from "./Header.types"

export const useHeader = (props: HeaderProps) => {
	const { isAdmin } = props
	const [hovering, setHovering] = useState<number | string>(-1)
	const { isAuth, deleteSession } = useAuthStore()

	const onHoverIn = (index: number | string) => () => {
		setHovering(index)
	}

	const onHoverOut = () => {
		setHovering(-1)
	}

	const linksArray = useMemo(
		() =>
			isAuth()
				? [
						{
							id: 1,
							name: "Home",
							route: "/home",
						},
					]
				: [
						{
							id: 1,
							name: "Login",
							route: "/login",
						},
					],
		[isAuth()]
	)

	return {
		hovering,
		onHoverIn,
		onHoverOut,
		isAdmin,
		isAuth,
		linksArray,
		deleteSession,
	}
}
