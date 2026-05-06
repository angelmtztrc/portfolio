import type { Metadata } from 'next';

import { Share_Tech_Mono } from 'next/font/google';

import '@/styles/globals.css';

const font_mono = Share_Tech_Mono({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-share-tech-mono'
});

export const metadata: Metadata = {
  title: 'Angel Martinez - Software Engineer',
  description:
    'Software engineer and TypeScript enthusiast. Passionate about creating unique and efficient web solutions.'
};

const Layout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html
      lang="en"
      className={`${font_mono.variable} h-full antialiased bg-background`}
    >
      <body className="font-mono">{children}</body>
    </html>
  );
};

export default Layout;
