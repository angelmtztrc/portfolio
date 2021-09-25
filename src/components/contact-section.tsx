import { Tab } from '@headlessui/react';

export const ContactSection = ({}: ContactSectionProps) => {
  return (
    <Tab.Panel as="section">
      <p className="text-white">Contact section</p>
    </Tab.Panel>
  );
};

type ContactSectionProps = {};
