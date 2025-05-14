import { HTMLInputTypeAttribute } from "react"

export type InputVariants = "primary" | "secondary"
export type InputTypes = "normal" | "googleInput"

export type InputNativeTypes = HTMLInputTypeAttribute

export interface InputProps
	extends React.DetailedHTMLProps<
			Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">,
			HTMLInputElement
		>,
		GeneralCustomInputProps {
	type?: InputNativeTypes
}

export interface GeneralCustomInputProps {
	variant?: InputVariants
	customType?: InputTypes
	label?: string
	error?: string | JSX.Element
	leftIcon?: JSX.Element
	rightIcon?: JSX.Element
	// CLASSNAMES
	inputClassname?: string
	containerClassname?: string
	labelClassname?: string
}
