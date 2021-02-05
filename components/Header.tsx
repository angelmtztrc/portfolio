import Link from 'next/link';

const Header = () => {
  return (
    <header className="absolute top-0 py-4 w-full bg-primary-500">
      <div className="container flex items-center justify-between mx-auto">
        <div className="text-primary-100">
          <span className="font-sans font-bold">LOGO</span>
        </div>
        <nav className="text-sm space-x-4">
          <Link href="/">
            <a className="font-mono">
              <span className="text-secondary-100">01.</span>
              <span className="text-primary-100">About</span>
            </a>
          </Link>
          <Link href="/">
            <a className="font-mono">
              <span className="text-secondary-100">02.</span>
              <span className="text-primary-100">Experience</span>
            </a>
          </Link>
          <Link href="/">
            <a className="font-mono">
              <span className="text-secondary-100">03.</span>
              <span className="text-primary-100">Projects</span>
            </a>
          </Link>
          <Link href="/">
            <a className="font-mono">
              <span className="text-secondary-100">04.</span>
              <span className="text-primary-100">Blog</span>
            </a>
          </Link>
          <Link href="/">
            <a className="font-mono">
              <span className="text-secondary-100">05.</span>
              <span className="text-primary-100">Contact</span>
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
