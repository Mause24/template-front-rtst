import { countries } from "@/constants"
import { Country } from "@/interfaces"
import { useMemo, useState } from "react"
import { useInput } from "../../useInput"
import { PhoneCountry, PhoneInputProps } from "./PhoneInput.types"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const usePhoneInput = (props: PhoneInputProps) => {
	const {
		containerClassname,
		labelClassname,
		error,
		id,
		className,
		variant = "primary",
		customType = "normal",
		value,
		label,
		placeholder,
		leftIcon,
		rightIcon,
		inputClassname,
		onChange,
		...rest
	} = props

	const [selectedCountry, setSelectedCountry] = useState<PhoneCountry>({
		name: "Colombia",
		localName: "Colombia",
		phoneExtension: "+57",
		countrySuffix: "co",
		flagUrl: "https://flagcdn.com/w320/co.png",
		label: "Colombia",
		value: "+57",
	})

	const countryCodes: PhoneCountry[] = useMemo(
		() =>
			countries.map((item: Country) => ({
				...item,
				value: item.phoneExtension,
				label: item.name,
			})),
		[countries]
	)

	const handleCountryChange = (newCountry: PhoneCountry): void => {
		setSelectedCountry(newCountry)
	}

	const { currentPlaceholder, refInput, styleType, styleVariant } =
		useInput<HTMLInputElement>({
			containerClassname,
			labelClassname,
			error,
			id,
			className,
			variant,
			customType,
			value: value?.value,
			label,
			placeholder,
			type: "tel",
		})

	return {
		className,
		containerClassname,
		labelClassname,
		styleType,
		styleVariant,
		label,
		currentPlaceholder,
		id,
		error,
		value,
		refInput,
		rest,
		countryCodes,
		handleCountryChange,
		selectedCountry,
		leftIcon,
		rightIcon,
		inputClassname,
		onChange,
	}
}
