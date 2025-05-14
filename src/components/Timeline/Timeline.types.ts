import { TimelineItemProps } from "./components/TimelineItem"

export type Animations = "slideDownFade" | "fade" | "zoom"

export interface TimelineProps<T extends TimelineItemProps> {
	data: T[]
	renderComponent?: (item: T, index: number) => JSX.Element
	keyExtractor: (item: T, index: number) => string
	horizontal?: boolean
	animation?: Animations
	iconTimeItem?: JSX.Element
	className?: string
}
