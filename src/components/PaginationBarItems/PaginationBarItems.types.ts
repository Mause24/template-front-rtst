import { PaginationBarVariants } from "../PaginationBar/PaginationBar.types"

export interface PaginationBarItemsProps {
	index?: number
	size?: number
	onChangeIndex?: (index: number) => void
	variants?: PaginationBarVariants
	// STYLES
	className?: {
		container?: string
	}
}
