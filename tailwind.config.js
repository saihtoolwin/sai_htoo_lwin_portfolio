/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors:{
        secondary : '#33FFCC',
        bgcolor:"#102129",
        primary:"#00B7FF",
         darkbg: '#000000',
      },
      fontFamily: {
        apple: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          '"Helvetica Neue"',
          'sans-serif'
        ],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
