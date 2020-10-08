module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: ['./src/components/*.js', './src/containers/*.js', './src/pages/*.js'],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#242526',
          secondary: '#18191A'
        },
        light: {
          primary: '#FFFFFF',
          secondary: '#F5F6F7'
        }
      },
      fontFamily: {
        display: ['"JetBrains Mono"', 'sans-serif'],
        body: ['"Roboto Mono"', 'monospace']
      }
    }
  },
  experimental: {
    darkModeVariant: true
  },
  dark: 'class',
  variants: {},
  plugins: []
};
