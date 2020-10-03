import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => {
  return (
    <header className="w-full bg-white">
      <div className="container mx-auto px-6 lg:px-0 py-4 lg:py-6 flex flex-wrap justify-between items-center">
        <Link to="/" className="p-4 bg-dark flex items-center">
          <span className="text-white font-display leading-none">AM</span>
        </Link>
        <button className="lg:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <nav
          id="navigation"
          className="mt-5 lg:mt-0 hidden lg:block lg:w-auto lg:flex-grow-0 text-dark"
        >
          <Link
            to="/"
            className="mb-3 lg:mb-0 text-gray-900 font-bold border-b-2 border-transparent hover:border-dark transition-colors ease-in-out duration-300"
            activeClassName="border-b-2 border-dark"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="mb-3 lg:mb-0 text-gray-900 font-bold border-b-2 border-transparent hover:border-dark transition-colors ease-in-out duration-300"
            activeClassName="border-b-2 border-dark"
          >
            About
          </Link>
          <Link
            to="/blog"
            className="mb-3 lg:mb-0 text-gray-900 font-bold border-b-2 border-transparent hover:border-dark transition-colors ease-in-out duration-300"
            activeClassName="border-b-2 border-dark"
          >
            Blog
          </Link>
          <Link
            to="/portfolio"
            className="mb-3 lg:mb-0 text-gray-900 font-bold border-b-2 border-transparent hover:border-dark transition-colors ease-in-out duration-300"
            activeClassName="border-b-2 border-dark"
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            className="mb-3 lg:mb-0 text-gray-900 font-bold border-b-2 border-transparent hover:border-dark transition-colors ease-in-out duration-300"
            activeClassName="border-b-2 border-dark"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
