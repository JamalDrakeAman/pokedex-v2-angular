/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        orange: '#FFA400',
        blue: '#1E3A73'
      },
      fontFamily: {
        pokeSolid: ['pokemon-solid']
      },
    },
  },
  plugins: [require("rippleui")],
}