import react from "@vitejs/plugin-react"
import autoprefixer from "autoprefixer"
import tailwindcss from "tailwindcss"
import { defineConfig } from "vite"
import tsconfigpaths from "vite-tsconfig-paths"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigpaths()],
	css: {
		postcss: {
			plugins: [tailwindcss, autoprefixer],
		},
	},
})
