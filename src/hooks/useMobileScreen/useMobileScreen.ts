import { useEffect, useRef, useState } from "react"
import { useMobileScreenProps } from "./useMobileScreen.types"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useMobileScreen = ({ minSize = 768 }: useMobileScreenProps) => {
	const pageRef = useRef(window)
	const [isMobileScreen, setIsMobileScreen] = useState(false)

	useEffect(() => {
		if (pageRef.current && pageRef.current.innerWidth < minSize) {
			setIsMobileScreen(true)
		} else {
			setIsMobileScreen(false)
		}

		pageRef.current.addEventListener("resize", evt => {
			const currentScreen = evt.target as Window

			if (currentScreen && currentScreen.innerWidth < minSize) {
				setIsMobileScreen(true)
			} else {
				setIsMobileScreen(false)
			}
		})

		return (): void => {
			pageRef.current.removeEventListener("resize", () => {})
		}
	}, [pageRef.current.innerWidth])

	return {
		isMobileScreen,
		widthScreen: pageRef.current.innerWidth,
		heightScreen: pageRef.current.innerHeight,
	}
}
