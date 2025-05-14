/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "selector",
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					normal: "royalblue",
				},
			},
			animation: {
				fade: "fade",
				"slide-down-fade": "slide-down-fade",
				"zoom-in": "zoom-in",
				"zoom-out": "zoom-out",
			},
			keyframes: {
				fade: {
					"0%": {
						opacity: 0,
					},
					"100%": {
						opacity: "100%",
					},
				},
				"slide-down-fade": {
					"0%": {
						transform: "translateY(-50%)",
						opacity: 0,
					},
					"100%": {
						transform: "translateY(0)",
						opacity: "100%",
					},
				},
				"zoom-in": {
					"0%": {
						transform: "scale(25%)",
					},
					"100%": {
						transform: "scale(100%)",
					},
				},
				"zoom-out": {
					"0%": {
						transform: "scale(100%)",
					},
					"100%": {
						transform: "scale(0%)",
					},
				},
			},
		},
	},
	plugins: [],
}
