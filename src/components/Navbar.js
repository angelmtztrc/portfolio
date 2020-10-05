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
      <div className="container mx-auto px-6 lg:px-0 py-4 lg:py-6 flex flex-wrap justify-between items-center">
        <Link
          to="/"
          className="p-4 bg-dark-100 hover:bg-dark-200 dark:shadow-md flex items-center transition-colors ease-in-out duration-300"
        >
          <span className="text-light-100 font-display leading-none">AM</span>
        </Link>
        <button onClick={handleOpen} className="lg:hidden focus:outline-none">
          {open ? (
            <Icon
              path={mdiClose}
              size={1.2}
              className="text-dark-100 dark:text-light-200"
            />
          ) : (
            <Icon
              path={mdiMenu}
              size={1.2}
              className="text-dark-100 dark:text-light-200"
            />
          )}
        </button>
        <nav
          id="navigation"
          className={`${
            open ? 'w-full flex flex-col flex-grow' : 'hidden'
          } mt-5 lg:mt-0 lg:flex lg:flex-row lg:items-center lg:w-auto lg:flex-grow-0 text-dark-100 dark:text-light-200`}
        >
          <Link
            to="/"
            className="px-3 lg:px-0 py-2 lg:py-0 mb-3 lg:mb-0 hover:text-light-100 lg:hover:text-dark-100 font-bold hover:bg-dark-100 lg:hover:bg-transparent lg:border-b-2 lg:border-transparent lg:hover:border-dark-100 transition-colors ease-in-out duration-300"
            activeClassName="text-light-100 lg:text-dark-100 bg-dark-100 lg:bg-transparent lg:border-b-2 lg:border-dark-100 active-border"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="px-3 lg:px-0 py-2 lg:py-0 mb-3 lg:mb-0 hover:text-light-100 lg:hover:text-dark-100 font-bold hover:bg-dark-100 lg:hover:bg-transparent lg:border-b-2 lg:border-transparent lg:hover:border-dark-100 transition-colors ease-in-out duration-300"
            activeClassName="text-light-100 lg:text-dark-100 bg-dark-100 lg:bg-transparent lg:border-b-2 lg:border-dark-100 active-border"
          >
            About
          </Link>
          <Link
            to="/blog"
            className="px-3 lg:px-0 py-2 lg:py-0 mb-3 lg:mb-0 hover:text-light-100 lg:hover:text-dark-100 font-bold hover:bg-dark-100 lg:hover:bg-transparent lg:border-b-2 lg:border-transparent lg:hover:border-dark-100 transition-colors ease-in-out duration-300"
            activeClassName="text-light-100 lg:text-dark-100 bg-dark-100 lg:bg-transparent lg:border-b-2 lg:border-dark-100 active-border"
          >
            Blog
          </Link>
          <Link
            to="/portfolio"
            className="px-3 lg:px-0 py-2 lg:py-0 mb-3 lg:mb-0 hover:text-light-100 lg:hover:text-dark-100 font-bold hover:bg-dark-100 lg:hover:bg-transparent lg:border-b-2 lg:border-transparent lg:hover:border-dark-100 transition-colors ease-in-out duration-300"
            activeClassName="text-light-100 lg:text-dark-100 bg-dark-100 lg:bg-transparent lg:border-b-2 lg:border-dark-100 active-border"
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            className="px-3 lg:px-0 py-2 lg:py-0 mb-3 lg:mb-0 hover:text-light-100 lg:hover:text-dark-100 font-bold hover:bg-dark-100 lg:hover:bg-transparent lg:border-b-2 lg:border-transparent lg:hover:border-dark-100 transition-colors ease-in-out duration-300"
            activeClassName="text-light-100 lg:text-dark-100 bg-dark-100 lg:bg-transparent lg:border-b-2 lg:border-dark-100 active-border"
          >
            Contact
          </Link>
          <button
            className="px-3 lg:px-0 py-2 lg:py-0 focus:outline-none"
            onClick={handleTheme}
          >
            {theme === 'light' ? (
              <div className="flex items-center">
                <Icon
                  path={mdiWeatherNight}
                  size={1}
                  className="text-dark-100 inline-block"
                />
                <p className="ml-2 lg:hidden">Dark Mode</p>
              </div>
            ) : (
              <div className="flex items-center">
                <Icon
                  path={mdiWhiteBalanceSunny}
                  size={1}
                  className="text-light-200 inline-block"
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
