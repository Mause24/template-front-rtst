export interface SliderItemProps {
	id: number
	image: string
}

export interface SliderProps<T extends SliderItemProps> {
	items: T[]
	index?: number
	onChangeIndex?: (value: number) => void
	onPressNext?: (value?: number) => void
	onPressPrevious?: (value?: number) => void
	classname?: string
}
