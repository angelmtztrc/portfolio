import Image from 'next/image';
import { Tab } from '@headlessui/react';

// interfaces
import { Repository } from 'interfaces/repository.interface';

export const RepositoriesSection = ({
  repositories = []
}: RepositoriesSectionProps) => {
  return (
    <Tab.Panel as="section">
      {/* Title and description here */}

      <div className="grid gap-6 grid-cols-2">
        {repositories.map(
          ({
            id,
            picture: { url, alt },
            category: { name },
            title,
            description
          }) => (
            <article key={id} className="col-span-2 lg:col-span-1">
              <div className="border-2 border-raisin-black rounded overflow-hidden">
                <div className="relative w-full h-56">
                  <Image
                    src={url}
                    placeholder="blur"
                    blurDataURL={url}
                    layout="fill"
                    objectFit="cover"
                    alt={alt}
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-medium-state-blue font-body text-xs font-semibold tracking-widest uppercase">
                    {name}
                  </h3>
                  <h2 className="mb-4 text-white font-display text-lg font-medium">
                    {title}
                  </h2>
                  <p className="text-cadet-grey font-body text-base font-light leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            </article>
          )
        )}
      </div>
    </Tab.Panel>
  );
};

type RepositoriesSectionProps = {
  repositories: Repository[];
};
