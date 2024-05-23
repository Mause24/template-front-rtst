import { useAuthStore } from "@/stores"
import clsx from "clsx"

export const Home = (): JSX.Element => {
	const { session } = useAuthStore()

	return (
		<div
			className={clsx(
				"w-full",
				"min-h-[calc(100dvh-290px)]",
				"py-4",
				"flex",
				"justify-center",
				"items-center"
			)}
		>
			{session?.user?.avatarImage && (
				<img
					className={clsx("h-96", "bg-cover")}
					src={session.user.avatarImage}
					alt="avatar"
				/>
			)}
		</div>
	)
}
