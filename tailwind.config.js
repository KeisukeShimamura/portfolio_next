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
    },
    extend: {},
  },
  plugins: [],
}
