import { Tab } from '@headlessui/react';

import { EducationListItem } from '@atoms';

const EducationPanel = ({}: EducationPanelProps) => {
  return (
    <Tab.Panel as="section" className="rounded-lg border border-raisin-black bg-eerie-black p-4">
      <h2 className="font-display text-3xl font-extrabold text-white">Education</h2>
      <ul className="mt-4">
        <EducationListItem
          career="Software Engineer"
          university="UANE"
          startDate="Jan, 2022"
          endDate="Present"
        />
        <EducationListItem
          career="Software Engineer"
          university="UANE"
          startDate="Jan, 2022"
          endDate="Present"
        />
        <EducationListItem
          career="Software Engineer"
          university="UANE"
          startDate="Jan, 2022"
          endDate="Present"
        />
      </ul>
      <section className="mt-6">
        <h3 className="font-display text-xl font-extrabold text-white">Certifications</h3>
        <ul></ul>
      </section>
    </Tab.Panel>
  );
};

type EducationPanelProps = {};

export default EducationPanel;
