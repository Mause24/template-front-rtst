import clsx from "clsx"
import { useMemo } from "react"
import { GoGoal } from "react-icons/go"
import { TimelineProps } from "./Timeline.types"
import styles from "./_styles.module.scss"
import { TimelineItem, TimelineItemProps } from "./components"

export const useTimeline = <T extends TimelineItemProps>(
	props: TimelineProps<T>
	// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
) => {
	const {
		data,
		renderComponent,
		keyExtractor,
		horizontal = false,
		animation = "slideDownFade",
		className,
		iconTimeItem,
	} = props

	const animationArray = useMemo(() => {
		switch (animation) {
			case "fade":
				return styles.fade
			case "slideDownFade":
				return styles.slideDownFade
			case "zoom":
				return styles.zoom
			default:
				return styles.slideDownFade
		}
	}, [animation])

	const renderTimeline = useMemo(
		() => (
			<div
				className={clsx(
					"flex",
					"relative",
					"w-full",
					"h-full",

					horizontal
						? clsx("max-w-screen", "overflow-x-auto")
						: clsx("flex-col", "max-h-screen", "overflow-y-auto"),
					className
				)}
			>
				{data.map((item, index) => {
					const isPair = index % 2 === 0
					return (
						<div
							className={clsx(
								"w-[50%]",
								"h-full",
								"flex",
								"items-center",
								"flex-shrink-0",
								"relative",
								isPair
									? clsx(
											"left-0",
											"pr-9",
											"justify-end",
											//RESPONSIVE
											"max-md:pr-0"
										)
									: clsx("left-2/4", "pl-9", "justify-start"),
								//RESPONSIVE
								clsx(
									"max-md:left-7",
									"max-md:w-[calc(100%-28px)]",
									"max-md:pl-9",
									"max-md:justify-start"
								),
								styles.scrollComponent,
								horizontal ? styles.xAxis : styles.yAxis,
								animationArray,
								styles.lineMove,
								"after:bg-dark-primary-highlight",
								"after:dark:bg-dark-secondary-alternate",
								isPair
									? clsx(
											"after:right-0",
											"after:-mr-[3px]",
											"before:border-l-[15px]",
											"before:border-l-gray-light",
											"before:dark:border-l-dark-secondary-alternate",
											"before:right-[21px]",
											//RESPONSIVE
											"max-md:after:-left-[3px]",
											"max-md:before:left-[21px]",
											"max-md:before:border-l-0",
											"max-md:before:right-full",
											"max-md:before:border-r-[15px]",
											"max-md:before:dark:border-r-dark-secondary-alternate"
										)
									: clsx(
											"after:left-0",
											"after:-ml-[3px]",
											"before:border-r-[15px]",
											"before:border-r-gray-light",
											"before:dark:border-r-dark-secondary-alternate",
											"before:left-[21px]",
											//RESPONSIVE
											"max-md:after:left-0",
											"max-md:before:left-[21px]",
											"max-md:before:border-r-[15px]"
										),
								"before:content-['']",
								"before:absolute",
								"before:border-t-[15px]",
								"before:border-t-transparent",
								"before:border-b-[15px]",
								"before:border-b-transparent",
								"before:top-[calc(50%+6px)]"
							)}
							key={keyExtractor(item, index) ?? item.id}
						>
							<div
								className={clsx(
									"absolute",
									"w-10",
									"h-10",
									"rounded-full",
									"p-1",
									isPair
										? clsx("-right-[20px]")
										: clsx("-left-[20px]"),
									"top-[50%]",
									"bg-dark-primary-highlight",
									"dark:bg-dark-secondary-alternate",
									"z-[1]",
									"flex",
									"justify-center",
									"items-center",
									//RESPONSIVE
									"max-md:-left-5"
								)}
							>
								{item.icon ?? (
									<GoGoal
										className={clsx(
											"w-full",
											"h-full",
											"text-white",
											"dark:text-white"
										)}
									/>
								)}
							</div>
							{renderComponent?.(item, index) ?? (
								<TimelineItem {...item} />
							)}
						</div>
					)
				})}
			</div>
		),
		[
			data,
			renderComponent,
			keyExtractor,
			styles,
			animationArray,
			className,
			iconTimeItem,
		]
	)

	return {
		renderTimelineItem: renderTimeline,
	}
}
