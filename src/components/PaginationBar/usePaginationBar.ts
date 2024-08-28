import clsx from "clsx"
import { times } from "lodash"
import { useEffect, useMemo, useState } from "react"
import {
	PaginationBarsProps,
	PaginationBarVariants,
} from "./PaginationBar.type"

export const usePaginationBar = (props: PaginationBarsProps) => {
	const {
		size = 1,
		onPressNext,
		onPressPage,
		onPressPrevious,
		index = 1,
		variants = "primary",
	} = props
	const [currentSize, setCurrentSize] = useState(size)
	const [currentIndex, setCurrentIndex] = useState(index)

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

	const renderPages = useMemo(() => {
		const parseArrayIndex = (
			array: { key: string; value: number }[]
		): { key: string; value: string | number }[] => {
			switch (true) {
				case array.length < 11:
					return array
				case currentIndex <= 5:
					return [
						...array.filter(item => item.value <= 7),
						{ key: "idk-1", value: "..." },
						...array.slice(array.length - 2),
					]
				case currentIndex > 5 && currentIndex < array.length - 4:
					return [
						...array.slice(0, 2),
						{ key: "idk-1", value: "..." },
						...array.slice(currentIndex - 3, currentIndex + 2),
						{ key: "idk-2", value: "..." },
						...array.slice(array.length - 2),
					]
				case currentIndex > array.length - 5:
					return [
						...array.slice(0, 2),
						{ key: "idk-1", value: "..." },
						...array.slice(array.length - 6),
					]
				default:
					return array
			}
		}

		const indexArr = times(currentSize, n => n + 1)
		const pagesArray = parseArrayIndex(
			indexArr.map(item => ({
				key: item.toString(),
				value: item,
			}))
		)

		return pagesArray
	}, [currentSize, currentIndex])

	const onNext = (index: number) => () => {
		const nextIndex = index + 1
		if (nextIndex <= size) {
			setCurrentIndex(nextIndex)
			onPressNext?.(index)
		}
	}

	const onPrevious = (index: number) => () => {
		const previousIndex = index - 1
		if (previousIndex >= 1) {
			setCurrentIndex(previousIndex)
			onPressPrevious?.(index)
		}
	}

	const onPagination = (index: number) => () => {
		onPressPage?.(index)
		setCurrentIndex(index)
	}

	useEffect(() => {
		setCurrentSize(size)
		setCurrentIndex(index)
	}, [size, index])

	return {
		currentIndex,
		onNext,
		onPagination,
		onPrevious,
		renderPages,
		paginationBarVariantsStyles,
		variants,
	}
}
