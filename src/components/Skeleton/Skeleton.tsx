import clsx from "clsx"
import { SkeletonProps } from "./Skeleton.type"

export const Skeleton: React.FC<SkeletonProps> = ({
	width = "5rem",
	height = "5rem",
	color = "#DDDBDD",
	borderRadius = "0",
	className,
}) => {
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
