import { Tab } from '@headlessui/react';

import { SectionDescription } from '@atoms';

const Blog = ({}: BlogProps) => {
  return (
    <Tab.Panel as="section" className="mt-8">
      <SectionDescription
        title="Blog"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore consectetur accusamus veritatis voluptatem blanditiis minima rem ex vel neque asperiores."
      />
    </Tab.Panel>
  );
};

type BlogProps = {};

export default Blog;
