import React from 'react';
import Icon from '@mdi/react';
import { mdiGithub, mdiTwitter, mdiDevTo, mdiEmail } from '@mdi/js';

const Footer = () => {
  return (
    <footer className="container mx-auto py-4 lg:py-6">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <p className="text-sm lg:text-base text-dark font-display font-semibold">
          Angel Martinez © All right reserved 2020
        </p>
        <ul className="mt-5 lg:mt-0 flex items-center">
          <li className="mr-4">
            <Icon path={mdiEmail} size={1.2} color={'#1f1f1f'} />
          </li>
          <li className="mr-4">
            <Icon path={mdiGithub} size={1.2} color={'#1f1f1f'} />
          </li>
          <li className="mr-4">
            <Icon path={mdiTwitter} size={1.2} color={'#1f1f1f'} />
          </li>
          <li>
            <Icon path={mdiDevTo} size={1.2} color={'#1f1f1f'} />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
