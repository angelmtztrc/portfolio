import { Fira_Code as FiraCode, Merriweather_Sans as MerriweatherSans } from '@next/font/google';

const display = FiraCode();
const body = MerriweatherSans();

const fonts = () => {
  return [display.className, body.className].join(' ');
};

export default fonts();
