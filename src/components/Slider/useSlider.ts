import { useMobileScreen } from "@/hooks"
import { useCallback, useEffect, useRef, useState } from "react"
import { SliderItemProps, SliderProps } from "./Slider.types"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useSlider = <T extends SliderItemProps>(props: SliderProps<T>) => {
	const {
		items,
		index = 0,
		onChangeIndex,
		onPressNext,
		onPressPrevious,
		classname,
	} = props
	const { isMobileScreen } = useMobileScreen({})
	const sliderRef = useRef<HTMLDivElement>(null)
	const [currentIndex, setCurrentIndex] = useState(index)

	const handleChangeIndex = useCallback(
		(value: number) => {
			setCurrentIndex(value)
			onChangeIndex?.(value)
			if (sliderRef.current) {
				const sliderWidth = sliderRef.current.clientWidth
				sliderRef.current.scrollTo({
					left: sliderWidth * value,
					behavior: "smooth",
				})
			}
		},
		[onChangeIndex, sliderRef]
	)

	const handleMoveNext = useCallback(() => {
		if (currentIndex + 1 < items.length) {
			handleChangeIndex(currentIndex + 1)
			onPressNext?.(currentIndex + 1)
		}
	}, [currentIndex, handleChangeIndex, onPressNext])

	const handleMovePrevious = useCallback(() => {
		if (currentIndex > 0) {
			handleChangeIndex(currentIndex - 1)
			onPressPrevious?.(currentIndex - 1)
		}
	}, [currentIndex, handleChangeIndex, onPressPrevious])

	useEffect(() => {
		const handleSwipe = (ev: Event): void => {
			const currentSlider = ev.currentTarget as HTMLDivElement
			const currentSliderWidth = currentSlider.clientWidth

			setCurrentIndex(
				Math.floor(currentSlider.scrollLeft / currentSliderWidth)
			)
		}

		if (sliderRef?.current) {
			sliderRef.current.addEventListener("scrollend", handleSwipe)
		}

		return (): void => {
			sliderRef.current?.removeEventListener("scrollend", handleSwipe)
		}
	}, [sliderRef, isMobileScreen])

	return {
		items,
		handleChangeIndex,
		handleMoveNext,
		handleMovePrevious,
		classname,
		currentIndex,
		sliderRef,
		isMobileScreen,
	}
}
