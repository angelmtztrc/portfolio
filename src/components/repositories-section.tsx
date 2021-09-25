import { Tab } from '@headlessui/react';

export const RepositoriesSection = ({}: RepositoriesSectionProps) => {
  return (
    <Tab.Panel as="section">
      <p className="text-white">Repositories section</p>
    </Tab.Panel>
  );
};

type RepositoriesSectionProps = {};
