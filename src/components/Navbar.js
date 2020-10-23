import React, { useState } from 'react';
import { Link } from 'gatsby';
import Icon from '@mdi/react';
import {
  mdiMenu,
  mdiClose,
  mdiWhiteBalanceSunny,
  mdiWeatherNight
} from '@mdi/js';

const Navbar = ({ theme, setTheme }) => {
  const [open, setOpen] = useState(false);

  // Open and close mobile nav
  const handleOpen = e => {
    open ? setOpen(false) : setOpen(true);
  };

  // Dark/Light Mode
  const handleTheme = e => {
    if (theme === 'dark') {
      // Turn off dark theme
      localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      // Turn on dark theme
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  };

  return (
    <header className="w-full">
      <div className="container flex flex-wrap items-center justify-between mx-auto px-6 py-4 lg:px-0 lg:py-6">
        <Link
          to="/"
          className="flex items-center px-3 py-2 bg-dark-primary dark:bg-light-primary shadow-md"
        >
          <span className="dark:text-dark-primary text-light-primary font-display font-bold leading-none">
            AM
          </span>
        </Link>
        <button onClick={handleOpen} className="focus:outline-none lg:hidden">
          {open ? (
            <Icon
              path={mdiClose}
              size={1.2}
              className="text-dark-primary dark:text-light-primary"
            />
          ) : (
            <Icon
              path={mdiMenu}
              size={1.2}
              className="text-dark-primary dark:text-light-primary"
            />
          )}
        </button>
        <nav
          id="navigation"
          className={`${
            open ? 'w-full flex flex-col flex-grow' : 'hidden'
          } mt-5 lg:mt-0 lg:flex lg:flex-row lg:items-center lg:w-auto lg:flex-grow-0 text-dark-primary dark:text-light-primary`}
        >
          <Link
            to="/"
            className="lg:hover:text-dark-primary lg:hover:bg-transparent mb-3 px-3 py-2 hover:text-light-primary font-bold hover:bg-dark-primary transition-colors duration-300 ease-in-out lg:mb-0 lg:px-0 lg:py-0 lg:border-b-2 lg:border-transparent"
            activeClassName="text-light-primary lg:text-dark-primary bg-dark-primary lg:bg-transparent lg:border-b-2 lg:border-dark-primary active-border"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="lg:hover:text-dark-primary lg:hover:bg-transparent mb-3 px-3 py-2 hover:text-light-primary font-bold hover:bg-dark-primary transition-colors duration-300 ease-in-out lg:mb-0 lg:px-0 lg:py-0 lg:border-b-2 lg:border-transparent"
            activeClassName="text-light-primary lg:text-dark-primary bg-dark-primary lg:bg-transparent lg:border-b-2 lg:border-dark-primary active-border"
          >
            About
          </Link>
          <Link
            to="/blog"
            className="lg:hover:text-dark-primary lg:hover:bg-transparent mb-3 px-3 py-2 hover:text-light-primary font-bold hover:bg-dark-primary transition-colors duration-300 ease-in-out lg:mb-0 lg:px-0 lg:py-0 lg:border-b-2 lg:border-transparent"
            activeClassName="text-light-primary lg:text-dark-primary bg-dark-primary lg:bg-transparent lg:border-b-2 lg:border-dark-primary active-border"
          >
            Blog
          </Link>
          <Link
            to="/portfolio"
            className="lg:hover:text-dark-primary lg:hover:bg-transparent mb-3 px-3 py-2 hover:text-light-primary font-bold hover:bg-dark-primary transition-colors duration-300 ease-in-out lg:mb-0 lg:px-0 lg:py-0 lg:border-b-2 lg:border-transparent"
            activeClassName="text-light-primary lg:text-dark-primary bg-dark-primary lg:bg-transparent lg:border-b-2 lg:border-dark-primary active-border"
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            className="lg:hover:text-dark-primary lg:hover:bg-transparent mb-3 px-3 py-2 hover:text-light-primary font-bold hover:bg-dark-primary transition-colors duration-300 ease-in-out lg:mb-0 lg:px-0 lg:py-0 lg:border-b-2 lg:border-transparent"
            activeClassName="text-light-primary lg:text-dark-primary bg-dark-primary lg:bg-transparent lg:border-b-2 lg:border-dark-primary active-border"
          >
            Contact
          </Link>
          <button
            className="px-3 py-2 focus:outline-none lg:px-0 lg:py-0"
            onClick={handleTheme}
          >
            {theme === 'light' ? (
              <div className="flex items-center">
                <Icon
                  path={mdiWeatherNight}
                  size={1}
                  className="inline-block text-dark-primary"
                />
                <p className="ml-2 lg:hidden">Dark Mode</p>
              </div>
            ) : (
              <div className="flex items-center">
                <Icon
                  path={mdiWhiteBalanceSunny}
                  size={1}
                  className="inline-block text-light-primary"
                />
                <p className="ml-2 lg:hidden">Light Mode</p>
              </div>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
