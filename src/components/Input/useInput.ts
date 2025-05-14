import { useHover } from "@/hooks"
import clsx from "clsx"
import { isEmpty } from "lodash"
import { useMemo } from "react"
import { InputNativeTypes, InputProps } from "./Input.types"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useInput = <T extends HTMLElement>(props: InputProps) => {
	const {
		containerClassname,
		labelClassname,
		inputClassname,
		error,
		id,
		className,
		variant = "primary",
		customType = "normal",
		value,
		label,
		placeholder,
		type,
		leftIcon,
		rightIcon,
		...rest
	} = props

	const [refInput, hovering] = useHover<T>()

	const isNotEmptyInput = (
		_: string | number | readonly string[] | undefined,
		type?: InputNativeTypes
	): boolean => {
		switch (true) {
			case type === "number":
				return typeof value === "number" || !isEmpty(value)

			case type === "date" || type === "datetime-local":
				return true

			default:
				return !isEmpty(value)
		}
	}

	const stylesTypes = {
		normal: {
			container: clsx(""),
			label: clsx(""),
			input: clsx(""),
		},
		googleInput: {
			container: clsx(
				"relative",
				"[&>label:has(+*:focus-within)]:bg-white",
				"[&>label:has(+*:focus-within)]:!text-xs",
				"[&>label:has(+*:focus-within)]:-translate-y-[calc(50%+8px)]",
				"[&>label:has(+*:focus-within)]:translate-x-[-5px]"
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
				isNotEmptyInput(value, type) &&
					clsx(
						"bg-white",
						"!text-xs",
						"-translate-y-[calc(50%+8px)]",
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
			"focus-within:border-light-primary-normal",
			"focus-within:dark:border-light-secondary-aside",
			hovering !== false
				? "border-light-primary-normal"
				: "border-[#e5e7eb]"
		),
		secondary: clsx(""),
	}

	const styleType = useMemo(
		() => stylesTypes[customType],
		[customType, value, type]
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
		value,
		refInput,
		type,
		leftIcon,
		rightIcon,
		inputClassname,
		rest,
	}
}
