export type InputVariants = "primary" | "secondary"
export type InputTypes = "normal" | "googleInput"

export interface InputProps
	extends React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	error?: string | JSX.Element
	variant?: InputVariants
	customType?: InputTypes
	label?: string
	// CLASSNAMES
	containerClassname?: string
	labelClassname?: string
}
