import clsx from "clsx"
import { TextColors, TextProps, TextSizes, TextTypes } from "./Text.types"

export const useText = <T extends keyof TextTypes>(props: TextProps<T>) => {
	const { type, children, props: textAttributes, size, color } = props

	const defaultTextProps: TextTypes = {
		b: { className: clsx("text-primary-normal", "font-mono", "text-base") },
		h1: { className: clsx("text-primary-normal", "font-mono", "text-4xl") },
		h2: { className: clsx("text-primary-normal", "font-mono", "text-3xl") },
		h3: { className: clsx("text-primary-normal", "font-mono", "text-3xl") },
		h4: { className: clsx("text-primary-normal", "font-mono", "text-xl") },
		h5: { className: clsx("text-primary-normal", "font-mono", "text-xl") },
		h6: { className: clsx("text-primary-normal", "font-mono", "text-xl") },
		label: {
			className: clsx("text-primary-normal", "font-mono", "text-base"),
		},
		p: { className: clsx("text-primary-normal", "font-mono", "text-base") },
		span: {
			className: clsx("text-primary-normal", "font-mono", "text-base"),
		},
		strong: {
			className: clsx("text-primary-normal", "font-mono", "text-base"),
		},
		legend: {
			className: clsx("text-primary-normal", "font-mono", "text-base"),
		},
	}

	const mergedProps = {
		...defaultTextProps[type],
		...textAttributes,
		className: clsx(
			defaultTextProps[type].className,
			textAttributes?.className,
			size && TextSizes[size],
			color && TextColors[color]
		),
	} as any

	return {
		type,
		children,
		textAttributes,
		mergedProps,
	}
}
