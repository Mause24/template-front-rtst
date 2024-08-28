import { IMAGES } from "@/Constants"
import clsx from "clsx"
import { Link } from "react-router-dom"
import { Button } from "../Button"
import { HamburgerMenu } from "../HamburgerMenu"
import { Text } from "../Text"
import { HeaderProps } from "./Header.types"
import { useHeader } from "./useHeader"

export const Header = (props: HeaderProps): JSX.Element => {
	const {
		hovering,
		refs,
		linksArray,
		isAuth,
		onDeleteSession,
		rightMenu,
		isMenuOpen,
		toggleMenu,
		isMobileScreen,
	} = useHeader(props)

	return (
		<header
			className={clsx(
				"w-full",
				"py-2",
				"px-4",
				"bg-primary-normal",
				"text-white",
				"flex",
				"justify-between",
				"items-center",
				"h-20",
				"z-20"
			)}
		>
			<div
				className={clsx(
					"flex",
					"bg-inherit",
					"items-center",
					rightMenu && "order-2"
				)}
			>
				{isMobileScreen && (
					<HamburgerMenu
						className="text-white"
						handleOpen={toggleMenu}
						isOpen={isMenuOpen}
					/>
				)}

				<nav
					className={clsx(
						"flex",
						"origin-left",
						"transition-all",
						"duration-[400ms]",
						"z-20",

						isMobileScreen &&
							clsx(
								"absolute",
								"top-[80px]",
								"left-0",
								"h-[calc(100%-80px)]",
								"bg-inherit",
								isMenuOpen ? "w-[80%]" : "w-0"
							)
					)}
				>
					<ul
						className={clsx(
							"flex",
							"px-2",
							"gap-x-4",
							"transition-all",
							"duration-[200ms]",
							isMobileScreen &&
								clsx(
									"flex-col",
									"w-full",
									isMenuOpen ? "opacity-100" : "opacity-0"
								)
						)}
					>
						{linksArray.map((item, index) => (
							<li
								key={item.route}
								className={clsx(
									"flex",
									"relative",
									isMobileScreen && "w-full"
								)}
							>
								<Link
									onClick={toggleMenu}
									id={String(item.route)}
									ref={el => (refs.current[index + 1] = el)}
									to={item.route}
									className={clsx(
										"flex",
										"w-full",
										"h-full",
										"items-center",
										//PROPERTIES OF THE AFTER LINE OF THE LINKS
										"after:content-['']",
										"after:w-full",
										"after:border-b-[3px]",
										"after:absolute",
										"after:origin-left",
										"after:transition-all",
										"after:duration-[400ms]",
										"after:bottom-0",
										"after:left-0",
										hovering === index + 1
											? "after:scale-x-100"
											: "after:scale-x-0"
									)}
								>
									<Text
										props={{
											className: isMobileScreen
												? clsx(
														"text-base",
														"w-full",
														"text-center"
													)
												: "",
										}}
										color="white"
										size="lg"
										type="span"
									>
										{item.name}
									</Text>
								</Link>
							</li>
						))}
						{isAuth() && (
							<li
								key={"close-session"}
								id="close-session"
								className={clsx(
									"flex",
									"relative",
									isMobileScreen &&
										clsx("flex-1", "items-end")
								)}
							>
								<Button
									ref={el => (refs.current[0] = el)}
									variant="transparent"
									className={clsx(
										"flex",
										"w-full",
										//Responsive
										isMobileScreen ? "h-10" : "h-full",
										//PROPERTIES OF THE AFTER LINE OF THE LINKS
										"after:content-['']",
										"after:w-full",
										"after:border-b-[3px]",
										"after:absolute",
										"after:origin-left",
										"after:transition-all",
										"after:duration-[400ms]",
										"after:bottom-1",
										"after:left-0",
										hovering === 0
											? "after:scale-x-100"
											: "after:scale-x-0"
									)}
									onClick={onDeleteSession}
								>
									<Text
										props={{
											className: isMobileScreen
												? clsx(
														"text-base",
														"w-full",
														"text-center"
													)
												: "",
										}}
										color="white"
										size="lg"
										type="span"
									>
										Cerrar Sesion
									</Text>
								</Button>
							</li>
						)}
					</ul>
				</nav>
			</div>

			<div
				className={clsx(
					"flex",
					"justify-center",
					"items-center",
					"gap-x-2",
					rightMenu && "order-1"
				)}
			>
				<img
					src={IMAGES.logo}
					className={clsx("w-44", isMobileScreen && "w-32")}
					alt="logo"
				/>
			</div>
		</header>
	)
}
