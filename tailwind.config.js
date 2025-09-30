/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: ["./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}", "./stories/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				"3xl": "2000px"
			}
		}
	},
	plugins: [
		require("@tailwindcss/container-queries"),
		require("tailwindcss-accent")({
			colors: ["indigo", "rose", "green", "zinc", "slate", "amber", "emerald", "violet", "yellow", "sky", "pink", "teal", "blue", "cyan", "orange"],
			root: "slate",
			cssVarsPrefix: "tw-plugin" // result: --tw-plugin-accent-200
		}),
		require("@tailwindcss/typography")
	]
};
