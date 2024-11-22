import { Azeret_Mono, Manrope } from 'next/font/google';

const display = Azeret_Mono({
  subsets: ['latin'],
  variable: '--font-heading'
});

const body = Manrope({ subsets: ['latin'], variable: '--font-paragraph' });

const loadFonts = () => {
  return [display.variable, body.variable].join(' ');
};

export default loadFonts();
