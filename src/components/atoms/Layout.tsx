const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-eerie-black bg-graph-pattern">
      <main>{children}</main>
    </div>
  );
};

type LayoutProps = {
  children: React.ReactNode;
};

export default Layout;
