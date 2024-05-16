import { useAuthStore } from "@/stores"
import clsx from "clsx"

export const Home = (): JSX.Element => {
	const { session } = useAuthStore()
	return (
		<div
			className={clsx(
				"w-full",
				"h-[calc(100dvh-290px)]",
				"flex",
				"justify-center",
				"items-center"
			)}
		>
			<img src={session.user.avatarImage} alt="avatar" />
		</div>
	)
}
