import { forwardRef } from "react"
import { ButtonProps } from "./Button.types"
import { useButton } from "./useButton"

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(props, ref): JSX.Element => {
		const { buttonStyles, disabled, renderChild, rest } = useButton(props)

		return (
			<button
				ref={ref}
				disabled={disabled}
				className={buttonStyles}
				{...rest}
			>
				{renderChild}
			</button>
		)
	}
)
