import clsx from "clsx"
import { FaChevronDown } from "react-icons/fa"
import { Text } from "../Text"
import { AccordionProps } from "./Accordion.types"

export const Accordion = ({
	children,
	title,
	className,
	header,
	isOpen,
	handleOpen,
	bodyClassName,
	heightContent,
}: AccordionProps): JSX.Element => {
	return (
		<div
			className={clsx(
				"bg-inherit",
				"flex",
				"flex-col",
				"h-auto",
				className
			)}
		>
			<button
				className={clsx("flex", "justify-between", "items-center")}
				type="button"
				onClick={handleOpen}
			>
				{header?.({ isOpen: Boolean(isOpen), title }) ?? (
					<>
						<Text
							size="lg"
							className={clsx(
								"text-black",
								"dark:text-white",
								"line-clamp-1"
							)}
						>
							{title}
						</Text>
						<FaChevronDown
							className={clsx(
								"w-4",
								"h-4",
								"transition-all",
								"text-light-secondary-alternate",
								"dark:text-dark-secondary-alternate",
								"ease-linear",
								"duration-200",
								isOpen ? "rotate-180" : "rotate-0"
							)}
						/>
					</>
				)}
			</button>
			<div
				style={{
					maxHeight: isOpen ? `${heightContent ?? 192}px` : "0px",
				}}
				className={clsx(
					"transition-all",
					"ease-in-out",
					"duration-200",
					"h-full",
					isOpen
						? clsx(
								"pointer-events-auto",
								"select-auto",
								"overflow-auto"
							)
						: clsx(
								"pointer-events-none",
								"select-none",
								"overflow-hidden"
							),
					bodyClassName
				)}
			>
				{children}
			</div>
		</div>
	)
}
