module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	settings: {
		react: {
			version: "detect",
		},
		"import/resolver": { typescript: true, node: true },
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/strict-type-checked",
		"plugin:@typescript-eslint/stylistic-type-checked",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:react-hooks/recommended",
		"plugin:import/recommended",
		"plugin:import/typescript",
		"prettier",
	],
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		project: ["./tsconfig.json", "./tsconfig.node.json"],
		tsconfigRootDir: __dirname,
	},
	plugins: ["react-refresh"],
	rules: {
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
		"import/order": [
			"error",
			{
				groups: [
					"builtin",
					"external",
					"internal",
					["parent", "sibling", "index"],
					"type",
				],
				pathGroups: [
					{
						pattern: "react{*/**}",
						group: "builtin",
						position: "after",
					},
					{
						pattern: "@/**",
						position: "after",
						group: "external",
					},
				],
				"newlines-between": "always",
				pathGroupsExcludedImportTypes: [],
				alphabetize: {
					order: "asc",
					caseInsensitive: true,
				},
			},
		],
	},
};
