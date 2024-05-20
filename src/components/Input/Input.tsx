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
		refInput2,
		id,
		error,
		rest,
	} = useInput(props)

	return (
		<div className={clsx("flex", "flex-col",styleType.container, containerClassname)}>
			{label && (
				<Text
					type="label"
					props={{
						className: clsx(styleType.label,labelClassname),
						htmlFor: id ?? label,
					}}
				>
					{label}
				</Text>
			)}
			<input
				ref={refInput}
				id={id ?? label}
				className={clsx(
					"border-2",
					"rounded-md",
					"outline-none",
					"focus-within:outline-none",
					"transition-all",
					"duration-200",
					"ease-linear",
					styleType.input,
					styleVariant,
					className,
				)}
				{...rest}
			/>
			{error &&
				(typeof error === "string" ? (
					<Text
						color="red"
						type="span"
						props={{ ref: refInput2, id: "error" }}
					>
						{error}
					</Text>
				) : (
					error
				))}
		</div>
	)
}
