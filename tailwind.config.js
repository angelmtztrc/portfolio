const Color = require('color');

const lighten = (color, value) => Color(color).lighten(value).hex().toString();
const darken = (color, value) => Color(color).darken(value).hex().toString();

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'graph-pattern': "url('/assets/graph-pattern.svg')"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem'
        }
      },
      colors: {
        black: '#010101',
        white: '#fffffe',
        'eerie-black': {
          light: lighten('#16161a', 0.08),
          DEFAULT: '#16161a',
          dark: darken('#16161a', 0.08)
        },
        'raisin-black': {
          light: lighten('#242629', 0.08),
          DEFAULT: '#242629',
          dark: darken('#242629', 0.08)
        },
        'medium-state-blue': {
          light: lighten('#7f5af0', 0.08),
          DEFAULT: '#7f5af0',
          dark: darken('#7f5af0', 0.08)
        },
        'cadet-grey': {
          light: lighten('#94a1b2', 0.08),
          DEFAULT: '#94a1b2',
          dark: darken('#94a1b2', 0.08)
        },
        'sonic-silver': {
          light: lighten('#72757e', 0.08),
          DEFAULT: '#72757e',
          dark: darken('#72757e', 0.08)
        },
        'medium-sea-green': {
          light: lighten('#2cb67d', 0.08),
          DEFAULT: '#2cb67d',
          dark: darken('#2cb67d', 0.08)
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
