import Icon from '@mdi/react';
import { mdiBriefcaseOutline, mdiSchoolOutline } from '@mdi/js';

// components
import SubHeading from '../SubHeading';

const Experience = () => {
  return (
    <section className="mt-32">
      <div className="container mx-auto">
        <SubHeading number="02" text="Experience" />

        <div className="grid gap-12 grid-cols-2">
          <div>
            <li className="flex mb-1 space-x-6">
              <div className="flex flex-col items-center justify-center">
                <Icon
                  className="w-10 h-10 text-blue-500"
                  path={mdiSchoolOutline}
                />
                <div className="flex-grow mt-1 w-0.5 h-auto bg-blue-500"></div>
              </div>
              <div className="pb-4">
                <p className="text-gray-600 font-sans text-sm">
                  2018 - Present
                </p>
                <p className="text-gray-900 text-2xl font-bold">
                  Higher Secondary
                </p>
                <p className="mt-2 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                  sapiente hic vel deserunt sed asperiores!
                </p>
              </div>
            </li>
          </div>
          <div>
            <li className="flex mb-1 space-x-6">
              <div className="flex flex-col items-center justify-center">
                <Icon
                  className="w-10 h-10 text-blue-500"
                  path={mdiBriefcaseOutline}
                />
                <div className="h-aut0 flex-grow mt-1 w-0.5 bg-blue-500"></div>
              </div>
              <div className="pb-4">
                <p className="text-gray-600 font-sans text-sm">
                  2019 - Present
                </p>
                <p className="text-gray-900 text-2xl font-bold">
                  Web Developer
                </p>
                <p className="mt-2 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                  sapiente hic vel deserunt sed asperiores!
                </p>
              </div>
            </li>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
