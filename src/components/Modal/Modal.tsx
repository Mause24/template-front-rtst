"use client"

import { ICONS } from "@/Constants/Icons"
import clsx from "clsx"
import { useMemo } from "react"
import { createPortal } from "react-dom"
import { Icon } from "../Icon"
import { CustomModalProps } from "./Modal.types"

export const CustomModal = ({
	onClose,
	visible,
	children,
	className = "",
	transparent = false,
	closeButton = true,
	closeBackdrop = true,
	onlyChild = true,
	animationType,
	animationTypeIn = "fade",
	animationTypeOut = "fade",
	backDropClassName,
	containerClassName,
}: CustomModalProps): JSX.Element => {
	const animationModal = useMemo(() => {
		switch (animationType) {
			case "slide-up":
				return clsx(visible ? "translate-y-0" : "translate-y-[100dvh]")
			case "slide-down":
				return clsx(visible ? "translate-y-0" : "-translate-y-[100dvh]")
			case "slide-right":
				return clsx(visible ? "translate-x-0" : "-translate-x-[100dvw]")
			case "slide-left":
				return clsx(visible ? "translate-x-0" : "translate-x-[100dvw]")
			case "scale":
				return clsx("origin-center", visible ? "scale-100" : "scale-0")
			case "tv":
				return clsx(
					visible
						? "opacity-100 animate-tv-on"
						: "opacity-0 animate-tv-off"
				)

			default:
				return clsx(visible ? "opacity-100" : "opacity-0")
		}
	}, [animationType, visible])

	const animationModalIn = useMemo(() => {
		switch (animationTypeIn) {
			case "slide-up":
				return clsx("translate-y-0")
			case "slide-down":
				return clsx("translate-y-0")
			case "slide-right":
				return clsx("translate-x-0")
			case "slide-left":
				return clsx("translate-x-0")
			case "scale":
				return clsx("origin-center", "scale-100")
			case "tv":
				return clsx("animate-tv-on")

			default:
				return clsx("opacity-100")
		}
	}, [animationTypeIn])

	const animationModalOut = useMemo(() => {
		switch (animationTypeOut) {
			case "slide-up":
				return clsx("translate-y-[100dvh]")
			case "slide-down":
				return clsx("-translate-y-[100dvh]")
			case "slide-right":
				return clsx("-translate-x-[100dvw]")
			case "slide-left":
				return clsx("translate-x-[100dvw]")
			case "scale":
				return clsx("scale-0")
			case "tv":
				return clsx("animate-tv-off")

			default:
				return clsx("opacity-0")
		}
	}, [animationTypeOut])

	return createPortal(
		<div
			className={clsx(
				"w-full",
				"left-0",
				"top-0",
				"h-full",
				"fixed",
				"flex",
				"z-40",
				"justify-center",
				"items-center",
				"overflow-hidden",
				visible ? "pointer-events-auto" : "pointer-events-none",
				containerClassName
			)}
		>
			<button
				aria-label="backDrop"
				type="button"
				className={clsx(
					"absolute",
					"h-full",
					"top-0",
					"w-full",
					"left-0",
					"transition-all",
					"ease-linear",
					"duration-75",
					"cursor-default",
					transparent ? "bg-transparent" : "bg-black bg-opacity-60",
					visible
						? "opacity-100 pointer-events-auto"
						: "opacity-0 pointer-events-none",
					backDropClassName
				)}
				onClick={closeBackdrop || !closeButton ? onClose : undefined}
			/>
			{onlyChild ? (
				<div
					className={clsx(
						"w-full",
						"h-full",
						"absolute",
						"pointer-events-none",
						"transition-all",
						"ease-linear",
						"duration-300",
						animationType
							? animationModal
							: visible
								? animationModalIn
								: animationModalOut,
						className,
						visible
							? "[&>*:nth-child(n)]:pointer-events-auto"
							: "[&>*:nth-child(n)]:pointer-events-none"
					)}
				>
					{children}
				</div>
			) : (
				<div
					className={clsx(
						"sm:min-w-[80%]",
						"lg:min-w-[50%]",
						"transition-all",
						"ease-linear",
						"delay-100",
						"duration-300",
						"bg-white",
						"rounded-lg",
						"relative",
						"p-4",
						animationType
							? animationModal
							: visible
								? animationModalIn
								: animationModalOut,
						className
					)}
				>
					{closeButton && (
						<button
							type="button"
							className={clsx(
								"p-1",
								"border-none",
								"bg-transparent",
								"rounded-full",
								"transition-all",
								"ease-linear",
								"duration-[150]",
								"absolute",
								"right-3",
								"top-3",
								"[&:hover>*]:text-red-600"
							)}
							onClick={onClose}
						>
							<Icon
								src={ICONS.closeIcon}
								fillPath
								className={clsx(
									"!w-5",
									"!h-5",
									"transition-all",
									"duration-75",
									"text-gray-600"
								)}
							/>
						</button>
					)}
					{children}
				</div>
			)}
		</div>,
		document.getElementById("root") ?? document.createDocumentFragment()
	)
}
