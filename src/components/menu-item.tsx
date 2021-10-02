import { Fragment } from 'react';
import { Tab } from '@headlessui/react';

export const MenuItem = ({ title }: MenuItemProps) => {
  return (
    <Tab
      as={'li'}
      className="relative flex flex-1 flex-col items-center px-8 py-2 hover:bg-raisin-black rounded cursor-pointer select-none transition-colors duration-300 ease-in"
    >
      {({ selected }) => (
        <Fragment>
          <span
            className={`
            ${selected ? 'text-white' : 'text-cadet-grey'} font-medium font-body
          `}
          >
            {title}
          </span>
          <span
            className={`${
              selected ? 'bg-medium-state-blue' : 'bg-transparent'
            } absolute bottom-0 inline-block mt-1 w-10 h-1 rounded-full`}
          />
        </Fragment>
      )}
    </Tab>
  );
};

type MenuItemProps = {
  title: string;
};
