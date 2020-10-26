import React, { useState } from 'react';
import { Link } from 'gatsby';
import Icon from '@mdi/react';
import { mdiMenu, mdiClose } from '@mdi/js';

const Navbar = () => {
  // state for mobile navigation
  const [open, setOpen] = useState(false);

  // open and close mobile nav
  const handleOpen = e => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <header className="w-full">
      <div className="container flex flex-wrap items-center justify-between mx-auto px-6 py-3 lg:px-0 lg:py-4">
        <Link to="/" className="flex items-center px-3 py-2 bg-dark-primary">
          <span className="text-light-primary font-display font-bold leading-none">
            AM
          </span>
        </Link>
        <button onClick={handleOpen} className="focus:outline-none lg:hidden">
          {open ? (
            <Icon path={mdiClose} size={1.2} className="text-dark-primary" />
          ) : (
            <Icon path={mdiMenu} size={1.2} className="text-dark-primary" />
          )}
        </button>
        <nav
          id="navigation"
          className={`${
            open ? 'w-full flex flex-col flex-grow' : 'hidden'
          } mt-5 lg:mt-0 lg:flex lg:flex-row lg:items-center lg:w-auto lg:flex-grow-0 text-dark-primary`}
        >
          <Link
            to="/"
            className="lg:hover:text-dark-primary lg:hover:bg-transparent lg:hover:border-dark-primary px-3 py-2 hover:text-light-primary font-bold hover:bg-dark-primary transition-colors duration-300 ease-in-out lg:mb-0 lg:px-2 lg:py-1 lg:border-2 lg:border-transparent"
            activeClassName="text-light-primary lg:text-dark-primary bg-dark-primary lg:bg-transparent lg:border-2 lg:border-dark-primary active-border"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="lg:hover:text-dark-primary lg:hover:bg-transparent lg:hover:border-dark-primary px-3 py-2 hover:text-light-primary font-bold hover:bg-dark-primary transition-colors duration-300 ease-in-out lg:mb-0 lg:px-2 lg:py-1 lg:border-2 lg:border-transparent"
            activeClassName="text-light-primary lg:text-dark-primary bg-dark-primary lg:bg-transparent lg:border-2 lg:border-dark-primary active-border"
          >
            About
          </Link>
          <Link
            to="/blog"
            className="lg:hover:text-dark-primary lg:hover:bg-transparent lg:hover:border-dark-primary px-3 py-2 hover:text-light-primary font-bold hover:bg-dark-primary transition-colors duration-300 ease-in-out lg:mb-0 lg:px-2 lg:py-1 lg:border-2 lg:border-transparent"
            activeClassName="text-light-primary lg:text-dark-primary bg-dark-primary lg:bg-transparent lg:border-2 lg:border-dark-primary active-border"
          >
            Blog
          </Link>
          <Link
            to="/portfolio"
            className="lg:hover:text-dark-primary lg:hover:bg-transparent lg:hover:border-dark-primary px-3 py-2 hover:text-light-primary font-bold hover:bg-dark-primary transition-colors duration-300 ease-in-out lg:mb-0 lg:px-2 lg:py-1 lg:border-2 lg:border-transparent"
            activeClassName="text-light-primary lg:text-dark-primary bg-dark-primary lg:bg-transparent lg:border-2 lg:border-dark-primary active-border"
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            className="lg:hover:text-dark-primary lg:hover:bg-transparent lg:hover:border-dark-primary px-3 py-2 hover:text-light-primary font-bold hover:bg-dark-primary transition-colors duration-300 ease-in-out lg:mb-0 lg:px-2 lg:py-1 lg:border-2 lg:border-transparent"
            activeClassName="text-light-primary lg:text-dark-primary bg-dark-primary lg:bg-transparent lg:border-2 lg:border-dark-primary active-border"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
