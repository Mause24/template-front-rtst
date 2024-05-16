import { IMAGES } from "@/Constants"
import clsx from "clsx"
import { Link } from "react-router-dom"

export const Footer = (): JSX.Element => {
	return (
		<footer className={clsx("bg-white rounded-lg shadow m-4", "h-44")}>
			<div className={clsx("w-full max-w-screen-xl mx-auto p-4 md:py-8")}>
				<div
					className={clsx(
						"sm:flex sm:items-center sm:justify-between"
					)}
				>
					<img
						src={IMAGES.logo}
						className={clsx("h-8")}
						alt="Flowbite Logo"
					/>
					<span
						className={clsx(
							"self-center text-2xl font-semibold whitespace-nowrap "
						)}
					>
						Soccer Corp
					</span>
					<ul
						className={clsx(
							"flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 "
						)}
					>
						<li>
							<Link
								to={"#"}
								className={clsx("hover:underline me-4 md:me-6")}
							>
								About
							</Link>
						</li>
						<li>
							<Link
								to={"#"}
								className={clsx("hover:underline me-4 md:me-6")}
							>
								Privacy Policy
							</Link>
						</li>
						<li>
							<Link
								to={"#"}
								className={clsx("hover:underline me-4 md:me-6")}
							>
								Licensing
							</Link>
						</li>
						<li>
							<Link to={"#"} className={clsx("hover:underline")}>
								Contact
							</Link>
						</li>
					</ul>
				</div>
				<hr
					className={clsx("my-6 border-gray-200 sm:mx-auto lg:my-8")}
				/>
				<span
					className={clsx(
						"block text-sm text-gray-500 sm:text-center"
					)}
				>
					© 2023{" "}
					<Link to={"#"} className={clsx("hover:underline")}>
						Soccer Corp™
					</Link>
					. All Rights Reserved.
				</span>
			</div>
		</footer>
	)
}
