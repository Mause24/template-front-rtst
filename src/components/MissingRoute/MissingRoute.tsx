import clsx from "clsx"
import { Button } from "../Button"
import { Text } from "../Text"
import { useMissingRoute } from "./useMissingRoute"

export const MissingRoute = (): JSX.Element => {
	const { handleGoBack } = useMissingRoute()

	return (
		<div
			className={clsx(
				"w-full",
				"min-h-[calc(100vh-290px)]",
				"py-10",
				"flex",
				"flex-col",
				"justify-center",
				"items-center",
				"bg-gray-100",
				"text-gray-700"
			)}
		>
			<Text
				type="h1"
				size="4xl"
				weight="bold"
				props={{ className: clsx("mb-4") }}
			>
				404
			</Text>

			<Text
				color="black"
				type="p"
				size="lg"
				props={{ className: clsx("mb-8") }}
			>
				Lo sentimos, la página que buscas no existe.
			</Text>

			<Button
				onClick={handleGoBack}
				label="Volver a la página principal"
			/>
		</div>
	)
}
