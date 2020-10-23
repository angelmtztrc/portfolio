import React from 'react';
import Icon from '@mdi/react';
import { mdiGithub, mdiTwitter, mdiDevTo, mdiEmail } from '@mdi/js';

const Footer = () => {
  return (
    <footer className="container mx-auto py-4 lg:py-6">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <p className="text-dark-primary font-display text-sm font-semibold lg:text-base">
          Angel Martinez © All right reserved 2020
        </p>
        <ul className="flex items-center mt-5 lg:mt-0">
          <li className="mr-4">
            <Icon path={mdiEmail} size={1.2} className="text-dark-primary" />
          </li>
          <li className="mr-4">
            <Icon path={mdiGithub} size={1.2} className="text-dark-primary" />
          </li>
          <li className="mr-4">
            <Icon path={mdiTwitter} size={1.2} className="text-dark-primary" />
          </li>
          <li>
            <Icon path={mdiDevTo} size={1.2} className="text-dark-primary" />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
