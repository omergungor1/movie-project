/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: 'selector',
  theme: {
    container: {
      center: true,
      screens: {
        lg: "1140px",
        xl: "1140px",
        '2xl': "1140px",
      },
    },
    extend: {
      colors: {
        gega: {
          'red': '#BC1A45',
          'melon': '#FFD369',
          'grey': '#DDDDDD',
          'white': '#f7f7f7',
        }
      },
      spacing: {
        128: '32rem',
      },
      fontFamily: {
        gemunu: ['Gemunu Libre', 'sans-serif'],
        open: ['Open Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

