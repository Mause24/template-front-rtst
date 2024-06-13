import { useEffect, useState } from "react"
import { HamburgerMenuProps } from "./HamburgerMenu.types"

export const useHamburgerMenu = (props: HamburgerMenuProps) => {
	const { isOpen, handleOpen, className } = props
	const [isCurrentOpen, setIsCurrentOpen] = useState<boolean>(Boolean(isOpen))

	const setIsOpen = (state: boolean) => {
		handleOpen(state)
		setIsCurrentOpen(state)
	}

	useEffect(() => {
		setIsCurrentOpen(Boolean(isOpen))
	}, [isOpen])

	return {
		isCurrentOpen,
		setIsOpen,
		className,
	}
}
