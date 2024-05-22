import { times } from "lodash"
import { useEffect, useState } from "react"
import { UseHoverProps, UseHoversProps } from "./useHover.types"

export const useHovers = <T extends HTMLElement>({
	refs,
}: UseHoversProps<T>) => {
	const defaultValue = times(refs.length, () => -1)
	const [hoverings, setHoverings] =
		useState<(number | string)[]>(defaultValue)

	const onHoverIn = (index: number, value: number | string) => {
		setHoverings(state =>
			state.map((item, i) => (i !== index ? item : value))
		)
	}

	const onHoverOut = (index: number) => {
		setHoverings(state => state.map((item, i) => (i !== index ? item : -1)))
	}

	const setHandlers = () =>
		refs.forEach((ref, index) => {
			if (ref.current) {
				ref.current.onmouseenter = ev => {
					const currentTarget = ev.target as HTMLElement
					onHoverIn(index, currentTarget.id)
				}
				ref.current.onmouseleave = () => onHoverOut(index)
			}
		})

	useEffect(() => setHandlers(), [refs])

	return hoverings
}

export const useHover = <T extends HTMLElement>({ ref }: UseHoverProps<T>) => {
	const [hovering, setHovering] = useState<number | string>(-1)

	const onHoverIn = (index: number | string) => setHovering(index)

	const onHoverOut = () => setHovering(-1)

	const setHandlers = () => {
		if (ref.current) {
			ref.current!.onmouseenter = ev => {
				const currentTarget = ev.target as HTMLElement
				onHoverIn(currentTarget.id)
			}
			ref.current!.onmouseleave = () => onHoverOut()
		}
	}

	useEffect(() => setHandlers(), [ref])

	return hovering
}
