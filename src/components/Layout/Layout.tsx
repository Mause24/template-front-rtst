import clsx from "clsx"
import { Footer } from "../Footer"
import { Header } from "../Header"
import { LayoutProps } from "./Layout.types"
import { useLayout } from "./useLayout"

export const Layout = (props: LayoutProps): JSX.Element => {
	const { children } = useLayout(props)

	return (
		<>
			<Header />
			<div
				className={clsx(
					"flex",
					"min-h-[calc(100dvh-48px)]",
					"h-full",
					"bg-secondary-normal",
					"dark:bg-secondary-normal"
				)}
			>
				{/* <AsideNavbar /> */}
				<main
					className={clsx(
						"flex-1",
						"bg-secondary-normal",
						"dark:bg-secondary-normal"
					)}
				>
					{children}
				</main>
			</div>
			<Footer />
		</>
	)
}
