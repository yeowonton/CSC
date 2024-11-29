/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				mainBackground: {
					light: "#91f9e5",
					dark: "#5FDD9D",
				}
			}
		},
	},
	plugins: [],
}
