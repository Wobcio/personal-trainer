/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"hero-pattern":
					"url('https://i.postimg.cc/2SXCbVSc/hero-new.png')",
				"hero-pattern-gradient":
					"linear-gradient(180deg, black, url('https://i.postimg.cc/500gVM9F/hero.png'))",
				"hero-bar": "url('./pictures/hero_bar.jpg')",
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			"light",
			"dark",
			"cupcake",
			"bumblebee",
			"emerald",
			"corporate",
			"synthwave",
			"retro",
			"cyberpunk",
			"valentine",
			"halloween",
			"garden",
			"forest",
			"aqua",
			"lofi",
			"pastel",
			"fantasy",
			"wireframe",
			"black",
			"luxury",
			"dracula",
			"cmyk",
			"autumn",
			"business",
			"acid",
			"lemonade",
			"night",
			"coffee",
			"winter",
		],
	},
};
