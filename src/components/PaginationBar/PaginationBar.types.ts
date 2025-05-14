export type PaginationBarVariants = "primary" | "secondary"

export interface PaginationBarsProps {
	size?: number
	index?: number
	onPressPrevious?: (index: number) => void
	onPressNext?: (index: number) => void
	onPressPage?: (index: number) => void
	variants?: PaginationBarVariants
}
