import { useHover } from "@/hooks"
import clsx from "clsx"
import { isEmpty } from "lodash"
import { useMemo } from "react"
import { InputProps } from "./Input.types"

export const useInput = (props: InputProps) => {
	const {
		containerClassname,
		labelClassname,
		error,
		id,
		className,
		variant = "primary",
		customType = "normal",
		value,
		label,
		placeholder,
		...rest
	} = props

	const [refInput, hovering] = useHover<HTMLInputElement>()

	const stylesTypes = {
		normal: {
			container: clsx(""),
			label: clsx(""),
			input: clsx(""),
		},
		googleInput: {
			container: clsx(
				"relative",
				"[&>label:has(+input:focus-within)]:bg-white",
				"[&>label:has(+input:focus-within)]:!text-xs",
				"[&>label:has(+input:focus-within)]:translate-y-[-20px]",
				"[&>label:has(+input:focus-within)]:translate-x-[-5px]"
			),
			label: clsx(
				"absolute",
				"text-sm",
				"left-3",
				"top-[12px]",
				"transition-all",
				"duration-[50ms]",
				"ease-linear",
				"pointer-events-none",
				!isEmpty(value) &&
					clsx(
						"bg-white",
						"!text-xs",
						"translate-y-[-20px]",
						"translate-x-[-5px]"
					)
			),
			input: clsx(),
		},
	}

	const currentPlaceholder = useMemo(
		() => (customType === "googleInput" ? undefined : placeholder),
		[placeholder, customType]
	)

	const stylesVariants = {
		primary: clsx(
			"focus-within:border-primary-normal",
			hovering !== false ? "border-primary-normal" : "border-[#e5e7eb]"
		),
		secondary: clsx(""),
	}

	const styleType = useMemo(
		() => stylesTypes[customType],
		[customType, value]
	)

	const styleVariant = useMemo(
		() => stylesVariants[variant],
		[variant, hovering]
	)

	return {
		className,
		containerClassname,
		labelClassname,
		styleType,
		styleVariant,
		label,
		currentPlaceholder,
		id,
		error,
		refInput,
		rest,
	}
}
