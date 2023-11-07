import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        layer: {
          black: '#000000',
          bg: '#0A0E15'
        },
        content: {
          white: '#FFF',
          title: '#FAFAFA',
          border: '#F3F5F7',
          description: '#E0E4EB',
          dark: '#C7CEDB',
          darkest: '#878787'
        },
        primary: {
          50: '#F1F1FE',
          100: '#CBCBFB',
          200: '#B4B5F9',
          300: '#9799F7',
          400: '#7B7EF4',
          500: '#6366F1',
          600: '#4E51C1',
          700: '#393BB3',
          800: '#26275E',
          900: '#12122B'
        }
      },
      fontFamily: {
        display: ['var(--font-display)', 'monospace'],
        body: ['var(--font-body)', 'sans-serif']
      }
    }
  },
  plugins: []
};
export default config;
