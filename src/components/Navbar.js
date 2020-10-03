import React from 'react';

const Navbar = () => {
  return (
    <header className="w-full bg-white">
      <div className="container mx-auto px-6 lg:px-0 py-4 lg:py-6 flex flex-wrap justify-between items-center">
        <a className="p-4 bg-dark flex items-center">
          <span className="text-white font-display leading-none">AM</span>
        </a>
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
          <a className="mb-3 lg:mb-0 text-gray-900 font-bold">Home</a>
          <a className="mb-3 lg:mb-0 text-gray-900 font-bold">About</a>
          <a className="mb-3 lg:mb-0 text-gray-900 font-bold">Blog</a>
          <a className="mb-3 lg:mb-0 text-gray-900 font-bold">Portfolio</a>
          <a className="mb-3 lg:mb-0 text-gray-900 font-bold">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
