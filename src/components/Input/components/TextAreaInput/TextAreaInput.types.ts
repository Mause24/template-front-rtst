import { GeneralCustomInputProps } from "@/components"

export interface TextAreaInputProps
	extends React.DetailedHTMLProps<
			React.TextareaHTMLAttributes<HTMLTextAreaElement>,
			HTMLTextAreaElement
		>,
		GeneralCustomInputProps {}
