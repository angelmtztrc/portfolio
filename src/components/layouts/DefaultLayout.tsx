const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return <div className="flex min-h-screen flex-col bg-eerie-black">{children}</div>;
};

type DefaultLayoutProps = {
  children: React.ReactNode;
};

export default DefaultLayout;
