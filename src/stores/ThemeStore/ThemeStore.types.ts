export enum Themes {
	"dark" = "dark",
	"light" = "light",
}

export interface ThemeStoreProps {
	theme: keyof typeof Themes
	changeTheme: (newTheme: keyof typeof Themes) => void
	toggleTheme: (
		firstTheme: keyof typeof Themes,
		secondTheme: keyof typeof Themes
	) => void
}
