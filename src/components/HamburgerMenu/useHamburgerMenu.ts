import { useEffect, useState } from "react"
import { HamburgerMenuProps } from "./HamburgerMenu.types"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useHamburgerMenu = (props: HamburgerMenuProps) => {
	const { isOpen, handleOpen, className } = props
	const [isCurrentOpen, setIsCurrentOpen] = useState<boolean>(Boolean(isOpen))

	const setIsOpen = (state: boolean): void => {
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
