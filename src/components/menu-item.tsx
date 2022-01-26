import { Fragment } from 'react';
import { Tab } from '@headlessui/react';

export const MenuItem = ({ title }: MenuItemProps) => {
  return (
    <Tab
      as={'li'}
      className="relative flex flex-1 cursor-pointer select-none flex-col items-center rounded px-8  py-2 transition-colors duration-300 ease-in hover:bg-raisin-black"
    >
      {({ selected }) => (
        <Fragment>
          <span
            className={`
            ${selected ? 'text-white' : 'text-cadet-grey'} font-body font-medium
          `}
          >
            {title}
          </span>
          <span
            className={`${
              selected ? 'bg-medium-state-blue' : 'bg-transparent'
            } absolute bottom-0 mt-1 inline-block h-1 w-10 rounded-full`}
          />
        </Fragment>
      )}
    </Tab>
  );
};

type MenuItemProps = {
  title: string;
};
