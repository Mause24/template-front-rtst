import clsx from "clsx"
import { times } from "lodash"
import { useMemo } from "react"
import { PaginationBarVariants } from "../PaginationBar/PaginationBar.types"
import { PaginationBarItemsProps } from "./PaginationBarItems.types"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const usePaginationBarItems = (props: PaginationBarItemsProps) => {
	const {
		index = 0,
		onChangeIndex,
		size,
		variants = "primary",
		className,
	} = props
	const currentSize = useMemo(() => size ?? 10, [size])

	const paginationBarItemsVariantsStyles: {
		[key in PaginationBarVariants]: {
			itemButtonsContainer: string
			itemButtons: string
			itemButtonSelected: {
				button: string
				label: string
			}
		}
	} = {
		primary: {
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
			array: { key: string; value: number; label: string }[]
		): { key: string; value: string | number; label: string }[] => {
			switch (true) {
				case array.length < 11:
					return array
				case index <= 5:
					return [
						...array.filter(item => item.value <= 7),
						{ key: "idk-1", value: "...", label: "..." },
						...array.slice(array.length - 2),
					]
				case index > 5 && index < array.length - 4:
					console.log("Hi i'm in")

					return [
						...array.slice(0, 2),
						{ key: "idk-1", value: "...", label: "..." },
						...array.slice(index - 3, index + 2),
						{ key: "idk-2", value: "...", label: "..." },
						...array.slice(array.length - 2),
					]
				case index > array.length - 5:
					return [
						...array.slice(0, 2),
						{ key: "idk-1", value: "...", label: "..." },
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
				value: item - 1,
				label: String(item),
			}))
		)

		return pagesArray
	}, [currentSize, index])

	return {
		renderPages,
		onChangeIndex,
		index,
		currentSize,
		paginationBarItemsVariantsStyles,
		variants,
		className,
	}
}
