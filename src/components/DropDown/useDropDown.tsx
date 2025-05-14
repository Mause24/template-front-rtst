import clsx from "clsx"
import { useState } from "react"
import { FaCheck } from "react-icons/fa"
import { Button } from "../Button"
import { Dropdown } from "./DropDown"
import { DropDownProps, ItemsDropDown } from "./DropDown.types"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useDropDown = (props: DropDownProps) => {
	const {
		isOpen = false,
		children,
		items,
		onChangeDropDown,
		closeBackdrop,
	} = props

	const [isOpenDropDown, setIsOpenDropDown] = useState(isOpen)
	const [hovering, setHovering] = useState<number | null>(null)

	const handleHovering = (index: number | null) => (): void => {
		setHovering(index)
	}

	const toggleDropDown = (): void => {
		setIsOpenDropDown(!isOpenDropDown)
		onChangeDropDown?.(isOpenDropDown)
	}

	const renderItems = (items: ItemsDropDown[]): JSX.Element[] => {
		return items.map((item, index) =>
			item.childs && item.childs?.length > 0 ? (
				<Button
					key={`${item.value}-${String(hovering)}`}
					type="button"
					variant="transparent"
					onMouseEnter={handleHovering(index)}
					onMouseLeave={handleHovering(null)}
				>
					<Dropdown items={item.childs} isOpen={hovering === index}>
						<div className="cursor-pointer flex w-full !justify-start px-4 py-2 text-sm dark:text-white hover:bg-light-primary-normal hover:text-white rounded-none">
							{item.label}
						</div>
					</Dropdown>
				</Button>
			) : (
				<Button
					key={item.value}
					variant="transparent"
					type="button"
					className="flex w-full !justify-start px-4 py-2 text-sm dark:text-white hover:bg-light-primary-normal hover:text-white rounded-none "
					onClick={() => {
						item.onClick?.(item.value)
					}}
				>
					{item.isSelected ? (
						<div
							className={clsx(
								"flex",
								"w-full",
								"justify-between",
								"items-center"
							)}
						>
							{item.label} <FaCheck />
						</div>
					) : (
						<div>{item.label}</div>
					)}
				</Button>
			)
		)
	}

	return {
		isOpenDropDown,
		children,
		items,
		toggleDropDown,
		setIsOpenDropDown,
		renderItems,
		closeBackdrop,
	}
}
