import { Tab } from '@headlessui/react';

export const ExperienceSection = ({}: ExperienceSectionProps) => {
  return (
    <Tab.Panel as="section">
      <p className="text-white">Experience section</p>
    </Tab.Panel>
  );
};

type ExperienceSectionProps = {};
