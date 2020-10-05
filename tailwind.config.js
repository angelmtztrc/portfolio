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
          100: '#1f1f1f',
          200: '#121212'
        },
        light: {
          100: '#f7fafc',
          200: '#F1FAFF'
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
