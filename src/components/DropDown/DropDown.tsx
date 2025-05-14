import { Button, useDropDown } from "@/components"
import clsx from "clsx"
import React from "react"
import { DropDownProps } from "./DropDown.types"

export const Dropdown: React.FC<DropDownProps> = props => {
	const {
		isOpenDropDown,
		children,
		items,
		renderItems,
		toggleDropDown,
		closeBackdrop,
	} = useDropDown(props)

	return (
		<>
			{closeBackdrop && isOpenDropDown && (
				<Button
					type="button"
					variant="transparent"
					onClick={toggleDropDown}
					className={clsx(
						"absolute",
						"z-10",
						"rounded-none",
						"bottom-0",
						"left-0",
						"cursor-default",
						"w-dvw",
						"h-dvh"
					)}
				/>
			)}
			<div className="relative inline-block text-left w-full">
				{children}
				{isOpenDropDown && (
					<div
						className={clsx(
							closeBackdrop && isOpenDropDown && "z-10",
							"flex",
							"flex-col",
							"absolute",
							"bottom-0",
							"left-full",
							"mt-2",
							"w-56",
							"rounded-md",
							"shadow-lg",
							"dark:bg-light-secondary-aside",
							"border-[1px]",
							"bg-white",
							"border-dark-secondary-alternate",
							"ring-black",
							"ring-opacity-5",
							"focus:outline-none"
						)}
					>
						{renderItems(items)}
					</div>
				)}
			</div>
		</>
	)
}
