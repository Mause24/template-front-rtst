import clsx from "clsx"
import { useEffect, useMemo, useRef, useState } from "react"
import { Skeleton } from "../Skeleton"
import { PaginationViewProps } from "./PaginationView.type"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const usePaginationView = <T,>(props: PaginationViewProps<T>) => {
	const {
		onPressNext,
		onPressPage,
		onPressPrevious,
		size,
		cols = 3,
		rows = 3,
		minWidthItems = 250,
		renderComponent,
		data = [],
		index,
		emptyState,
		className,
		classNameContainer,
		loadingState,
		onChangePage,
		isLoading,
	} = props

	const refContainerItems = useRef<HTMLDivElement>(null)
	// const refSlider = useRef<HTMLDivElement>(null)
	/* const [prevIndex, setPrevIndex] = useState<number | undefined>() */
	const [currentSizeItemsContainer, setCurrentSizeItemsContainer] = useState({
		width: refContainerItems.current?.clientWidth,
		height: refContainerItems.current?.clientHeight,
	})

	const renderData = useMemo(
		() =>
			data
				.slice(0, cols * rows)
				.map((item, index) => renderComponent(item, index)),
		[data, renderComponent]
	)

	/* 	
	SLIDE COMPONENT
	useEffect(() => {
		setPrevIndex(index)
		let timer = -1

		if (prevIndex && index && refSlider.current) {
			if (index - prevIndex < 0) {
				refSlider.current.classList.add(styles.animation_slide_left)
				timer = setTimeout(() => {
					refSlider.current?.classList.remove(
						styles.animation_slide_left
					)
				}, 700)
			} else if (index - prevIndex > 0) {
				refSlider.current.classList.add(styles.animation_slide_right)
				timer = setTimeout(() => {
					refSlider.current?.classList.remove(
						styles.animation_slide_right
					)
				}, 700)
			}
		}
		return () => {
			clearTimeout(timer)
		}
	}, [index, refSlider.current]) */

	useEffect(() => {
		setCurrentSizeItemsContainer({
			width: refContainerItems.current?.clientWidth,
			height: refContainerItems.current?.clientHeight,
		})

		const handleResize = (): void => {
			setCurrentSizeItemsContainer({
				width: refContainerItems.current?.clientWidth,
				height: refContainerItems.current?.clientHeight,
			})
		}

		window.addEventListener("resize", handleResize)

		return (): void => {
			window.removeEventListener("resize", handleResize)
		}
	}, [])

	const renderPagination = useMemo(() => {
		switch (true) {
			case isLoading:
				return (
					<div
						className={clsx(
							"flex",
							"h-full",
							"w-full",
							"justify-center",
							"items-center"
						)}
					>
						{loadingState ?? (
							<Skeleton
								width="90%"
								height="90%"
								borderRadius="20px"
							/>
						)}
					</div>
				)
			case data.length <= 0:
				return (
					<div className={clsx("flex", "h-full", "w-full")}>
						{emptyState ?? (
							<Skeleton
								width="90%"
								height="90%"
								borderRadius="20px"
							/>
						)}
					</div>
				)

			default:
				return (
					<div
						style={{
							gridTemplateColumns: `repeat(${(currentSizeItemsContainer.width ?? 0) >= (minWidthItems + 1) * cols ? cols : "auto-fit"}, minmax(${minWidthItems}px,1fr))`,
							gridTemplateRows:
								(currentSizeItemsContainer.width ?? 0) >=
									(minWidthItems + 1) * cols ||
								data.length < rows
									? `repeat(${rows}, 1fr)`
									: "",
						}}
						ref={refContainerItems}
						className={clsx(
							"min-w-full",
							"flex-1",
							"flex-shrink-0",
							"grid",
							classNameContainer
						)}
					>
						{renderData}
					</div>
					/* SLIDE COMPONENT 
					<div
						ref={refSlider}
						className={clsx(
							"flex",
							"w-full",
							"overflow-visible",
							"-translate-x-full"
						)}
					>
						<div
							className={clsx(
								"flex",
								"h-full",
								"w-full",
								"justify-center",
								"items-center",
								"flex-shrink-0"
							)}
						>
							<Skeleton
								width="90%"
								height="90%"
								borderRadius="20px"
							/>
						</div>
						<div
							style={{
								gridTemplateColumns: `repeat(${(currentSizeItemsContainer.width ?? 0) >= (minWidthItems + 1) * cols ? cols : "auto-fit"}, minmax(${minWidthItems}px,1fr))`,
								gridTemplateRows:
									(currentSizeItemsContainer.width ?? 0) >=
										(minWidthItems + 1) * cols ||
									data.length < rows
										? `repeat(${rows}, 1fr)`
										: "",
							}}
							ref={refContainerItems}
							className={clsx(
								"min-w-full",
								"flex-1",
								"flex-shrink-0",
								"grid",
								classNameContainer
							)}
						>
							{renderData}
						</div>
						<div
							className={clsx(
								"flex",
								"h-full",
								"w-full",
								"justify-center",
								"items-center",
								"flex-shrink-0"
							)}
						>
							<Skeleton
								width="90%"
								height="90%"
								borderRadius="20px"
							/>
						</div>
					</div> */
				)
		}
	}, [
		isLoading,
		loadingState,
		emptyState,
		renderData,
		data,
		classNameContainer,
		currentSizeItemsContainer,
		cols,
	])

	return {
		onPressNext,
		onPressPage,
		renderPagination,
		onPressPrevious,
		index,
		size,
		onChangePage,
		className,
	}
}
