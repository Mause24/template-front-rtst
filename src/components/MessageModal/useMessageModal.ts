import { useEffect, useMemo, useState } from "react"
import { MessageModalProps } from "./MessageModal.types"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
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

	const onCloseMessage = (): void => {
		onClose()
		setIsOpenMessage(false)
	}

	const handleAccept = useMemo(
		() =>
			closeModalOnAccept
				? (): void => {
						onClose()
						onAccept()
					}
				: onAccept,
		[closeModalOnAccept, onAccept]
	)
	const handleDismiss = useMemo(
		() =>
			closeModalOnDismiss && onDismiss
				? (): void => {
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
