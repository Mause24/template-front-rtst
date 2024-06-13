import clsx from "clsx"
import { Button } from "../Button"
import { CustomModal } from "../Modal"
import { Text } from "../Text"
import { MessageModalProps } from "./MessageModal.types"
import { useMessageModal } from "./useMessageModal"

export const MessageModal = (props: MessageModalProps): JSX.Element => {
	const {
		isOpenMessage,
		message,
		onCloseMessage,
		title,
		acceptOptions,
		dismissOptions,
		handleAccept,
		handleDismiss,
	} = useMessageModal(props)
	return (
		<CustomModal
			className="flex justify-center items-center"
			visible={isOpenMessage}
			onClose={onCloseMessage}
		>
			<div
				className={clsx(
					"bg-white",
					"rounded-lg",
					"p-3",
					"flex",
					"flex-col",
					"gap-y-4"
				)}
			>
				<Text props={{ className: "text-center" }} type="h3">
					{title}
				</Text>
				{message && <Text type="p">{message}</Text>}
				<div className="flex justify-around">
					<Button
						label={acceptOptions?.label ?? "Aceptar"}
						onClick={handleAccept}
					/>
					{handleDismiss && (
						<Button
							label={dismissOptions?.label ?? "Cancelar"}
							onClick={handleDismiss}
						/>
					)}
				</div>
			</div>
		</CustomModal>
	)
}
