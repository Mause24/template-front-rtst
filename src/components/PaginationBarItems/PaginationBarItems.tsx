import clsx from "clsx"
import { Button } from "../Button"
import { Text } from "../Text"
import { PaginationBarItemsProps } from "./PaginationBarItems.types"
import { usePaginationBarItems } from "./usePaginationBarItems"

export const PaginationBarItems = (
	props: PaginationBarItemsProps
): JSX.Element => {
	const {
		index,
		onChangeIndex,
		renderPages,
		paginationBarItemsVariantsStyles,
		variants,
		className,
	} = usePaginationBarItems(props)

	return (
		<ul
			className={clsx(
				"flex",
				"list-none",
				"overflow-hidden",
				paginationBarItemsVariantsStyles[variants].itemButtonsContainer,
				className?.container
			)}
		>
			{renderPages.map(item => (
				<li
					className={clsx(
						"flex",
						"items-center",
						"justify-center",
						paginationBarItemsVariantsStyles[variants].itemButtons,
						index === item.value &&
							paginationBarItemsVariantsStyles[variants]
								.itemButtonSelected.button
					)}
					key={item.key}
				>
					{item.value === "..." || typeof item === "string" ? (
						<Text
							type="span"
							className={clsx(
								"w-full",
								"h-full",
								"flex",
								"items-center",
								"justify-center"
							)}
						>
							{item.label}
						</Text>
					) : (
						<Button
							className={clsx(
								"w-full",
								"h-full",
								index === item.value &&
									paginationBarItemsVariantsStyles[variants]
										.itemButtonSelected.label
							)}
							onClick={() => onChangeIndex?.(Number(item.value))}
							variant="transparent"
						>
							{item.label}
						</Button>
					)}
				</li>
			))}
		</ul>
	)
}
