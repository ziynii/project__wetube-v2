/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#FF0000',
      },
      padding: {
        56: '56.25%',
      },
      keyframes: {
        loading: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        cursor: {
          '0%': {
            'box-shadow': 'inset -3px 0px 0px #888',
          },
          '100%': {
            'box-shadow': 'inset -3px 0px 0px transparent',
          },
        },
      },
      animation: {
        loading: 'loading 1.6s linear infinite',
        cursor: 'cursor 0.5s alternate infinite',
      },
      animationDelay: {
        48: '0.48s',
        60: '0.6s',
        72: '0.72s',
        84: '0.84s',
        96: '0.96s',
        108: '1.08s',
        120: '1.2s',
        132: '1.32s',
        144: '1.44s',
        156: '1.56s',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwindcss-animation-delay'),
  ],
};
