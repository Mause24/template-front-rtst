import clsx from "clsx"
import { Navigate } from "react-router-dom"
import { Footer } from "../Footer"
import { Header } from "../Header"
import { LayoutProps } from "./Layout.types"
import { useLayout } from "./useLayout"

export const Layout = (props: LayoutProps): JSX.Element => {
	const { redirectTo, children } = useLayout(props)

	return (
		<>
			<Header />
			<main className={clsx("min-h-[calc(100dvh-290px)]")}>
				{children}
			</main>
			<Footer />
			<Navigate replace to={redirectTo} />
		</>
	)
}
