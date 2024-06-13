export interface MessageModalProps {
	visible: boolean
	onClose: () => void
	title: string
	message?: string
	onAccept: () => void
	onDismiss?: () => void
	acceptOptions?: OptionsProps
	dismissOptions?: OptionsProps
	closeModalOnAccept?: boolean
	closeModalOnDismiss?: boolean
}

export interface OptionsProps {
	label: string
}
