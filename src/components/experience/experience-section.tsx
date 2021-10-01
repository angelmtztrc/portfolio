import { Tab } from '@headlessui/react';

export const ExperienceSection = ({}: ExperienceSectionProps) => {
  return (
    <Tab.Panel as="section">
      <div className="flex flex-col items-center justify-center py-16">
        <h2 className="text-white font-display text-3xl font-bold capitalize">
          Work In Progress
        </h2>
        <p className="mt-10 w-1/2 text-center text-cadet-grey font-body font-light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id vitae
          quasi fuga possimus ab voluptas illo odit totam eaque sint!
        </p>
      </div>
    </Tab.Panel>
  );
};

type ExperienceSectionProps = {};
