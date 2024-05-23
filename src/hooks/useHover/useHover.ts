import { useEffect, useRef, useState } from "react"
import { HoverRef, HoverRefs } from "./useHover.types"

export const useHover = <T extends HTMLElement>(): [
	React.RefObject<T>,
	boolean,
] => {
	const [isHovered, setIsHovered] = useState<boolean>(false)
	const ref = useRef<T>(null)

	const handleMouseEnter = () => setIsHovered(true)
	const handleMouseLeave = () => setIsHovered(false)

	useEffect(() => {
		const node = ref.current
		if (node) {
			node.addEventListener("mouseenter", handleMouseEnter)
			node.addEventListener("mouseleave", handleMouseLeave)

			return () => {
				node.removeEventListener("mouseenter", handleMouseEnter)
				node.removeEventListener("mouseleave", handleMouseLeave)
			}
		}
	}, [ref.current])

	return [ref, isHovered]
}

export const useHovers = <T extends HTMLElement>(): [
	HoverRefs<T>,
	number | null,
] => {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
	const refs = useRef<HoverRef<T>[]>([])

	const handleMouseEnter = (index: number) => () => setHoveredIndex(index)
	const handleMouseLeave = () => setHoveredIndex(null)

	useEffect(() => {
		refs.current.forEach((node, index) => {
			if (node) {
				node.addEventListener("mouseenter", handleMouseEnter(index))
				node.addEventListener("mouseleave", handleMouseLeave)
			}
		})

		return () => {
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
