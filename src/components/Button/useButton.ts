import { ButtonProps } from "./Button.types"

export const useButton = (props: ButtonProps) => {
	const { className, ...rest } = props

	return {
		className,
		rest,
	}
}
