import clsx from "clsx"
import { ButtonProps } from "./Button.types"

export const Button = (props: ButtonProps): JSX.Element => {
	const { className, ...rest } = props
	return <button className={clsx(className)} {...rest} />
}
