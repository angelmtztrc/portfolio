import { Tab } from '@headlessui/react';

// interfaces
import { Experience } from 'interfaces/experience.interface';

// components
import { TimelineItem } from 'components/timeline-item';

export const ExperienceSection = ({ experiences }: ExperienceSectionProps) => {
  return (
    <Tab.Panel as="section" className="focus-visible:outline-none">
      <div className="flex flex-col items-center justify-center mb-6">
        <h2 className="mb-4 text-white font-display text-3xl font-bold capitalize">
          Experience
        </h2>
        <p className="w-full text-center text-cadet-grey font-body font-light md:w-1/2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id vitae
          quasi fuga possimus ab voluptas illo odit totam eaque sint!
        </p>
      </div>

      <ul>
        {experiences
          .sort(
            (left, right) =>
              new Date(right.from).getTime() - new Date(left.from).getTime()
          )
          .map(({ id, title, from, to, company, description }) => (
            <TimelineItem
              key={id}
              from={from}
              to={to}
              position={title}
              company={company.name}
              description={description}
            />
          ))}
      </ul>
    </Tab.Panel>
  );
};

type ExperienceSectionProps = {
  experiences: Experience[];
};
