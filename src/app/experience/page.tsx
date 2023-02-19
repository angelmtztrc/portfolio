import { use } from 'react';
import { BriefcaseIcon } from '@heroicons/react/24/solid';

import { PageHeading } from '@atoms';

import { ExperiencesService } from '@services';
import { formattedDate } from '@utils/day.util';
import { SectionLayout } from '@layouts';

const fetcher = async () => {
  const data = await ExperiencesService.find();

  return data.allExperiences;
};

const ExperiencePage = () => {
  const data = use(fetcher());

  return (
    <SectionLayout className="p-5">
      <PageHeading title="Experience" icon={<BriefcaseIcon />} />
      <ul className="mt-6">
        {data.map(experience => (
          <li
            key={experience.id}
            className="relative rounded-t border-l-4 border-primary-500 pl-6 pb-8"
          >
            <span className="absolute top-0 -left-[10px] h-4 w-4 rounded-full bg-primary-500" />
            <div className="relative">
              <p className="font-display text-xs font-bold uppercase text-darken-700">
                {formattedDate(experience.from)} -{' '}
                {experience.to ? formattedDate(experience.to) : 'Present'}
              </p>
            </div>
            <div className="mt-2">
              <h2 className="font-display font-bold text-white">
                {experience.title} @ {experience.company}
              </h2>
              <p className="mt-1 font-body font-light text-greyish-800 lg:w-3/4">
                {experience.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </SectionLayout>
  );
};

export default ExperiencePage;
