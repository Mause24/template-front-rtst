import { ButtonProps } from "./Button.types"
import { useButton } from "./useButton"

export const Button = (props: ButtonProps): JSX.Element => {
	const { buttonStyles, disabled, renderChild, rest } = useButton(props)

	return (
		<button disabled={disabled} className={buttonStyles} {...rest}>
			{renderChild}
		</button>
	)
}
