import { Fragment } from 'react';
import { Tab } from '@headlessui/react';
import cls from 'classnames';

import { Button } from '@atoms';

const ITEMS = ['projects', 'blog', 'experience', 'education', 'contact'];

const Menu = ({}: MenuProps) => {
  return (
    <Tab.List
      as="nav"
      className="space-x-2 rounded-lg border border-raisin-black bg-eerie-black p-4"
    >
      {ITEMS.map(item => (
        <Tab key={item} as={Fragment}>
          {({ selected }) => (
            <Button
              className={cls(
                selected
                  ? 'bg-indigo-500 text-white'
                  : 'bg-eerie-black text-cadet-grey hover:bg-raisin-black hover:text-white'
              )}
            >
              {item}
            </Button>
          )}
        </Tab>
      ))}
    </Tab.List>
  );
};

type MenuProps = {};

export default Menu;
