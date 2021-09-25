import { Tab } from '@headlessui/react';

export const EducationSection = ({}: EducationSectionProps) => {
  return (
    <Tab.Panel as="section">
      <p className="text-white">Education section</p>
    </Tab.Panel>
  );
};

type EducationSectionProps = {};
