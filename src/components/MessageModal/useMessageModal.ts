import { useEffect, useMemo, useState } from "react"
import { MessageModalProps } from "./MessageModal.types"

export const useMessageModal = (props: MessageModalProps) => {
	const {
		visible,
		message,
		title,
		onClose,
		onAccept,
		onDismiss,
		acceptOptions,
		dismissOptions,
		closeModalOnAccept = true,
		closeModalOnDismiss = true,
	} = props

	const [isOpenMessage, setIsOpenMessage] = useState(visible)

	const onCloseMessage = () => {
		onClose()
		setIsOpenMessage(false)
	}

	const handleAccept = useMemo(
		() =>
			closeModalOnAccept
				? () => {
						onClose()
						onAccept()
					}
				: onAccept,
		[closeModalOnAccept, onAccept]
	)
	const handleDismiss = useMemo(
		() =>
			closeModalOnDismiss && onDismiss
				? () => {
						onClose()
						onDismiss?.()
					}
				: onDismiss,
		[closeModalOnDismiss, onDismiss]
	)

	useEffect(() => {
		setIsOpenMessage(visible)
	}, [visible])

	return {
		isOpenMessage,
		onCloseMessage,
		handleAccept,
		handleDismiss,
		acceptOptions,
		dismissOptions,
		title,
		message,
	}
}
