import { Tab } from '@headlessui/react';

// interfaces
import { Experience } from 'interfaces/experience.interface';

// components
import { TimelineItem } from 'components/timeline-item';

// libs
import { sortByDate } from 'libs/sort-by-date';

export const ExperienceSection = ({ experiences }: ExperienceSectionProps) => {
  return (
    <Tab.Panel as="section" className="focus-visible:outline-none">
      <div className="mb-6 flex flex-col items-center justify-center">
        <h2 className="mb-4 font-display text-3xl font-bold capitalize text-white">
          Experience
        </h2>
        <p className="w-full text-center font-body font-light text-cadet-grey md:w-1/2">
          Here are the most remarkable positions I&apos;ve been in throughout my
          professional career as a Software Developer.
        </p>
      </div>

      <ul>
        {experiences
          .sort((left, right) => sortByDate(right.from, left.from))
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
