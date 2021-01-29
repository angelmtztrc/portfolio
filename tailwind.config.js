module.exports = {
  purge: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
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
    extend: {}
  },
  plugins: [require('nightwind')]
};
