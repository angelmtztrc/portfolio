import Link from 'next/link';
import ToggleDark from './ToggleDark';

const Header = () => {
  return (
    <header>
      <div className="container flex items-center justify-between mx-auto py-4">
        <Link href="/">
          <div className="bg-primary-600 inline-block p-2 cursor-pointer">
            <span className="text-primary-300 text-lg font-bold uppercase">
              am
            </span>
          </div>
        </Link>
        <nav className="flex items-center space-x-6">
          <Link href="/about">
            <a className="text-primary-600 hover:border-primary-600 main__transition text-base font-medium border-b-2 border-transparent">
              About
            </a>
          </Link>
          <Link href="/blog">
            <a className="text-primary-600 hover:border-primary-600 main__transition text-base font-medium border-b-2 border-transparent">
              Blog
            </a>
          </Link>
          <Link href="/contact">
            <a className="text-primary-600 hover:border-primary-600 main__transition text-base font-medium border-b-2 border-transparent">
              Contact
            </a>
          </Link>
          <ToggleDark />
        </nav>
      </div>
    </header>
  );
};

export default Header;
