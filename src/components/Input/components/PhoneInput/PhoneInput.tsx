import { Select, Text } from "@/components"
import clsx from "clsx"
import { PhoneInputProps } from "./PhoneInput.types"
import { usePhoneInput } from "./usePhoneInput"

export const PhoneInput = (props: PhoneInputProps): JSX.Element => {
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
		countryCodes,
		handleCountryChange,
		selectedCountry,
		leftIcon,
		rightIcon,
		inputClassname,
		onChange,
	} = usePhoneInput(props)

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
			<div className={clsx("flex", "gap-x-1")}>
				<Select
					keyExtractor={item => item.label}
					renderSelectedOptionLabel={item => String(item.value)}
					filter
					key={String(selectedCountry.value)}
					selectOption={selectedCountry}
					hanldeSelectOption={handleCountryChange}
					className={{
						container: clsx("w-full", "h-14"),
						selected: clsx(
							"flex-none",
							"w-14",
							error ? "border-red-400" : ""
						),
						childrenContainer: clsx("gap-x-1"),
						expandContainer: clsx("w-full"),
					}}
					data={countryCodes}
				>
					<div
						className={clsx(
							"w-full",
							"flex",
							"border-2",
							"rounded-md",
							"overflow-hidden",
							"transition-all",
							"duration-200",
							"ease-linear",
							styleVariant,
							error
								? clsx("border-red-400", "dark:border-red-400")
								: clsx(
										"dark:border-light-secondary-aside",
										"hover:dark:border-white"
									),
							className
						)}
					>
						{leftIcon}
						<input
							ref={refInput}
							id={id ?? label}
							value={value?.value}
							type={"tel"}
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
							onChange={evt =>
								onChange?.({
									value: evt.target.value,
									ext: String(selectedCountry.value),
								})
							}
							{...rest}
						/>
						{rightIcon}
					</div>
				</Select>
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
