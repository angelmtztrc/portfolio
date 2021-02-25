import Link from 'next/link';

const Header = () => {
  return (
    <header className="absolute top-0 py-4 w-full bg-transparent">
      <div className="container flex items-center justify-between mx-auto">
        <div className="text-gray-900">
          <span className="font-sans font-bold">LOGO</span>
        </div>
        {/* NAVBAR FOR MOBILE SIZES */}
        <nav className="hidden text-sm space-x-4 lg:block">
          <Link href="/">
            <a className="font-mono space-x-1">
              <span className="text-gray-900">About</span>
            </a>
          </Link>
          <Link href="/">
            <a className="font-mono space-x-1">
              <span className="text-gray-900">Projects</span>
            </a>
          </Link>
          <Link href="/">
            <a className="font-mono space-x-1">
              <span className="text-gray-900">Blog</span>
            </a>
          </Link>
          <Link href="/">
            <a className="font-mono space-x-1">
              <span className="text-gray-900">Contact</span>
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
