import { useCallback, useState } from "react"
import { SelectItem, SelectProps } from "./Select.types"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useSelect = <T extends SelectItem>(props: SelectProps<T>) => {
	const {
		data,
		placeholder,
		className,
		hanldeSelectOption,
		selectOption,
		children,
		filter,
		renderOptionsLabel,
		renderSelectedOptionLabel,
		keyExtractor,
	} = props
	const [filterValue, setFilterValue] = useState<string>("")
	const [selectedItem, setSelectedItem] = useState<T>(
		selectOption ??
			({
				label: placeholder ?? "Select an option",
				value: "",
			} as T)
	)
	const [isOpen, setIsOpen] = useState(false)

	const handleFilter = useCallback(
		(item: T) =>
			!filter || filterValue === ""
				? true
				: item.label.toUpperCase().includes(filterValue.toUpperCase()),
		[filter, filterValue]
	)

	const handleSelectItem = useCallback(
		(newItem: T) => (): void => {
			setSelectedItem(newItem)
			setIsOpen(false)
			hanldeSelectOption?.(newItem)
		},
		[hanldeSelectOption]
	)

	return {
		data,
		selectedItem,
		handleSelectItem,
		setIsOpen,
		isOpen,
		className,
		children,
		setFilterValue,
		keyExtractor,
		filterValue,
		handleFilter,
		renderOptionsLabel,
		renderSelectedOptionLabel,
		filter,
	}
}
