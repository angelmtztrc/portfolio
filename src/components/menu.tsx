import { Tab } from '@headlessui/react';
export const Menu = () => {
  return (
    <div className="container mt-8">
      <Tab.List as="ul" className="flex flex-nowrap w-full overflow-x-auto">
        <Tab>Repositories</Tab>
      </Tab.List>
    </div>
  );
};
