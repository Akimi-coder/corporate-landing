/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'olive-dark': '#4B5415',
        'gold-warm': '#BC9838',
        'gold-warm-light':'#e0b43d',
        'gold-light':'#f2d163',
        'gold-super-light':'#ffdd6e',
        'olive-light':'#6B6D43',
        'olive-super-light':'#898c5e',
        'p':'#87A1AC',
        'p1':'#D6ECDA',
      },
      fontFamily:{
        custom: [ "Ponomar", "system-ui"],
        rubik: [ "Rubik Doodle Shadow", "system-ui"],
        shafarik: ["Shafarik", "system-ui"],
        ibm: ["IBM Plex Sans", "sans-serif"],
        pixel: ["Press Start 2P", "system-ui"],
        pixel1: ["Tiny5", "sans-serif"],
        pixel2: ["DotGothic16", "sans-serif"],
        rubik : ["Rubik Broken Fax", "system-ui"],
        pixel3 : ["Pixelify Sans", "sans-serif"],
        openSans : ["Open Sans", "sans-serif"],
        mont : ["Montserrat Alternates", "sans-serif"],
        arimo : ["Arimo", "sans-serif"],
        fira : ["Fira Sans Extra Condensed", "sans-serif"],
        vibes : ["Great Vibes", "cursive"],
        flex : ["Roboto Flex", "sans-serif"],
        ysabeu : ["Ysabeau", "sans-serif"],
        sofia : ["Sofia Sans", "sans-serif"],

      },
    },
  },
  plugins: [],
}

