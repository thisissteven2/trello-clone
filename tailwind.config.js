/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		colors: {
			bg: "rgb(var(--color-bg) / <alpha-value>)",
			primary: "rgb(var(--color-primary) / <alpha-value>)",
			done: "rgb(var(--color-done) / <alpha-value>)",
			"done-secondary": "rgb(var(--color-done-secondary) / <alpha-value>)",
			ongoing: "rgb(var(--color-ongoing) / <alpha-value>)",
			"ongoing-secondary": "rgb(var(--color-ongoing-secondary) / <alpha-value>)",
			undone: "rgb(var(--color-undone) / <alpha-value>)",
			"undone-secondary": "rgb(var(--color-undone-secondary) / <alpha-value>)",
			board: "rgb(var(--color-board) / <alpha-value>)",
			delete: "rgb(var(--color-delete) / <alpha-value>)",
		},
		extend: {
			fontFamily: {
				primary: ["Poppins", "sans-serif"],
			},
		},
	},
	plugins: [],
};
