import { PaginationView } from "@/components"
import { usePagination } from "@/hooks"
import clsx from "clsx"
import { useState } from "react"

export const Home = (): JSX.Element => {
	/* const { session } = useAuthStore() */
	const [data] = useState([
		{
			id: 1,
			name: "Omar",
		},
		{
			id: 2,
			name: "Angie",
		},
		{
			id: 3,
			name: "Esteban",
		},
		{
			id: 4,
			name: "Penecita",
		},
		{
			id: 5,
			name: "Jean",
		},
		{
			id: 6,
			name: "Diego",
		},
		{
			id: 7,
			name: "Brayan",
		},
		{
			id: 8,
			name: "Pedro",
		},
		{
			id: 9,
			name: "Alvaro",
		},
		{
			id: 10,
			name: "Omar 2",
		},
		{
			id: 11,
			name: "Angie 2",
		},
		{
			id: 12,
			name: "Esteban 2",
		},
		{
			id: 13,
			name: "Penecita 2",
		},
		{
			id: 14,
			name: "Jean 2",
		},
		{
			id: 15,
			name: "Diego 2",
		},
		{
			id: 16,
			name: "Brayan 2",
		},
		{
			id: 17,
			name: "Pedro 2",
		},
		{
			id: 18,
			name: "Alvaro Ramirez",
		},
		{
			id: 19,
			name: "Alvaro Ramirez 2",
		},
		{
			id: 20,
			name: "Alvaro Ramirez",
		},
		{
			id: 21,
			name: "Alvaro Ramirez 2",
		},
	])

	const {
		pagesNumber,
		onChangePage,
		onMoveNext,
		currentIndex,
		onMovePrevious,
		paginatedData,
	} = usePagination({
		data,
		pageSize: 9,
	})

	return (
		<div
			className={clsx(
				"w-full",
				"h-[calc(100dvh-290px)]",
				"py-4",
				"flex",
				"justify-center",
				"items-center"
			)}
		>
			<PaginationView
				index={currentIndex}
				renderComponent={item => (
					<div
						key={item.id}
						className={clsx(
							"w-full",
							"h-full",
							"flex",
							"justify-center",
							"items-center",
							"border",
							"border-black"
						)}
					>
						{item.name}
					</div>
				)}
				cols={3}
				rows={3}
				onChangePage={onChangePage}
				onPressNext={_ => onMoveNext()}
				onPressPrevious={_ => onMovePrevious()}
				size={pagesNumber}
				data={paginatedData}
			/>
		</div>
	)
}
