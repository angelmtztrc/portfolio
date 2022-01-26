import { Tab } from '@headlessui/react';

// interfaces
import { Repository } from 'interfaces/repository.interface';

// components
import { RepositoryCard } from './repository-card';

export const RepositoriesSection = ({
  repositories = []
}: RepositoriesSectionProps) => {
  return (
    <Tab.Panel as="section" className="focus-visible:outline-none">
      <div className="mb-6 flex flex-col items-center justify-center">
        <h2 className="mb-4 font-display text-3xl font-bold capitalize text-white">
          Repositories
        </h2>
        <p className="w-full text-center font-body font-light text-cadet-grey md:w-1/2">
          This website is a clear demonstration of my skills, but maybe is not
          enough, so here are some of the best projects that I&apos;ve made
          through my learning.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {repositories.map(repository => (
          <RepositoryCard key={repository.id} repository={repository} />
        ))}
      </div>
    </Tab.Panel>
  );
};

type RepositoriesSectionProps = {
  repositories: Repository[];
};
