import { Tab } from '@headlessui/react';

import { SectionDescription } from '@atoms';

const Repositories = ({}: RepositoriesProps) => {
  return (
    <Tab.Panel as="section" className="mt-8">
      <SectionDescription
        title="Repositories"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore consectetur accusamus veritatis voluptatem blanditiis minima rem ex vel neque asperiores."
      />
    </Tab.Panel>
  );
};

type RepositoriesProps = {};

export default Repositories;
