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
