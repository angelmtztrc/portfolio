import { Tab } from '@headlessui/react';

const BlogPanel = ({}: BlogPanelProps) => {
  return (
    <Tab.Panel as="section" className="rounded-lg border border-raisin-black bg-eerie-black p-4">
      <h2 className="font-display text-3xl font-extrabold text-white">Blog</h2>
    </Tab.Panel>
  );
};

interface BlogPanelProps {}

export default BlogPanel;
