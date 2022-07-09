import { Fragment } from 'react';
import { Tab } from '@headlessui/react';
import cls from 'classnames';

const MenuItem = ({ title }: MenuItemProps) => {
  return (
    <Tab
      as="li"
      className={({ selected }) =>
        cls(
          selected ? 'border-indigo-500' : 'bg-transparent',
          'transition-all duration-300 ease-in  focus:border-indigo-500 focus:outline-none',
          'group relative flex flex-1 cursor-pointer flex-col items-center border border-transparent px-4 py-2 focus:outline-none'
        )
      }
    >
      {({ selected }) => (
        <Fragment>
          <span
            className={cls(
              selected ? 'text-slate-50' : 'text-cadet-grey',
              'text-center font-display text-sm uppercase transition-colors duration-300 ease-in'
            )}
          >
            {title}
          </span>

          <span
            className={cls(
              selected ? 'bg-indigo-500' : 'bg-transparent',
              'absolute bottom-0 -mb-0.5 inline-block h-1 w-10  transition-colors duration-300 ease-in group-hover:bg-indigo-500 '
            )}
          />
        </Fragment>
      )}
    </Tab>
  );
};

type MenuItemProps = {
  title: string;
};

export default MenuItem;
