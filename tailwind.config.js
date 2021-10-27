module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/containers/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  mode: process.env.NODE_ENV ? 'jit' : undefined,
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '4rem',
          lg: '6rem',
          xl: '8rem',
          '2xl': '10rem'
        }
      },
      colors: {
        black: '#010101',
        white: '#fffffe',
        'eerie-black': '#16161a',
        'raisin-black': '#242629',
        'medium-state-blue': '#7f5af0',
        'cadet-grey': '#94a1b2',
        'raisin-black': '#242629',
        'sonic-silver': '#72757e',
        'medium-sea-green': '#2cb67d'
      },
      fontFamily: {
        display: ['Fira Code', 'monospace'],
        body: ['Merriweather Sans', 'sans-serif']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
