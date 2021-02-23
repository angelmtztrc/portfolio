import Link from 'next/link';

const Header = () => {
  return (
    <header className="absolute top-0 py-4 w-full bg-transparent">
      <div className="container flex items-center justify-between mx-auto">
        <div className="text-gray-900">
          <span className="font-sans font-bold">LOGO</span>
        </div>
        <nav className="text-sm space-x-4">
          <Link href="/">
            <a className="font-mono space-x-1">
              <span className="text-red-600">01.</span>
              <span className="text-gray-900">About</span>
            </a>
          </Link>
          <Link href="/">
            <a className="font-mono space-x-1">
              <span className="text-red-600">02.</span>
              <span className="text-gray-900">Projects</span>
            </a>
          </Link>
          <Link href="/">
            <a className="font-mono space-x-1">
              <span className="text-red-600">03.</span>
              <span className="text-gray-900">Blog</span>
            </a>
          </Link>
          <Link href="/">
            <a className="font-mono space-x-1">
              <span className="text-red-600">04.</span>
              <span className="text-gray-900">Contact</span>
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
