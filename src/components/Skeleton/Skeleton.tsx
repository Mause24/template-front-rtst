import clsx from "clsx"
import { SkeletonProps } from "./Skeleton.types"

export const Skeleton = ({
	width = "5rem",
	height = "5rem",
	color = "#DDDBDD",
	borderRadius = "0",
	className,
}: SkeletonProps): JSX.Element => {
	return (
		<span
			className={clsx(
				"skeleton-box",
				"block",
				"relative",
				"overflow-hidden",
				className
			)}
			style={{
				width,
				height,
				backgroundColor: color,
				borderRadius,
			}}
		/>
	)
}
