import { Azeret_Mono, Manrope } from 'next/font/google';

const display = Azeret_Mono({
  subsets: ['latin'],
  variable: '--font-display'
});
const body = Manrope({ subsets: ['latin'], variable: '--font-body' });

const loadFonts = () => {
  return [display.variable, body.variable].join(' ');
};

export default loadFonts();
