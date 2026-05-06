const Navbar = () => {
  return (
    <header className="sticky top-0 z-10">
      <div className="flex max-w-5xl px-6 mx-auto items-center justify-between py-4">
        <div className="uppercase text-xs text-foreground tracking-wider">
          itsangel
          <span className="text-muted-foreground">.dev</span>
        </div>
        <nav className="flex gap-8 items-center">
          <a
            href=""
            className="uppercase text-xs text-muted-foreground tracking-widest hover:text-foreground transition-colors"
          >
            Experience
          </a>
          <a
            href=""
            className="uppercase text-xs text-muted-foreground tracking-widest hover:text-foreground transition-colors"
          >
            Projects
          </a>
          <a
            href=""
            className="uppercase text-xs text-muted-foreground tracking-widest hover:text-foreground transition-colors"
          >
            Contact
          </a>
        </nav>
        <div className="flex gap-4 items-center">
          <a
            href=""
            className="uppercase text-xs text-muted-foreground tracking-widest hover:text-foreground transition-colors"
          >
            GH
          </a>
          <a
            href=""
            className="uppercase text-xs text-muted-foreground tracking-widest hover:text-foreground transition-colors"
          >
            LI
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
