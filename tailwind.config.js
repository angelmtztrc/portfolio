// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#010101',
        white: '#fffffe',
        primary: colors.indigo,
        secondary: {
          50: '#eaf8f2',
          100: '#d5f0e5',
          200: '#abe2cb',
          300: '#80d3b1',
          400: '#56c597',
          500: '#2cb67d',
          600: '#239264',
          700: '#1a6d4b',
          800: '#124932',
          900: '#092419'
        },
        dark: {
          50: '#E9E9EA',
          100: '#D3D4D4',
          200: '#BDBEBF',
          300: '#A7A8A9',
          400: '#929394',
          500: '#7C7D7F',
          600: '#666769',
          700: '#505154',
          800: '#3C3F44',
          900: '#242629'
        },
        darken: {
          50: '#FCFCFD',
          100: '#F7F7F8',
          200: '#EEEEF1',
          300: '#E1E1E5',
          400: '#C8C8D0',
          500: '#ACACB9',
          600: '#808093',
          700: '#4B4B58',
          800: '#2C2C34',
          900: '#16161A'
        },
        gray: {
          50: '#f4f6f7',
          100: '#eaecf0',
          200: '#dfe3e8',
          300: '#d4d9e0',
          400: '#cad0d9',
          500: '#bfc7d1',
          600: '#b4bdc9',
          700: '#a9b4c1',
          800: '#9faaba',
          900: '#94a1b2'
        },
        greyish: {
          50: '#f1f1f2',
          100: '#e3e3e5',
          200: '#d5d6d8',
          300: '#c7c8cb',
          400: '#b9babf',
          500: '#aaacb2',
          600: '#9c9ea5',
          700: '#8e9198',
          800: '#80838b',
          900: '#72757e'
        }
      },
      fontFamily: {
        display: ['Fira Code', 'monospace'],
        body: ['Merriweather Sans', 'sans-serif']
      }
    }
  },
  plugins: []
};
