import type { Metadata } from 'next';

import { Navigation } from '@/components';

import { cls } from '@/utils/classname.utils';
import loadedFonts from '@/utils/font.utils';

import '@/styles/globals.css';

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <html lang="en">
      <body className={cls(loadedFonts, 'bg-layer-body')}>
        <Navigation />
        {children}
      </body>
    </html>
  );
};

export default MainLayout;

export const metadata: Metadata = {
  title: 'Angel Martinez - Software Engineer',
  description:
    "Hi, I'm Angel a Software Developer and TypeScript enthusiast. Here you'll find a diverse range of my best projects and more information about my career as a software developer."
};
