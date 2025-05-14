import { useEffect, useRef, useState } from "react"
import { HoverRef, HoverRefs } from "./useHover.types"

export const useHover = <T extends HTMLElement>(): [
	React.RefObject<T>,
	boolean,
] => {
	const [isHovered, setIsHovered] = useState<boolean>(false)
	const ref = useRef<T>(null)

	const handleMouseEnter = (): void => setIsHovered(true)
	const handleMouseLeave = (): void => setIsHovered(false)

	useEffect(() => {
		const node = ref.current
		if (node) {
			node.addEventListener("mouseenter", handleMouseEnter)
			node.addEventListener("mouseleave", handleMouseLeave)

			return (): void => {
				node.removeEventListener("mouseenter", handleMouseEnter)
				node.removeEventListener("mouseleave", handleMouseLeave)
			}
		}
	}, [ref.current])

	return [ref, isHovered]
}

export const useHovers = <T extends HTMLElement>(): [
	HoverRefs<T>,
	number | string | null,
] => {
	const [hoveredIndex, setHoveredIndex] = useState<number | string | null>(
		null
	)
	const refs = useRef<HoverRef<T>[]>([])

	const handleMouseEnter = (index: number | string) => (): void =>
		setHoveredIndex(index)

	const handleMouseLeave = (): void => setHoveredIndex(null)

	useEffect(() => {
		refs.current.forEach((node, index) => {
			if (node) {
				node.addEventListener("mouseenter", handleMouseEnter(index))
				node.addEventListener("mouseleave", handleMouseLeave)
			}
		})

		return (): void => {
			refs.current.forEach((node, index) => {
				if (node) {
					node.removeEventListener(
						"mouseenter",
						handleMouseEnter(index)
					)
					node.removeEventListener("mouseleave", handleMouseLeave)
				}
			})
		}
	}, [])

	return [refs, hoveredIndex]
}
