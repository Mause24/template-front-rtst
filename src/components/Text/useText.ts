import clsx from "clsx"
import {
	TextColors,
	TextProps,
	TextSizes,
	TextTypes,
	TextWeights,
} from "./Text.types"

export const useText = <T extends keyof TextTypes>(props: TextProps<T>) => {
	const {
		type,
		children,
		weight,
		props: textAttributes,
		size,
		color = "primary",
	} = props

	const defaultTextProps: Partial<TextTypes> = {
		b: { className: clsx("font-mono", "text-base") },
		h1: { className: clsx("font-mono", "text-4xl") },
		h2: { className: clsx("font-mono", "text-3xl") },
		h3: { className: clsx("font-mono", "text-3xl") },
		h4: { className: clsx("font-mono", "text-xl") },
		h5: { className: clsx("font-mono", "text-xl") },
		h6: { className: clsx("font-mono", "text-xl") },
		label: {
			className: clsx("font-mono", "text-base"),
		},
		p: { className: clsx("font-mono", "text-base") },
		span: {
			className: clsx("font-mono", "text-base"),
		},
		strong: {
			className: clsx("font-mono", "text-base"),
		},
		legend: {
			className: clsx("font-mono", "text-base"),
		},
	}

	const mergedProps = {
		...defaultTextProps[type],
		...textAttributes,
		className: clsx(
			defaultTextProps[type]?.className ?? "",
			textAttributes?.className,
			size && TextSizes[size],
			weight && TextWeights[weight],
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
