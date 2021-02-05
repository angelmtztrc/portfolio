import Link from 'next/link';

const Header = () => {
  return (
    <header className="absolute top-0 py-4 w-full">
      <div className="container flex items-center justify-between mx-auto">
        <div className="text-gray-900">
          <span className="font-sans font-bold">LOGO</span>
        </div>
        <nav className="text-sm space-x-4">
          <Link href="/">
            <a className="font-mono">
              <span className="text-blue-500">01.</span>
              <span className="text-gray-700">About</span>
            </a>
          </Link>
          <Link href="/">
            <a className="font-mono">
              <span className="text-blue-500">02.</span>
              <span className="text-gray-700">Experience</span>
            </a>
          </Link>
          <Link href="/">
            <a className="font-mono">
              <span className="text-blue-500">03.</span>
              <span className="text-gray-700">Projects</span>
            </a>
          </Link>
          <Link href="/">
            <a className="font-mono">
              <span className="text-blue-500">04.</span>
              <span className="text-gray-700">Blog</span>
            </a>
          </Link>
          <Link href="/">
            <a className="font-mono">
              <span className="text-blue-500">05.</span>
              <span className="text-gray-700">Contact</span>
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
