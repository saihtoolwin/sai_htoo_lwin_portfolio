/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors:{
        secondary : '#33FFCC',
        bgcolor:"#102129",
        primary:"#00B7FF"
      },
      fontFamily: {
        suse: ['"SUSE"', 'sans-serif'], // Adding the SUSE font
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
