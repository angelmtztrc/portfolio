'use client';

import { useEffect } from 'react';
import { hotjar } from 'react-hotjar';
import { Analytics } from '@vercel/analytics/react';

type DefaultLayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  useEffect(() => {
    hotjar.initialize(3367181, 6);
  }, []);

  return (
    <div className="min-h-screen bg-darken-900">
      {children}
      <Analytics />
    </div>
  );
};

export default DefaultLayout;
