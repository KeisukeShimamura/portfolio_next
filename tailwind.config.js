const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  // パージの対象ファイルを設定
  purge: ['./pages/**/*.tsx', './components/**/*.tsx', './public/**/*.html'],
  darkMode: false,
  content: [],
  theme: {
    fontFamily: {
      ja: [...defaultTheme.fontFamily.sans],
      en: [...defaultTheme.fontFamily.sans],
      fancy: ["Pacifico"],
    },
    extend: {
      colors: {
        'water': '#f5fcff',
      },
      keyframes: {
        graph100: {
          "0%": { width: 0 },
          "100%": { width: "100%" },
        },
        graph90: {
          "0%": { width: 0 },
          "100%": { width: "90%" },
        },
        graph80: {
          "0%": { width: 0 },
          "100%": { width: "80%" },
        },
        graph70: {
          "0%": { width: 0 },
          "100%": { width: "70%" },
        },
        graph60: {
          "0%": { width: 0 },
          "100%": { width: "60%" },
        },
        graph50: {
          "0%": { width: 0 },
          "100%": { width: "50%" },
        },
      },
      animation: {
        graph100: 'graph100 3s forwards',
        graph90: 'graph90 3s forwards',
        graph80: 'graph80 3s forwards',
        graph70: 'graph70 3s forwards',
        graph60: 'graph60 3s forwards',
        graph50: 'graph50 3s forwards',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
