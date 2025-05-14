import clsx from "clsx"
import styles from "./_styles.module.scss"
import { ItemSlider3D, ItemSlider3DProps } from "./components"
import { Slider3DProps } from "./Slider3D.types"
import { useSlider3D } from "./useSlider3D"

export const Slider3D = <T extends ItemSlider3DProps>(
	props: Slider3DProps<T>
): JSX.Element => {
	const { keyExtractor, renderItem, translateZHeight, items, sideLarge } =
		useSlider3D(props)

	return (
		<div
			className={clsx(
				"w-full",
				"flex",
				"justify-center",
				"my-32",
				"max-md:my-14"
			)}
		>
			<div
				className={clsx(
					"relative",
					"flex",
					"h-[300px]",
					"max-md:h-[400px]",
					styles.rotation
				)}
				style={{
					width: `${sideLarge}px`,
				}}
			>
				{items.map((item, index) => (
					<div
						className={clsx(
							"w-full",
							"h-full",
							"absolute",
							"left-0",
							"top-0",
							"origin-center",
							styles.itemSlider
						)}
						style={{
							transform: `rotateY(${index * (360 / items.length)}deg) translateZ(${translateZHeight}px)`,
						}}
						key={keyExtractor?.(item, index) ?? item.id}
					>
						{renderItem?.(item, index) ?? (
							<ItemSlider3D {...item} />
						)}
					</div>
				))}
			</div>
		</div>
	)
}
