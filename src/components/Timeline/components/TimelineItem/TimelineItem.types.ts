export interface TimelineItemProps {
	id: number
	title: string
	description: string | string[]
	startDate: Date
	endDate?: Date
	icon?: JSX.Element
}
