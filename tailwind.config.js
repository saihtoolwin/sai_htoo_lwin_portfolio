/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors:{
        secondary : '#33FFCC',
        // secondary:"##00B7FF",
        primary:"#00B7FF"
      },
      fontFamily: {
        suse: ['"SUSE"', 'sans-serif'], // Adding the SUSE font
      },
    },
  },
  plugins: [],
}
