import { Tab } from '@headlessui/react';

// interfaces
import { Repository } from 'interfaces/repository.interface';

// components
import { RepositoryCard } from './repository-card';

export const RepositoriesSection = ({
  repositories = []
}: RepositoriesSectionProps) => {
  return (
    <Tab.Panel as="section">
      <div className="flex flex-col items-center justify-center mb-6">
        <h2 className="mb-4 text-white font-display text-3xl font-bold capitalize">
          Repositories
        </h2>
        <p className="w-full text-center text-cadet-grey font-body font-light md:w-1/2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id vitae
          quasi fuga possimus ab voluptas illo odit totam eaque sint!
        </p>
      </div>

      <div className="grid gap-6 grid-cols-2">
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
