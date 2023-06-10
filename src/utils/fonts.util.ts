import { Fira_Code as FiraCode, Merriweather_Sans as MerriweatherSans } from 'next/font/google';

const display = FiraCode({
  variable: '--display-font'
});

const body = MerriweatherSans({
  variable: '--body-font'
});

const fonts = () => {
  return [display.variable, body.variable].join(' ');
};

export default fonts();
