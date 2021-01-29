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
          300: '#ffffff',
          400: '#f5f6f7',
          500: '#18191a',
          600: '#242529'
        }
      }
    }
  },
  variants: {
    extend: {
      scale: ['focus-within']
    }
  },
  plugins: [require('nightwind')]
};
