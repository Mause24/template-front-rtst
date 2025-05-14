import clsx from "clsx"
import { useMemo } from "react"
import { Text } from "../Text"
import { ButtonProps, ButtonVariants } from "./Button.types"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useButton = (props: ButtonProps) => {
	const {
		className,
		label,
		children,
		variant = "primary",
		disabled,
		leftIcon,
		rightIcon,
		...rest
	} = props

	const buttonVariantsStyles: {
		[key in ButtonVariants]: { button: string; label: string }
	} = {
		primary: {
			button: clsx(
				"bg-light-primary-normal",
				"dark:bg-light-secondary-navBar",
				"p-3",
				"hover:bg-white",
				"[&:hover>*]:text-light-primary-normal",
				"[&:hover>*]:dark:text-black",
				"hover:shadow-md"
			),
			label: clsx("text-white"),
		},
		secondary: {
			button: clsx(
				"bg-white",
				"p-3",
				"hover:bg-light-primary-normal",
				"[&:hover>*]:text-white",
				"shadow-md"
			),
			label: clsx("text-light-primary-normal"),
		},
		outline: {
			button: clsx(
				"bg-white",
				"p-3",
				"outline",
				"outline-light-primary-normal",
				"[&:hover>*]:font-bold",
				"duration-[100ms]",
				"hover:outline-4"
			),
			label: clsx("text-light-primary-normal", "duration-[100ms]"),
		},
		disabled: {
			button: clsx(
				"bg-gray-300",
				"p-3",
				"cursor-not-allowed",
				"opacity-50"
			),
			label: clsx("text-black"),
		},
		transparent: {
			button: clsx("bg-transparent"),
			label: clsx(""),
		},
	}

	const buttonStyles = useMemo(
		() =>
			clsx(
				"rounded-lg",
				"transition-all",
				"duration-[200ms]",
				"ease-linear",
				"flex",
				"justify-center",
				"items-center",
				disabled
					? buttonVariantsStyles["disabled"].button
					: buttonVariantsStyles[variant].button,
				className
			),
		[variant, className, disabled]
	)

	const renderChild = useMemo<JSX.Element>(
		() => (
			<>
				{leftIcon && <div>{leftIcon}</div>}
				{label ? (
					<Text
						size="xl"
						className={clsx(
							"transition-all",
							"duration-[200ms]",
							"ease-linear",
							disabled
								? buttonVariantsStyles["disabled"].label
								: buttonVariantsStyles[variant].label
						)}
					>
						{label}
					</Text>
				) : (
					(children as JSX.Element)
				)}
				{rightIcon && <div>{rightIcon}</div>}
			</>
		),
		[children, label, variant, disabled, leftIcon, rightIcon]
	)

	return {
		buttonStyles,
		renderChild,
		disabled,
		rest,
	}
}
