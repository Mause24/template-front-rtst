import { create } from "zustand"
import { Themes, ThemeStoreProps } from "./ThemeStore.types"

export const useThemeStore = create<ThemeStoreProps>((set, get) => {
	const currentTheme = String(
		localStorage.getItem("theme") ?? "light"
	) as keyof typeof Themes

	const changeTheme = (newTheme: keyof typeof Themes): void => {
		const { theme } = get()

		document.documentElement.classList.remove(theme)
		document.documentElement.classList.add(newTheme)
		localStorage.setItem("theme", newTheme)

		set({ theme: newTheme })
	}

	const toggleTheme = (
		firstTheme: keyof typeof Themes,
		secondTheme: keyof typeof Themes
	): keyof typeof Themes | undefined => {
		try {
			if (firstTheme === secondTheme)
				throw new Error("equals themes cannot be toggled")
			const { theme } = get()
			if (theme === firstTheme) {
				changeTheme(secondTheme)
			} else {
				changeTheme(firstTheme)
			}
		} catch (error) {
			console.error(error)
			return firstTheme
		}
	}

	return {
		theme: currentTheme,
		changeTheme,
		toggleTheme,
	}
})
