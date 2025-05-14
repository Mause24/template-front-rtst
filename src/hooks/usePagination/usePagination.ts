import { useCallback, useEffect, useState } from "react"
import { UsePaginationProps } from "./usePagination.types"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const usePagination = <E = []>(props: UsePaginationProps<E>) => {
	const { data, pageSize } = props
	const [paginatedData, setPaginatedData] = useState<E[]>(data)
	const [currentIndex, setCurrentIndex] = useState(1)
	const [pagesNumber, setPagesNumber] = useState(1)

	const onChangePage = useCallback(
		(index: number, callback?: (data: E[], index?: number) => void) => {
			setCurrentIndex(index)
			callback?.(paginatedData, index)
		},
		[paginatedData]
	)

	const onMoveNext = useCallback(
		(callback?: (data: E[], index?: number) => void) => {
			const newIndex =
				currentIndex + 1 > pagesNumber ? pagesNumber : currentIndex + 1
			setCurrentIndex(newIndex)
			callback?.(paginatedData, newIndex)
		},
		[paginatedData, currentIndex, pagesNumber]
	)

	const onMovePrevious = useCallback(
		(callback?: (data: E[], index?: number) => void) => {
			const newIndex = currentIndex - 1 < 0 ? 0 : currentIndex - 1
			setCurrentIndex(newIndex)
			callback?.(paginatedData, newIndex)
		},
		[paginatedData, currentIndex]
	)

	useEffect(() => {
		setPagesNumber(Math.ceil(data.length / pageSize))
		const currentData = data.map(item => item)

		setPaginatedData(
			currentData.slice(
				(currentIndex - 1) * pageSize,
				currentIndex * pageSize
			)
		)
	}, [currentIndex, data, pageSize])

	return {
		paginatedData,
		currentIndex,
		onChangePage,
		onMoveNext,
		pagesNumber,
		onMovePrevious,
	}
}
