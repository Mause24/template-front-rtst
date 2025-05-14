import { TimelineItemProps } from "./components"
import { TimelineProps } from "./Timeline.types"
import { useTimeline } from "./useTimeline"

export const Timeline = <T extends TimelineItemProps>(
	props: TimelineProps<T>
): JSX.Element => {
	const { renderTimelineItem } = useTimeline(props)

	return renderTimelineItem
}
