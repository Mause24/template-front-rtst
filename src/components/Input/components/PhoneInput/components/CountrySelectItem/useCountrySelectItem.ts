import { CountrySelectItemProps } from "./CountrySelectItem.types"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useCountrySelectItemProps = (props: CountrySelectItemProps) => {
	const { item } = props

	return {
		item,
	}
}
