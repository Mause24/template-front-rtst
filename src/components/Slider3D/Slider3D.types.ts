import { ItemSlider3DProps } from "./components"

export interface Slider3DProps<T extends ItemSlider3DProps> {
	items: T[]
	keyExtractor?: (item: T, index: number) => string
	renderItem?: (item: T, index: number) => JSX.Element
	itemWidthDesktop?: number
	itemWidthMobile?: number
}
