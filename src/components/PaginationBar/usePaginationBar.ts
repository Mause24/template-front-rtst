import clsx from "clsx"
import { useEffect, useState } from "react"
import {
	PaginationBarsProps,
	PaginationBarVariants,
} from "./PaginationBar.types"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const usePaginationBar = (props: PaginationBarsProps) => {
	const {
		size = 1,
		onPressNext,
		onPressPage,
		onPressPrevious,
		index = 0,
		variants = "primary",
	} = props
	const [currentSize, setCurrentSize] = useState(size)

	const paginationBarVariantsStyles: {
		[key in PaginationBarVariants]: {
			container: string
			prevButton: string
			nextButton: string
			itemButtonsContainer: string
			itemButtons: string
			itemButtonSelected: {
				button: string
				label: string
			}
		}
	} = {
		primary: {
			container: clsx("justify-center", "items-center", "h-10"),
			prevButton: clsx(
				"border-primary-normal",
				"border",
				"rounded-none",
				"rounded-l-md",
				"h-full",
				"px-2"
			),
			nextButton: clsx(
				"border-primary-normal",
				"border",
				"rounded-none",
				"rounded-r-md",
				"h-full",
				"px-2"
			),
			itemButtonsContainer: clsx("h-full"),
			itemButtons: clsx(
				"w-10",
				"h-full",
				"border-primary-normal",
				"border",
				"transition-all"
			),
			itemButtonSelected: {
				button: clsx("bg-primary-normal"),
				label: clsx("transition-all", "text-white", "font-bold"),
			},
		},
		secondary: {
			container: clsx("justify-between", "items-center", "px-4"),
			prevButton: "",
			nextButton: "",
			itemButtonsContainer: clsx("gap-7"),
			itemButtons: clsx("w-10", "h-10", "relative"),
			itemButtonSelected: {
				button: clsx(
					"after:content-['']",
					"after:w-full",
					"after:h-[2px]",
					"after:bg-primary-normal",
					"after:absolute",
					"after:top-0",
					"after:left-0"
				),
				label: "",
			},
		},
	}

	const onNext = (index: number) => (): void => {
		const nextIndex = index + 1
		if (nextIndex <= size) {
			onPressNext?.(index)
		}
	}

	const onPrevious = (index: number) => (): void => {
		const previousIndex = index - 1
		if (previousIndex >= 1) {
			onPressPrevious?.(index)
		}
	}

	const onPagination = (index: number) => (): void => {
		onPressPage?.(index)
	}

	useEffect(() => {
		setCurrentSize(size)
	}, [size, index])

	return {
		index,
		currentSize,
		onNext,
		onPagination,
		onPrevious,
		paginationBarVariantsStyles,
		variants,
	}
}
