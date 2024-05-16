import { useAuthStore } from "@/stores"
import { useMemo } from "react"
import { LayoutProps } from "./Layout.types"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useLayout = (props: LayoutProps) => {
	const { isAdmin, children } = props
	const { isAuth } = useAuthStore()

	const redirectTo = useMemo(() => {
		switch (true) {
			case isAdmin:
				return "admin/"
			case isAuth():
				return "home/"
			default:
				return "login/"
		}
	}, [isAdmin, isAuth()])

	return { isAdmin, children, redirectTo }
}
