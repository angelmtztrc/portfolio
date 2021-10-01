import { Tab } from '@headlessui/react';
import { ArrowRight } from 'react-feather';

export const BlogSection = ({}: BlogSectionProps) => {
  return (
    <Tab.Panel as="section">
      {/* Title and description here */}

      <div className="grid gap-6 grid-cols-4 xl:grid-cols-3">
        <article className="col-span-4 md:col-span-2 xl:col-span-1">
          <div className="border-2 border-raisin-black rounded overflow-hidden">
            <img
              className="w-full object-cover object-center md:h-36 lg:h-48"
              src="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
              alt="blog"
            />
            <div className="p-6">
              <h3 className="text-sonic-silver font-body text-xs font-semibold tracking-widest uppercase">
                TypeScript
              </h3>
              <h2 className="mb-3 text-white font-display text-lg font-medium truncate">
                Nest.js - Introduction (Part 1)
              </h2>
              <p className="text-cadet-grey font-body text-base font-light leading-relaxed">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perferendis sequi voluptate est voluptates nisi natus beatae.
                Corporis numquam natus deserunt.
              </p>
              <div className="flex flex-wrap items-center mt-2">
                <a className="inline-flex items-center text-medium-state-blue hover:underline cursor-pointer md:mb-2 lg:mb-0">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
                {/* statistics here */}
              </div>
            </div>
          </div>
        </article>
      </div>
    </Tab.Panel>
  );
};

type BlogSectionProps = {};
