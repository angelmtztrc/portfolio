module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#1f1f1f',
          200: '#121212'
        },
        light: {
          100: '#f7fafc',
          200: '#cbd5e0'
        }
      },
      fontFamily: {
        display: ['"JetBrains Mono"', 'sans-serif'],
        body: ['"Roboto Mono"', 'monospace']
      }
    }
  },
  variants: {},
  plugins: []
};
