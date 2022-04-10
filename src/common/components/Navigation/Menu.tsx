import { Tab } from '@headlessui/react';
import MenuItem from './MenuItem';

const Menu = ({}: MenuProps) => {
  return (
    <div className="container mt-8 hidden md:block">
      <ul className="flex w-full flex-nowrap overflow-x-auto pb-4">
        <MenuItem title="repositories" />
        <MenuItem title="blog" />
        <MenuItem title="experience" />
        <MenuItem title="education" />
        <MenuItem title="contact" />
      </ul>
    </div>
  );
};

type MenuProps = {};

export default Menu;
