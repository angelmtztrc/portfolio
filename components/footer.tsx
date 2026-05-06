const Footer = () => {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <footer className="py-6">
        <div className="flex flex-col items-center gap-2 md:flex-row md:justify-between">
          <p className="text-muted-foreground text-xs tracking-wide uppercase">
            © 2026 Angel Martinez — All Rights Reserved
          </p>
          <p className="text-dim text-xs tracking-wide uppercase">
            Build with Next.js and Tailwind{" "}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
