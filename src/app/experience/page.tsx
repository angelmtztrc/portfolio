import { use } from 'react';
import { BriefcaseIcon } from '@heroicons/react/24/solid';

import { PageHeading } from '@atoms';

import { ExperiencesService } from '@services';

const fetcher = async () => {
  const data = await ExperiencesService.findExperiences();

  return data.allExperiences;
};

const ExperiencePage = () => {
  const data = use(fetcher());

  return (
    <section className="rounded-lg border border-dark-900 bg-darken-900 p-5">
      <PageHeading title="Experience" icon={<BriefcaseIcon />} />
      {/* TODO: MAKE THIS A COMPONENT */}
      <ul className="mt-6">
        {/* SORT BY DATE */}
        {data.map(experience => (
          <li
            key={experience.id}
            className="relative rounded-t border-l-4 border-primary-500 pl-6 pb-8"
          >
            <span className="absolute top-0 -left-[10px] h-4 w-4 rounded-full bg-primary-500" />
            <div className="relative">
              <p className="font-body text-xs font-light uppercase text-gray-900">
                March, 2022 - Present
              </p>
            </div>
            <div className="mt-2">
              <h2 className="font-display font-bold text-white">
                {experience.title} @ {experience.company}
              </h2>
              <p className="mt-1 w-3/4 font-body font-light text-greyish-800">
                {experience.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ExperiencePage;
