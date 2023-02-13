/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["*"],
  theme: {
    extend: {
      darkMode: 'class',
      colors: {
        veryDarkDesaturatedBlue1: "hsl(222, 26%, 31%)",
        veryDarkDesaturatedBlue2: "hsl(223, 31%, 20%)",
        veryDarkDesaturatedBlue3: "hsl(224, 36%, 15%)",
        red: "hsl(6, 63%, 50%)",
        red2: "hsl(6, 93%, 57%)",
        darkRed: "hsl(6, 70%, 34%)",
        desaturatedDarkBlue1: "hsl(225, 21%, 49%)",
        desaturatedDarkBlue2: "hsl(224, 28%, 35%)",
        desaturatedDarkBlue3: "hsl(225, 67%, 72%)",
        lightGrayishOrange: "hsl(30, 25%, 89%)",
        grayishOrange: "hsl(28, 16%, 65%)",
        veryDarkGrayishBlue: "hsl(221, 14%, 31%)",
        white: "hsl(0, 0%, 100%)",

        lightGray: "hsl(0, 0%, 90%)",
        veryLightGray: "hsl(0, 0%, 93%)",
        grayishRed: "hsl(0, 5%, 81%)",
        darkModerateCyan: "hsl(185, 42%, 37%)",
        veryDarkCyan: "hsl(185, 58%, 25%)",
        orange: "hsl(25, 98%, 40%)",
        darkOrang: "hsl(25, 99%, 27%)",
        veryDarkGrayishYellow: "hsl(60, 10%, 19%)",
        lightGrayishYellow: "hsl(45, 7%, 89%)",
        darkGrayishOrange: "hsl(35, 11%, 61%)",

        veryDarkVoilet1: "hsl(268, 75%, 9%)",
        veryDarkVoilet2: " hsl(268, 71%, 12%)",
        darkVoilet: "hsl(281, 89%, 26%)",
        darkVoilet2: "hsl(281, 80%, 37%)",
        vividMagenta: "hsl(285, 91%, 52%)",
        pureCyan: "hsl(176, 100%, 44%)",
        cyan2: "hsl(176, 98%, 47%)",
        softCyan: "hsl(177, 92%, 70%)",
        veryDarkVoilet3: "hsl(268, 47%, 21%)",
        veryDarkVoilet4: "hsl(268, 51%, 35%)",
        darkMagneta: "hsl(290, 70%, 36%)",

        lightYellow: "hsl(52, 100%, 62%)",
        veryDarkBlue: "hsl(198, 20%, 13%)",

      },
      fontFamily:{
        League_Spartan: "League Spartan"
      },
      boxShadow:{
        'key':'0px 4px'
      }
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('theme1', '.theme1 &')
      addVariant('theme2', '.theme2 &')
      addVariant('theme3', '.theme3 &')
    }),
  ],
}
