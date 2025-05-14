import { FlatCompat } from "@eslint/eslintrc"
import js from "@eslint/js"
import typescriptEslint from "@typescript-eslint/eslint-plugin"
import tsParser from "@typescript-eslint/parser"
import prettierPlugin from "eslint-plugin-prettier"
import react from "eslint-plugin-react"
import globals from "globals"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
})

export default [
	...compat.extends(
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:prettier/recommended" // Extiende Prettier
	),
	{
		plugins: {
			"@typescript-eslint": typescriptEslint,
			react,
			prettier: prettierPlugin, // Añade Prettier como plugin
		},

		languageOptions: {
			globals: {
				...globals.browser,
			},
			parser: tsParser,
			ecmaVersion: "latest",
			sourceType: "module",
		},

		settings: {
			react: {
				version: "detect",
			},
		},

		rules: {
			// Desactiva la regla de indentación de ESLint para que Prettier controle el formato
			indent: "off",
			"linebreak-style": ["error", "windows"],
			quotes: ["error", "double"],
			semi: ["error", "never"],
			"no-empty": "error",
			"no-unused-vars": "off",
			"@typescript-eslint/explicit-function-return-type": [
				"error",
				{ allowExpressions: true },
			],
			"@typescript-eslint/no-explicit-any": [
				"error",
				{ fixToUnknown: true },
			],
			"prettier/prettier": ["error", { endOfLine: "auto" }], // Prettier aplicado como regla de ESLint
		},
	},
	{
		files: ["**/*.ts", "**/*.mts", "**/*.cts", "**/*.tsx"],
		rules: {
			"@typescript-eslint/explicit-function-return-type": [
				"error",
				{ allowedNames: ["use"] },
			],
		},
	},
]
