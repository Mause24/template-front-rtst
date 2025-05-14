import { GeneralCustomInputProps } from "@/components"
import { DetailedHTMLProps, InputHTMLAttributes } from "react"

export interface PhoneInputValue {
	ext: string
	value: string
}

export interface PhoneInputProps
	extends Omit<
			DetailedHTMLProps<
				InputHTMLAttributes<HTMLInputElement>,
				HTMLInputElement
			>,
			"type" | "onChange" | "value"
		>,
		GeneralCustomInputProps {
	value?: PhoneInputValue
	onChange?: (value: PhoneInputValue) => void
}
