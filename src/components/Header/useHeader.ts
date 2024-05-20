import { useHovers } from "@/hooks"
import { useAuthStore } from "@/stores"
import { times } from "lodash"
import { useMemo, useRef } from "react"
import { HeaderProps } from "./Header.types"

export const useHeader = (props: HeaderProps) => {
	const { isAdmin } = props
	const { isAuth, deleteSession } = useAuthStore()
	const refCloseButton = useRef<HTMLLIElement>(null)

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

	const refLinks = times(linksArray.length, () =>
		useRef<HTMLAnchorElement>(null)
	)
	const [hoverCloseButton, ...hoverLinks] = useHovers({
		refs: [refCloseButton, ...refLinks] as React.RefObject<HTMLElement>[],
	})

	return {
		hoverLinks,
		hoverCloseButton,
		refCloseButton,
		refLinks,
		isAdmin,
		isAuth,
		linksArray,
		deleteSession,
	}
}
