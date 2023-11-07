import type { Metadata } from 'next';

import fonts from '@/libs/fonts.lib';
import { cls } from '@/libs/cls.lib';

import { Navbar } from '@/molecules';

import '@/styles/globals.css';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={cls(fonts, 'bg-[#100919]')}>
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default MainLayout;

export const metadata: Metadata = {
  title: 'Angel Martinez - Web Developer',
  description:
    "Hi, I'm Angel a Web Developer and TypeScript enthusiast. Here you'll find a diverse range of my best projects and more information about my career as a web developer. "
};
