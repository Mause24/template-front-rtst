import clsx from "clsx"
import { Text } from "../Text"
import { InputProps } from "./Input.types"
import { useInput } from "./useInput"

export const Input = (props: InputProps) => {
	const {
		className,
		containerClassname,
		labelClassname,
		label,
		styleType,
		styleVariant,
		refInput,
		id,
		currentPlaceholder,
		error,
		rest,
		value,
		type,
	} = useInput(props)

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
					props={{
						className: clsx(
							"font-bold",
							styleType.label,
							labelClassname
						),
						htmlFor: id ?? label,
					}}
					color={error ? "red" : "primary"}
				>
					{label}
				</Text>
			)}
			<input
				ref={refInput}
				id={id ?? label}
				value={value}
				type={type}
				className={clsx(
					"border-2",
					"pl-3",
					"py-3",
					"rounded-md",
					"outline-none",
					"focus-within:outline-none",
					"transition-all",
					"duration-200",
					"ease-linear",
					error ? "border-red-400" : "",
					styleType.input,
					styleVariant,
					className
				)}
				placeholder={currentPlaceholder}
				{...rest}
			/>
			{error &&
				(typeof error === "string" ? (
					<Text
						color="red"
						type="span"
						size="sm"
						props={{
							className: clsx("ml-2", "mt-2"),
						}}
					>
						{error}
					</Text>
				) : (
					error
				))}
		</div>
	)
}
