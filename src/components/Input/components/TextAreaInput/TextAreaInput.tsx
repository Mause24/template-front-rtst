import { Text } from "@/components"
import clsx from "clsx"
import { TextAreaInputProps } from "./TextAreaInput.types"
import { useTextAreaInput } from "./useTextAreaInput"

export const TextAreaInput = (props: TextAreaInputProps): JSX.Element => {
	const {
		className,
		containerClassname,
		currentPlaceholder,
		error,
		id,
		label,
		labelClassname,
		refInput,
		rest,
		styleType,
		styleVariant,
		value,
		leftIcon,
		rightIcon,
		inputClassname,
	} = useTextAreaInput(props)
	return (
		<div
			className={clsx(
				"flex",
				"flex-col",
				styleType.container,
				containerClassname
			)}
		>
			{label && (
				<Text
					type="label"
					size="lg"
					className={clsx(
						"font-bold",
						"dark:text-white",
						error
							? clsx("text-red-400", "dark:text-red-400")
							: clsx(
									"text-light-primary-normal",
									"dark:text-white"
								),
						styleType.label,
						labelClassname
					)}
					props={{
						htmlFor: id ?? label,
					}}
				>
					{label}
				</Text>
			)}
			<div
				className={clsx(
					"flex",
					"border-2",
					"rounded-md",
					"overflow-hidden",
					"transition-all",
					"duration-200",
					"ease-linear",
					error
						? clsx("border-red-400", "dark:border-red-400")
						: clsx(
								"dark:border-light-secondary-aside",
								"hover:dark:border-white"
							),
					styleVariant,
					className
				)}
			>
				{leftIcon}
				<textarea
					ref={refInput}
					id={id ?? label}
					value={value}
					className={clsx(
						"w-full",
						"pl-3",
						"py-3",
						"outline-none",
						"focus-within:outline-none",
						"dark:bg-light-secondary-navBar",
						"dark:text-white",
						styleType.input,
						inputClassname
					)}
					placeholder={currentPlaceholder}
					{...rest}
				/>
				{rightIcon}
			</div>

			{error &&
				(typeof error === "string" ? (
					<Text
						size="sm"
						className={clsx("ml-2", "mt-2", "text-red-400")}
					>
						{error}
					</Text>
				) : (
					error
				))}
		</div>
	)
}
