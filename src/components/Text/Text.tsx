import { createElement } from "react"
import { TextProps, TextTypes } from "./Text.types"
import { useText } from "./useText"

export const Text = <T extends keyof TextTypes = "span">(
	props: TextProps<T>
): JSX.Element => {
	const { type, children, mergedProps } = useText(props)

	return createElement(type, mergedProps, children)
}
