import React, { useState } from 'react';
import { Link } from 'gatsby';
import Icon from '@mdi/react';
import { mdiMenu, mdiClose } from '@mdi/js';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Open and close mobile nav
  const handleOpen = e => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <header className="w-full bg-white">
      <div className="container mx-auto px-6 lg:px-0 py-4 lg:py-6 flex flex-wrap justify-between items-center">
        <Link to="/" className="p-4 bg-dark flex items-center">
          <span className="text-white font-display leading-none">AM</span>
        </Link>
        <button onClick={handleOpen} className="lg:hidden focus:outline-none">
          {open ? (
            <Icon path={mdiClose} size={1.2} color={'#1f1f1f'} />
          ) : (
            <Icon path={mdiMenu} size={1.2} color={'#1f1f1f'} />
          )}
        </button>
        <nav
          id="navigation"
          className={`${
            open ? 'w-full flex flex-col flex-grow' : 'hidden'
          } mt-5 lg:mt-0 lg:block lg:w-auto lg:flex-grow-0 text-dark`}
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
