import { ReactNode } from 'react';

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-eerie-black bg-graph-pattern">
      {/* TODO: SEO */}
      <main>{children}</main>
    </div>
  );
};

type MainLayoutProps = {
  children: ReactNode;
};

export default MainLayout;
