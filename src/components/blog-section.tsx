import { Tab } from '@headlessui/react';

export const BlogSection = ({}: BlogSectionProps) => {
  return (
    <Tab.Panel as="section">
      <p className="text-white">Blog section</p>
    </Tab.Panel>
  );
};

type BlogSectionProps = {};
