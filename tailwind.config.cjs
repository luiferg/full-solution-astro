/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
],
	theme: {
		extend: {
			colors: {
        'fst-orange-300': '#f76c1b',
        'fst-orange-400': '#eb661b',
        'fst-orange-500': '#d15b17',
        'fst-orange-600': '#ab4b13',
        'fst-grey': '#959799',
        'fst-black': '#141414',
      },
      fontFamily: {
        primary: ['Open Sans', 'sans-serif'],
        secondary: ['Nevo', 'sans-serif'],
      },
		},
	},
	darkMode: "class",
  plugins: [nextui()]
}
