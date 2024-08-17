import clsx from "clsx"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { Button } from "../Button"
import { PaginationBarsProps } from "./PaginationBar.type"
import { usePaginationBar } from "./usePaginationBar"

export const PaginationBar = (props: PaginationBarsProps) => {
	const {
		onNext,
		onPrevious,
		renderPages,
		currentIndex,
		onPagination,
		paginationBarVariantsStyles,
		variants,
	} = usePaginationBar(props)

	return (
		<div
			className={clsx(
				"flex",
				"w-full",
				paginationBarVariantsStyles[variants].container
			)}
		>
			<Button
				className={paginationBarVariantsStyles[variants].prevButton}
				onClick={onPrevious(currentIndex)}
				variant="transparent"
				leftIcon={
					<FaChevronLeft
						className={clsx("text-primary-normal", "w-6", "h-6")}
					/>
				}
			>
				Previous
			</Button>
			<ul
				className={clsx(
					"flex",
					"overflow-hidden",
					paginationBarVariantsStyles[variants].itemButtonsContainer
				)}
			>
				{renderPages.map(item => (
					<li
						className={clsx(
							"flex",
							"items-center",
							"justify-center",
							paginationBarVariantsStyles[variants].itemButtons,
							currentIndex === item.value &&
								paginationBarVariantsStyles[variants]
									.itemButtonSelected.button
						)}
						key={item.key}
					>
						{item.value === "..." || typeof item === "string" ? (
							<span
								className={clsx(
									"w-full",
									"h-full",
									"flex",
									"items-center",
									"justify-center"
								)}
							>
								{item.value}
							</span>
						) : (
							<Button
								className={clsx(
									"w-full",
									"h-full",
									currentIndex === item.value &&
										paginationBarVariantsStyles[variants]
											.itemButtonSelected.label
								)}
								onClick={onPagination(Number(item.value))}
								variant="transparent"
							>
								{item.value}
							</Button>
						)}
					</li>
				))}
			</ul>
			<Button
				className={paginationBarVariantsStyles[variants].nextButton}
				onClick={onNext(currentIndex)}
				variant="transparent"
				rightIcon={
					<FaChevronRight
						className={clsx("text-primary-normal", "w-6", "h-6")}
					/>
				}
			>
				Next
			</Button>
		</div>
	)
}
