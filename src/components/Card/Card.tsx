import clsx from "clsx"
import { Link } from "react-router-dom"
import { Text } from "../Text"
import { CardProps } from "./Card.types"

export const Card = ({ title, src, path }: CardProps): JSX.Element => {
	return (
		<Link to={path}>
			<div
				className={clsx(
					"bg-neutral-200",
					"dark:bg-dark-backgroundHeader-normal",
					"border-b-4",
					"border-blue-500"
				)}
			>
				<div
					className={clsx(
						"flex",
						"items-center",
						"px-2",
						"py-1",
						"lg:w-[470px]",
						"w-full",
						"gap-x-2"
					)}
				>
					<img alt="cardImage" src={src} />
					<Text
						type="p"
						className={clsx(
							"text-light-secondary-alternate",
							"dark:text-gray-light",
							"font-sans"
						)}
					>
						{title}
					</Text>
				</div>
			</div>
		</Link>
	)
}
