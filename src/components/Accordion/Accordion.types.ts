export interface AccordionProps {
	title?: string
	className?: string
	children: JSX.Element | JSX.Element[]
	header?: (options: HeaderOptions) => JSX.Element
	isOpen?: boolean
	handleOpen?: () => void
	heightContent?: number
	// STYLES
	bodyClassName?: string
}

export interface HeaderOptions {
	isOpen: boolean
	title?: string
}
