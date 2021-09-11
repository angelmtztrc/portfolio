import { ReactNode } from 'react';

// components
import { Header } from '../components/header';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-eerie-black">
      <main>{children}</main>
    </div>
  );
};
