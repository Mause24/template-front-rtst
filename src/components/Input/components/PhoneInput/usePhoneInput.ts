import { SelectItem } from "@/components"
import { useMemo, useState } from "react"
import { useTranslation } from "react-i18next"
import { useInput } from "../../useInput"
import { PhoneInputProps } from "./PhoneInput.types"

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

	const [selectedCountry, setSelectedCountry] = useState<SelectItem>({
		label: "Colombia (+57)",
		value: "+57",
	})

	const [t] = useTranslation("general")

	const countryCodes: SelectItem[] = useMemo(
		() => t("countryExtensions", { returnObjects: true }),
		[t("countryExtensions")]
	)

	const handleCountryChange = (newCountry: SelectItem): void => {
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
