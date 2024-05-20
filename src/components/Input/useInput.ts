import { useHovers } from "@/hooks"
import clsx from "clsx"
import { useMemo, useRef } from "react"
import { InputProps } from "./Input.types"

export const useInput = (props: InputProps) => {
	const {
		containerClassname,
		labelClassname,
		error,
		id,
		className,
		variant = "primary",
		type = "normal",
		label,
		...rest
	} = props
	const refInput = useRef<HTMLInputElement>(null)
	const refInput2 = useRef<HTMLInputElement>(null)

	/* const { hovering } = useHover({ ref: refInput }) */
	const [hover1, hover2] = useHovers({ refs: [refInput, refInput2] })

	const stylesTypes = {
		normal: {
			container: clsx(""),
			label: clsx(""),
			input: clsx(""),
		},
		googleInput: {
			container: clsx(""),
			label: clsx(""),
			input: clsx(""),
		},
	}

	const stylesVariants = {
		primary: clsx(
			"focus-within:border-primary-normal",
			hover1 !== -1 ? "border-primary-normal" : "border-gray-500"
		),
		secondary: clsx(""),
	}

	const styleType = useMemo(() => stylesTypes[type], [type])

	const styleVariant = useMemo(
		() => stylesVariants[variant],
		[variant, hover1]
	)

	return {
		className,
		containerClassname,
		labelClassname,
		styleType,
		styleVariant,
		label,
		id,
		error,
		refInput,
		refInput2,
		rest,
	}
}
