/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#FF0000',
      },
			padding: {
				'56': '56.25%'
			}
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
