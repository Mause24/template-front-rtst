import clsx from "clsx"
import { Button } from "../Button"
import { HamburgerMenuProps } from "./HamburgerMenu.types"
import { useHamburgerMenu } from "./useHamburgerMenu"

export const HamburgerMenu = (props: HamburgerMenuProps) => {
	const { isCurrentOpen, setIsOpen, className } = useHamburgerMenu(props)

	return (
		<Button
			type="button"
			className={clsx(
				"relative",
				"w-5",
				"h-5",
				"cursor-pointer",
				className
			)}
			variant="transparent"
			onClick={() => setIsOpen(!isCurrentOpen)}
		>
			<div
				className={clsx(
					"flex",
					"flex-col",
					"justify-between",
					"items-center",
					"h-full",
					"w-full"
				)}
			>
				<span
					className={clsx(
						"block",
						"w-full",
						"h-1",
						"bg-white",
						"transition-transform",
						"duration-500",
						"rounded",
						"origin-bottom-left",
						isCurrentOpen && "rotate-45 "
					)}
				/>
				<span
					className={clsx(
						"block",
						"w-full",
						"h-1",
						"bg-white",
						"transition-opacity",
						"duration-500",
						"rounded",
						isCurrentOpen && "opacity-0"
					)}
				/>
				<span
					className={clsx(
						"block",
						"w-full",
						"h-1",
						"bg-white",
						"transition-transform",
						"duration-500",
						"rounded",
						"origin-top-left",
						isCurrentOpen && "-rotate-45"
					)}
				/>
			</div>
		</Button>
	)
}
