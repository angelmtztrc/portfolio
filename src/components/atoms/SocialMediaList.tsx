import React from 'react';
import { GitHub, Linkedin, Twitter } from 'react-feather';

const SOCIAL_MEDIA = [
  { name: 'GitHub', icon: GitHub },
  { name: 'Twitter', icon: Twitter },
  { name: 'LinkedIn', icon: Linkedin }
];

const SocialMediaList = () => {
  return (
    <ul className="flex items-center space-x-6">
      {SOCIAL_MEDIA.map(({ name, icon: Icon }) => {
        return (
          <li key={name} className="flex space-x-3 items-center mt-4">
            <Icon className="h-6 w-6 text-content-dark" />
            <p className="text-content-dark font-body text-lg font-semibold leading-8">
              {name}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialMediaList;
