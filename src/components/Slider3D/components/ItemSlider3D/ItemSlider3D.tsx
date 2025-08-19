import { Button, Container3D, Text } from "@/components"
import { IMAGES } from "@/constants"
import clsx from "clsx"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import { ItemSlider3DProps } from "./ItemSlider3D.types"

export const ItemSlider3D = ({
	description,
	id,
	image,
	mobileImage,
	title,
}: ItemSlider3DProps): JSX.Element => {
	const [t] = useTranslation("projects")
	const navigate = useNavigate()
	return (
		<Container3D
			distance={20}
			className={clsx(
				"hover:-translate-y-8",
				"transition-all",
				"duration-500",
				"cursor-pointer",
				"bg-gray-heavy",
				"hover:bg-primary-normal",
				"dark:bg-secondary-normal",
				"group"
			)}
		>
			<div
				className={clsx(
					"w-full",
					"h-full",
					"relative",
					"overflow-hidden"
				)}
			>
				<picture>
					<source
						srcSet={mobileImage ?? IMAGES.emptyMobileImage}
						media="(max-width: 768px)"
					/>
					<img
						src={image}
						alt={`item-${id}`}
						className={clsx(
							"w-full",
							"h-full",
							"z-[0]",
							"object-fill"
						)}
					/>
				</picture>
				<div
					className={clsx(
						"w-full",
						"h-auto",
						"absolute",
						"flex",
						"flex-col",
						"left-0",
						"bottom-0",
						"transition-all",
						"duration-500",
						"bg-gradient-to-b",
						"via-secondary-normal",
						"from-transparent",
						"to-black",
						"opacity-0",
						"pointer-events-none",
						"origin-bottom",
						"group-hover:opacity-100",
						"group-hover:pointer-events-auto",
						"gap-y-3",
						"px-4",
						"pb-2",
						"max-md:px-3"
					)}
				>
					<Text
						className={clsx(
							"text-primary-normal",
							"text-base",
							"text-center",
							"max-md:select-none"
						)}
						type="h3"
					>
						{title}
					</Text>
					<Text
						className={clsx(
							"text-white",
							"text-xs",
							"max-h-[150px]",
							"overflow-y-auto",
							"no-scrollbar",
							"max-md:select-none"
						)}
						type="p"
					>
						{description}
					</Text>
					<Button
						className={clsx(
							"w-36",
							"self-center",
							"p-0",
							"max-md:w-full",
							"max-md:rounded-full",
							"max-md:select-none"
						)}
						onClick={() => navigate(`/projects/${id}`)}
						variant="primary"
						label={t("linkButton")}
						type="button"
					/>
				</div>
			</div>
		</Container3D>
	)
}
