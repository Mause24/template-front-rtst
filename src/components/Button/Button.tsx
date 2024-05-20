import clsx from "clsx"
import { ButtonProps } from "./Button.types"
import { useButton } from "./useButton"

export const Button = (props: ButtonProps): JSX.Element => {
	const { className, rest } = useButton(props)

	return <button className={clsx(className)} {...rest} />
}
