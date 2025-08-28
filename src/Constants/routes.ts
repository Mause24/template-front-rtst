export const PUBLIC_ROUTES = [
	{
		name: "Iniciar Sesion",
		route: "/login",
	},
	{
		name: "Registro",
		route: "/register",
	},
]

export const PRIVATE_ROUTES = [
	{
		name: "Home",
		route: "/home",
	},
]

export const ADMIN_ROUTES = [
	{
		name: "Admin",
		route: "/admin",
	},
].concat(PRIVATE_ROUTES)

export interface GroupRouteProps extends RouteProps {
	childrens?: RouteProps[]
}

export interface RouteProps {
	name: string
	route: string
	ext?: Extensions
}

export type Extensions =
	| "html"
	| "css"
	| "js"
	| "ts"
	| "jsx"
	| "tsx"
	| "txt"
	| "md"
	| "py"
	| "rb"
