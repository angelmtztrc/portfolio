const Navbar = () => {
  return (
    <header className="sticky top-0 z-10">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <div className="text-foreground text-xs tracking-wider uppercase">
          itsangel
          <span className="text-muted-foreground">.dev</span>
        </div>
        <nav className="flex items-center gap-8">
          <a
            href=""
            className="text-muted-foreground hover:text-foreground text-xs tracking-widest uppercase transition-colors"
          >
            Experience
          </a>
          <a
            href=""
            className="text-muted-foreground hover:text-foreground text-xs tracking-widest uppercase transition-colors"
          >
            Projects
          </a>
          <a
            href=""
            className="text-muted-foreground hover:text-foreground text-xs tracking-widest uppercase transition-colors"
          >
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <a
            href=""
            className="text-muted-foreground hover:text-foreground text-xs tracking-widest uppercase transition-colors"
          >
            GH
          </a>
          <a
            href=""
            className="text-muted-foreground hover:text-foreground text-xs tracking-widest uppercase transition-colors"
          >
            LI
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
