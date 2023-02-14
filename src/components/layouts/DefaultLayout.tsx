'use client';

import { useEffect } from 'react';
import { hotjar } from 'react-hotjar';

type DefaultLayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  useEffect(() => {
    hotjar.initialize(3367181, 6);
  }, []);

  return <div className="min-h-screen bg-darken-900">{children}</div>;
};

export default DefaultLayout;
