import { useMobileScreen } from "@/hooks"
import { useMemo } from "react"
import { Slider3DProps } from "./Slider3D.types"
import { ItemSlider3DProps } from "./components"

export const useSlider3D = <T extends ItemSlider3DProps>(
	props: Slider3DProps<T>
	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
) => {
	const {
		items,
		keyExtractor,
		renderItem,
		itemWidthDesktop = 500,
		itemWidthMobile = 170,
	} = props
	const { isMobileScreen, widthScreen } = useMobileScreen({})
	const sideLarge = useMemo(() => {
		/* const viewPercentage = isMobileScreen ? 0.5 : 0.8 */
		return isMobileScreen ? itemWidthMobile : itemWidthDesktop
	}, [widthScreen, isMobileScreen])

	const translateZHeight = useMemo(() => {
		const GAP = isMobileScreen ? 20 : 40
		const angle = 360 / Math.max(items.length, 3) / 2
		const degreeAngle = (angle * Math.PI) / 180
		const apothemHeight = sideLarge / (2 * Math.tan(degreeAngle))
		return apothemHeight + GAP
	}, [sideLarge, items.length, isMobileScreen])

	return {
		items,
		sideLarge,
		renderItem,
		keyExtractor,
		translateZHeight,
	}
}
