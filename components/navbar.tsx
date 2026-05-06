"use client";
import clsx from "clsx";
import Link from "next/link";

import { useEffect, useState } from "react";

import { SOCIAL_MEDIA } from "@/data/communications";

const NAVBAR_LINKS = [
  { title: "Experience", href: "#experience" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#communications" },
];

const SOCIAL_MEDIA_SHORTCUTS = [
  { title: SOCIAL_MEDIA.GitHub.shortname, url: SOCIAL_MEDIA.GitHub.url },
  { title: SOCIAL_MEDIA.LinkedIn.shortname, url: SOCIAL_MEDIA.LinkedIn.url },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 w-full border-b transition-colors",
        scrolled
          ? "border-line bg-background/95 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <div className="text-foreground text-xs tracking-wider uppercase">
          itsangel
          <span className="text-muted-foreground">.dev</span>
        </div>
        <nav className="hidden items-center gap-8 md:flex">
          {NAVBAR_LINKS.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              title={link.title}
              className="text-muted-foreground hover:text-foreground text-xs tracking-widest uppercase transition-colors"
            >
              {link.title}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          {SOCIAL_MEDIA_SHORTCUTS.map((shortcut) => (
            <Link
              key={shortcut.title}
              href={shortcut.url}
              title={shortcut.title}
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground text-xs tracking-widest uppercase transition-colors"
            >
              {shortcut.title}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
