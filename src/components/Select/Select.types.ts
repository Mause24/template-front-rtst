export interface SelectItem {
	label: string
	value: string | number
}

export interface SelectProps<T extends SelectItem> {
	data: T[]
	selectOption?: T
	hanldeSelectOption?: (item: T) => void
	placeholder?: string
	children?: JSX.Element
	filter?: boolean
	renderSelectedOptionLabel?: (item: T) => string
	renderOptionsLabel?: (item: T) => string
	keyExtractor?: (item: T, index: number) => string
	//STYLES
	className?: {
		selectItem?: string
		selected?: string
		expandContainer?: string
		container?: string
		childrenContainer?: string
	}
}
