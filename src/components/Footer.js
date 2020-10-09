import React from 'react';
import Icon from '@mdi/react';
import { mdiGithub, mdiTwitter, mdiDevTo, mdiEmail } from '@mdi/js';

const Footer = () => {
  return (
    <footer className="py-4 lg:py-6 container mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <p className="text-sm lg:text-base text-dark-primary dark:text-light-primary font-display font-semibold">
          Angel Martinez © All right reserved 2020
        </p>
        <ul className="mt-5 lg:mt-0 flex items-center">
          <li className="mr-4">
            <Icon
              path={mdiEmail}
              size={1.2}
              className="text-dark-primary dark:text-light-primary"
            />
          </li>
          <li className="mr-4">
            <Icon
              path={mdiGithub}
              size={1.2}
              className="text-dark-primary dark:text-light-primary"
            />
          </li>
          <li className="mr-4">
            <Icon
              path={mdiTwitter}
              size={1.2}
              className="text-dark-primary dark:text-light-primary"
            />
          </li>
          <li>
            <Icon
              path={mdiDevTo}
              size={1.2}
              className="text-dark-primary dark:text-light-primary"
            />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
