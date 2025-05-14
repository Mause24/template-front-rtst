import { useInput } from "@/components"
import { TextAreaInputProps } from "./TextAreaInput.types"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useTextAreaInput = (props: TextAreaInputProps) => {
	const {
		containerClassname,
		labelClassname,
		error,
		id,
		className,
		variant = "primary",
		customType = "normal",
		value,
		label,
		placeholder,
		leftIcon,
		rightIcon,
		inputClassname,
		...rest
	} = props

	const { currentPlaceholder, refInput, styleType, styleVariant } =
		useInput<HTMLTextAreaElement>({
			containerClassname,
			labelClassname,
			error,
			id,
			className,
			variant,
			customType,
			value,
			label,
			placeholder,
			type: "text",
		})

	return {
		className,
		containerClassname,
		labelClassname,
		styleType,
		styleVariant,
		label,
		currentPlaceholder,
		id,
		error,
		value,
		refInput,
		leftIcon,
		rightIcon,
		inputClassname,
		rest,
	}
}
