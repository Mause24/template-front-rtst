export interface ItemsDropDown {
	label: string
	value: string | number
	onClick?: (val: string | number) => void
	childs?: ItemsDropDown[]
	isSelected?: boolean
}

export interface DropDownProps {
	items: ItemsDropDown[]
	isOpen?: boolean
	closeBackdrop?: boolean
	onChangeDropDown?: (value: boolean) => void
	children: JSX.Element
}
