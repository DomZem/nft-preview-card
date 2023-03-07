/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				// primary
				mainBg: 'hsl(217, 54%, 11%)',
				cardBG: 'hsl(216, 50%, 16%)',
				line: 'hsl(215, 32%, 27%)',

				// secondary
				softBlue: 'hsl(215, 51%, 70%)',
				cyan: 'hsl(178, 100%, 50%)',
			},
		},
	},
	plugins: [],
};
