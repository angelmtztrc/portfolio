module.exports = {
  purge: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          md: '4rem',
          lg: '8rem',
          xl: '10rem'
        }
      },
      colors: {
        primary: {
          100: '#C0C8DB',
          200: '#8C94A5',
          300: '#5B6373',
          400: '#121017',
          500: '#0D0B12'
        },
        secondary: {
          100: '#0CC5EC',
          200: '#009DC3',
          300: '#00779B',
          400: '#005274',
          500: '#003050'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
