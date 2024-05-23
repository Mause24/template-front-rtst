import clsx from "clsx"
import { useMemo } from "react"
import { Text } from "../Text"
import { ButtonProps, ButtonVariants } from "./Button.types"

export const useButton = (props: ButtonProps) => {
	const {
		className,
		title,
		children,
		variant = "primary",
		disabled,
		...rest
	} = props

	const buttonVariantsStyles: {
		[key in ButtonVariants]: { button: string; label: string }
	} = {
		primary: {
			button: clsx(
				"bg-primary-normal",
				"p-3",
				"hover:bg-white",
				"[&:hover>*]:text-primary-normal",
				"hover:shadow-md"
			),
			label: clsx("text-white"),
		},
		secondary: {
			button: clsx(
				"bg-white",
				"p-3",
				"hover:bg-primary-normal",
				"[&:hover>*]:text-white",
				"shadow-md"
			),
			label: clsx("text-primary-normal"),
		},
		outline: {
			button: clsx(
				"bg-white",
				"p-3",
				"outline",
				"outline-primary-normal",
				"[&:hover>*]:font-bold",
				"duration-[100ms]",
				"hover:outline-4"
			),
			label: clsx("text-primary-normal", "duration-[100ms]"),
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
				disabled
					? buttonVariantsStyles["disabled"].button
					: buttonVariantsStyles[variant].button,
				className
			),
		[variant, className, disabled]
	)

	const renderChild = useMemo<JSX.Element>(
		() =>
			title ? (
				<Text
					size="xl"
					type="span"
					props={{
						className: clsx(
							"transition-all",
							"duration-[200ms]",
							"ease-linear",
							disabled
								? buttonVariantsStyles["disabled"].label
								: buttonVariantsStyles[variant].label
						),
					}}
				>
					{title}
				</Text>
			) : (
				(children as JSX.Element)
			),
		[children, title, variant, disabled]
	)

	return {
		buttonStyles,
		renderChild,
		disabled,
		rest,
	}
}
