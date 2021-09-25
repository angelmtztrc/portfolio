import { Tab } from '@headlessui/react';

export const RepositoriesSection = ({}: RepositoriesSectionProps) => {
  return (
    <Tab.Panel as="section">
      {/* Title and description here */}

      <div className="grid gap-6 grid-cols-2">
        <article className="col-span-2 lg:col-span-1">
          <div className="p-6 bg-raisin-black bg-opacity-50 rounded">
            <img
              className="mb-6 w-full h-48 object-cover object-center"
              src="https://dummyimage.com/720x400"
              alt="content"
            />
            <h3 className="text-medium-state-blue font-body text-xs font-semibold tracking-widest uppercase">
              TypeScript
            </h3>
            <h2 className="font-display mb-4 text-white text-lg font-medium">
              Recipes Network
            </h2>
            <p className="text-cadet-grey font-body text-base font-light leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perferendis sequi voluptate est voluptates nisi natus beatae.
              Corporis numquam natus deserunt.
            </p>
          </div>
        </article>
        <article className="col-span-2 lg:col-span-1">
          <div className="p-6 bg-raisin-black bg-opacity-50 rounded">
            <img
              className="mb-6 w-full h-48 rounded object-cover object-center"
              src="https://dummyimage.com/720x400"
              alt="content"
            />
            <h3 className="text-medium-state-blue font-body text-xs font-semibold tracking-widest uppercase">
              TypeScript
            </h3>
            <h2 className="font-display mb-4 text-white text-lg font-medium">
              Simple Blog - Next.js
            </h2>
            <p className="text-cadet-grey font-body text-base font-light leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perferendis sequi voluptate est voluptates nisi natus beatae.
              Corporis numquam natus deserunt.
            </p>
          </div>
        </article>
        <article className="col-span-2 lg:col-span-1">
          <div className="p-6 bg-raisin-black bg-opacity-50 rounded">
            <img
              className="mb-6 w-full h-48 rounded object-cover object-center"
              src="https://dummyimage.com/720x400"
              alt="content"
            />
            <h3 className="text-medium-state-blue font-body text-xs font-semibold tracking-widest uppercase">
              TypeScript
            </h3>
            <h2 className="font-display mb-4 text-white text-lg font-medium">
              Sigram Project
            </h2>
            <p className="text-cadet-grey font-body text-base font-light leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perferendis sequi voluptate est voluptates nisi natus beatae.
              Corporis numquam natus deserunt.
            </p>
          </div>
        </article>
      </div>
    </Tab.Panel>
  );
};

type RepositoriesSectionProps = {};
