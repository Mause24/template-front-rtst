import clsx from "clsx"
import styles from "./_styles.module.scss"
import { Container3DProps } from "./Container3D.types"

export const Container3D = ({
	children,
	distance = 20,
	className,
}: Container3DProps): JSX.Element => {
	return (
		<div
			className={clsx(
				"w-full",
				"h-full",
				"relative",
				styles.frame,
				className
			)}
		>
			{/* BACK SIDE */}
			<div
				className={clsx(
					"w-full",
					"h-full",
					"left-0",
					"top-0",
					"absolute",
					"bg-inherit"
				)}
				style={{
					transform: `translateZ(-${distance}px)`,
				}}
			/>
			{/* TOP SIDE */}
			<div
				className={clsx(
					"w-full",
					"left-0",
					"top-0",
					"absolute",
					"bg-inherit",
					"origin-top"
				)}
				style={{
					height: `${distance}px`,
					transform: `translateZ(-${distance}px) rotateX(90deg)`,
				}}
			/>
			{/* BOTTOM SIDE */}
			<div
				className={clsx(
					"w-full",
					"left-0",
					"bottom-0",
					"absolute",
					"bg-inherit",
					"origin-bottom"
				)}
				style={{
					height: `${distance}px`,
					transform: `translateZ(-${distance}px) rotateX(-90deg)`,
				}}
			/>
			{/* LEFT SIDE */}
			<div
				className={clsx(
					"h-full",
					"left-0",
					"top-0",
					"absolute",
					"bg-inherit",
					"origin-center"
				)}
				style={{
					width: `${distance}px`,
					transform: `translateZ(-${distance / 2}px) translateX(-${distance / 2}px) rotateY(90deg)`,
				}}
			/>
			{/* RIGHT SIDE */}
			<div
				className={clsx(
					"h-full",
					"right-0",
					"top-0",
					"absolute",
					"bg-inherit",
					"origin-center"
				)}
				style={{
					width: `${distance}px`,
					transform: `translateZ(-${distance / 2}px) translateX(${distance / 2}px) rotateY(90deg)`,
				}}
			/>
			<div
				className={clsx(
					"w-full",
					"h-full",
					"left-0",
					"top-0",
					"absolute",
					"bg-inherit",
					"z-[1]"
				)}
			>
				{children}
			</div>
		</div>
	)
}
