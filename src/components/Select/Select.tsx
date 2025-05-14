import { Button, Input, Text } from "@/components"
import clsx from "clsx"
import { IoIosSearch } from "react-icons/io"
import { SelectItem, SelectProps } from "./Select.types"
import { useSelect } from "./useSelect"

export const Select = <T extends SelectItem>(
	props: SelectProps<T>
): JSX.Element => {
	const {
		data,
		handleFilter,
		filterValue,
		setFilterValue,
		handleSelectItem,
		selectedItem,
		isOpen,
		setIsOpen,
		className,
		children,
		filter,
		renderOptionsLabel,
		renderSelectedOptionLabel,
		keyExtractor,
	} = useSelect(props)

	return (
		<>
			{isOpen && (
				<Button
					type="button"
					variant="transparent"
					onClick={() => setIsOpen(false)}
					className={clsx(
						"absolute",
						"rounded-none",
						"z-10",
						"top-0",
						"left-0",
						"cursor-default",
						"w-dvw",
						"h-dvh"
					)}
				/>
			)}
			<div
				className={clsx(
					"w-full",
					"h-14",
					"relative",
					isOpen && "z-10",
					className?.container
				)}
			>
				<div
					className={clsx(
						"flex",
						"h-full",
						className?.childrenContainer
					)}
				>
					<Button
						type="button"
						onClick={() => setIsOpen(state => !state)}
						className={clsx(
							"flex-1",
							"h-full",
							"border-2",
							"bg-white",
							"dark:bg-light-secondary-navBar",
							"dark:text-white",
							"dark:border-light-secondary-aside",
							"hover:dark:border-white",
							"hover:border-light-primary-normal",
							"transition-all",
							"duration-200",
							className?.selected
						)}
						variant="transparent"
						key={`default-${String(selectedItem.value)}`}
					>
						<Text className={clsx("line-clamp-1")}>
							{renderSelectedOptionLabel?.(selectedItem) ??
								selectedItem.label}
						</Text>
					</Button>
					{children}
				</div>
				<div
					className={clsx(
						"w-full",
						"flex",
						"flex-col",
						"top-full",
						"left-0",
						"absolute",
						"mt-1",
						"border-2",
						"bg-white",
						"border-dark-primary-normal",
						"dark:border-light-secondary-aside",
						"dark:bg-light-secondary-navBar",
						"rounded-md",
						"z-[+1]",
						"duration-150",
						"origin-top",
						"p-1",
						isOpen
							? clsx("transition-all", "scale-y-100")
							: clsx("transition-none", "scale-y-0"),
						className?.expandContainer
					)}
				>
					{filter && (
						<div
							className={clsx(
								"flex",
								"border-b-2",
								"dark:border-b-light-secondary-aside"
							)}
						>
							<Input
								leftIcon={
									<div
										className={clsx(
											"h-[inherit]",
											"w-10",
											"flex",
											"justify-center",
											"items-center"
										)}
									>
										<IoIosSearch
											className={clsx(
												"w-7",
												"h-7",
												"select-none",
												"text-dark-primary-normal",
												"dark:text-light-secondary-aside"
											)}
										/>
									</div>
								}
								className={clsx("border-none")}
								value={filterValue}
								onChange={evt =>
									setFilterValue(evt.target.value)
								}
							/>
						</div>
					)}
					<div
						className={clsx(
							"w-full",
							"flex",
							"flex-col",
							"overflow-y-auto",
							"max-h-[200px]"
						)}
					>
						{data.filter(handleFilter).map((item, index) => (
							<Button
								type="button"
								className={clsx(
									"h-10",
									"line-clamp-1",
									"transition-all",
									"duration-200",
									"rounded-none",
									"flex-shrink-0",
									"hover:bg-gray-100",
									"hover:dark:bg-light-secondary-aside",
									className?.selectItem
								)}
								onClick={handleSelectItem(item)}
								variant="transparent"
								key={
									keyExtractor?.(item, index) ??
									String(item.value)
								}
							>
								<Text
									className={clsx(
										"text-black",
										"dark:text-white"
									)}
								>
									{renderOptionsLabel?.(selectedItem) ??
										item.label}
								</Text>
							</Button>
						))}
					</div>
				</div>
			</div>
		</>
	)
}
