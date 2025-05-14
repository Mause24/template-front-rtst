import { Text } from "@/components"
import clsx from "clsx"
import { TimelineItemProps } from "./TimelineItem.types"
import { useTimelineItem } from "./useTimelineItem"

export const TimelineItem = (props: TimelineItemProps): JSX.Element => {
	const { description, title, endDate, startDate, i18next, t } =
		useTimelineItem(props)

	return (
		<div
			className={clsx(
				"w-full",
				"max-w-[600px]",
				"flex",
				"flex-col",
				"gap-y-4",
				"pt-5",
				"pb-9",
				"px-8",
				"relative",
				"justify-start",
				"items-center",
				"bg-gray-light",
				"dark:bg-dark-secondary-alternate",
				"rounded-xl",
				"shadow-lg",
				"max-md:max-h-[90%]"
			)}
		>
			<div
				className={clsx("flex", "flex-col", "items-center", "gap-y-1")}
			>
				<Text
					className={clsx(
						"text-black",
						"dark:text-white",
						"font-bold",
						"max-md:text-lg"
					)}
					type="h3"
					size="xl"
				>
					{title}
				</Text>
				<div className={clsx("flex", "gap-x-2", "max-md:text-sm")}>
					<Text
						className={clsx("text-gray-600", "dark:text-gray-300")}
					>
						{startDate.toLocaleDateString(i18next.language, {
							year: "numeric",
							month: "long",
						})}
					</Text>
					<Text
						className={clsx("text-gray-600", "dark:text-gray-300")}
					>
						-
					</Text>
					<Text
						className={clsx("text-gray-600", "dark:text-gray-300")}
					>
						{endDate
							? endDate.toLocaleDateString(i18next.language, {
									year: "numeric",
									month: "long",
								})
							: t("experience.defaultPresentDate")}
					</Text>
				</div>
			</div>
			{typeof description === "string" ? (
				<Text
					className={clsx(
						"text-black",
						"dark:text-white",
						"max-md:max-h-[90%]",
						"max-md:overflow-y-auto",
						"max-md:text-sm"
					)}
					type="p"
				>
					{description}
				</Text>
			) : (
				<ul
					className={clsx(
						"list-disc",
						"list-inside",
						"flex",
						"flex-col",
						"gap-y-3",
						"max-md:max-h-[90%]",
						"max-md:overflow-y-auto"
					)}
				>
					{description.map(item => (
						<li
							className={clsx(
								"text-black",
								"dark:text-white",
								"max-md:text-sm"
							)}
							key={item}
						>
							{item}
						</li>
					))}
				</ul>
			)}
		</div>
	)
}
