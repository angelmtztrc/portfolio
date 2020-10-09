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
      <div className="px-6 lg:px-0 py-4 lg:py-6 container mx-auto flex flex-wrap justify-between items-center">
        <Link
          to="/"
          className="px-3 py-2 flex items-center bg-dark-primary dark:bg-light-primary shadow-md"
        >
          <span className="text-light-primary dark:text-dark-primary font-bold font-display leading-none">
            AM
          </span>
        </Link>
        <button onClick={handleOpen} className="lg:hidden focus:outline-none">
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
            className="px-3 lg:px-0 py-2 lg:py-0 mb-3 lg:mb-0 font-bold hover:text-light-primary lg:hover:text-dark-primary hover:bg-dark-primary lg:hover:bg-transparent lg:border-b-2 lg:border-transparent transition-colors ease-in-out duration-300"
            activeClassName="text-light-primary lg:text-dark-primary bg-dark-primary lg:bg-transparent lg:border-b-2 lg:border-dark-primary active-border"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="px-3 lg:px-0 py-2 lg:py-0 mb-3 lg:mb-0 font-bold hover:text-light-primary lg:hover:text-dark-primary hover:bg-dark-primary lg:hover:bg-transparent lg:border-b-2 lg:border-transparent transition-colors ease-in-out duration-300"
            activeClassName="text-light-primary lg:text-dark-primary bg-dark-primary lg:bg-transparent lg:border-b-2 lg:border-dark-primary active-border"
          >
            About
          </Link>
          <Link
            to="/blog"
            className="px-3 lg:px-0 py-2 lg:py-0 mb-3 lg:mb-0 font-bold hover:text-light-primary lg:hover:text-dark-primary hover:bg-dark-primary lg:hover:bg-transparent lg:border-b-2 lg:border-transparent transition-colors ease-in-out duration-300"
            activeClassName="text-light-primary lg:text-dark-primary bg-dark-primary lg:bg-transparent lg:border-b-2 lg:border-dark-primary active-border"
          >
            Blog
          </Link>
          <Link
            to="/portfolio"
            className="px-3 lg:px-0 py-2 lg:py-0 mb-3 lg:mb-0 font-bold hover:text-light-primary lg:hover:text-dark-primary hover:bg-dark-primary lg:hover:bg-transparent lg:border-b-2 lg:border-transparent transition-colors ease-in-out duration-300"
            activeClassName="text-light-primary lg:text-dark-primary bg-dark-primary lg:bg-transparent lg:border-b-2 lg:border-dark-primary active-border"
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            className="px-3 lg:px-0 py-2 lg:py-0 mb-3 lg:mb-0 font-bold hover:text-light-primary lg:hover:text-dark-primary hover:bg-dark-primary lg:hover:bg-transparent lg:border-b-2 lg:border-transparent transition-colors ease-in-out duration-300"
            activeClassName="text-light-primary lg:text-dark-primary bg-dark-primary lg:bg-transparent lg:border-b-2 lg:border-dark-primary active-border"
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
                  className="text-dark-primary inline-block"
                />
                <p className="ml-2 lg:hidden">Dark Mode</p>
              </div>
            ) : (
              <div className="flex items-center">
                <Icon
                  path={mdiWhiteBalanceSunny}
                  size={1}
                  className="text-light-primary inline-block"
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
