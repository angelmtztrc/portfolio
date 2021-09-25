import { ReactNode } from 'react';
import { SEO } from 'components/seo';

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-eerie-black">
      <SEO />
      <main>{children}</main>
    </div>
  );
};

type LayoutProps = {
  children: ReactNode;
};
