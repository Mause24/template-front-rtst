export type ButtonVariants =
	| "primary"
	| "secondary"
	| "outline"
	| "transparent"
	| "disabled"

export interface ButtonProps
	extends React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	variant?: ButtonVariants
	label?: string
}
