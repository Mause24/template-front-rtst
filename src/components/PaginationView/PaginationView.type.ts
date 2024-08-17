import { PaginationBarsProps } from "../PaginationBar"

export interface PaginationViewProps<T> extends PaginationBarsProps {
	data: T[]
	cols?: number
	rows?: number
	minWidthItems?: number
	renderComponent?: (item: T, index: number) => JSX.Element | JSX.Element[]
	keyStractor?: (item: T, index: number) => string | number
	emptyState?: JSX.Element
	loadingState?: JSX.Element
	isLoading?: boolean
	onChangePage?: (index: number) => void
	className?: string
	classNameContainer?: string
}
