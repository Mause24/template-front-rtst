import { useHovers } from "@/hooks"
import { useAuthStore } from "@/stores"
import { useMemo } from "react"
import { HeaderProps } from "./Header.types"

export const useHeader = (props: HeaderProps) => {
	const { isAdmin } = props
	const { isAuth, deleteSession } = useAuthStore()
	const [refs, hovering] = useHovers()
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
							name: "Iniciar Sesion",
							route: "/login",
						},
						{
							id: 2,
							name: "Registro",
							route: "/register",
						},
					],
		[isAuth()]
	)

	return {
		hovering,
		refs,
		isAdmin,
		isAuth,
		linksArray,
		deleteSession,
	}
}
