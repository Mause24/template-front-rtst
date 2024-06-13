export type AnimationsModal =
	| 'slide-up'
	| 'slide-down'
	| 'slide-left'
	| 'slide-right'
	| 'fade'
	| 'scale'
	| 'tv'

export interface CustomModalProps {
	visible: boolean
	onClose: () => void
	children: JSX.Element | JSX.Element[]
	transparent?: boolean
	className?: string
	onlyChild?: boolean
	animationType?: AnimationsModal
	animationTypeIn?: AnimationsModal
	animationTypeOut?: AnimationsModal
	closeBackdrop?: boolean
	closeButton?: boolean
	backDropClassName?: string
	containerClassName?: string
}
