import { Tab } from '@headlessui/react';

import { ExperienceListItem } from '@atoms';

const ExperiencePanel = ({}: ExperiencePanelProps) => {
  return (
    <Tab.Panel as="section" className="rounded-lg border border-raisin-black bg-eerie-black p-4">
      <h2 className="font-display text-3xl font-extrabold text-white">Experience</h2>
      <ul className="space- mt-4 w-full">
        <ExperienceListItem
          position="Front-end Developer"
          company="Never8"
          startDate="Mar, 2022"
          endDate="Present"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eveniet hic nobis eaque ullam magni placeat ipsam numquam alias fugiat!"
        />
        <ExperienceListItem
          position="Front-end Developer"
          company="Never8"
          startDate="Mar, 2022"
          endDate="Present"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eveniet hic nobis eaque ullam magni placeat ipsam numquam alias fugiat!"
        />
      </ul>
    </Tab.Panel>
  );
};

type ExperiencePanelProps = {};

export default ExperiencePanel;
