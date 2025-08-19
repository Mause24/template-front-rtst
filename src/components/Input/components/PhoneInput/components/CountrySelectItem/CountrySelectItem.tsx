import { Text } from "@/components"
import clsx from "clsx"
import { CountrySelectItemProps } from "./CountrySelectItem.types"
import { useCountrySelectItemProps } from "./useCountrySelectItem"

export const CountrySelectItem = (
	props: CountrySelectItemProps
): JSX.Element => {
	const { item } = useCountrySelectItemProps(props)

	return (
		<div
			className={clsx(
				"flex",
				"w-full",
				"h-full",
				"px-2",
				"justify-between",
				"items-center"
			)}
		>
			<div className={clsx("flex", "gap-x-2")}>
				<img
					className={clsx("w-10", "h-6", "object-cover")}
					src={item.flagUrl}
					alt={item.localName}
				/>
				<Text
					className={clsx(
						"text-black",
						"dark:text-white",
						"line-clamp-1",
						"text-ellipsis"
					)}
				>
					{`${item.localName} (${item.name})`}
				</Text>
			</div>
			<Text
				className={clsx(
					"flex-shrink-0",
					"text-black",
					"dark:text-white"
				)}
			>
				{item.phoneExtension}
			</Text>
		</div>
	)
}
