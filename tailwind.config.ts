import type { Config } from "tailwindcss";

export default {
	content: [
		"./public/index.html",
		"./src/pages/**/*.{ts,tsx}",
		"./src/components/**/*.{ts,tsx}",
	],
	theme: {
		extend: {},
	},
	plugins: [],
} satisfies Config;
