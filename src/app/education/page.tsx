import { AcademicCapIcon } from '@heroicons/react/24/solid';

import { PageHeading } from '@atoms';

const EducationPage = () => {
  return (
    <section className="rounded-lg border border-dark-900 bg-darken-900 p-5">
      <PageHeading title="Education" icon={<AcademicCapIcon />} />
      <ul className="mt-6 grid grid-cols-3 gap-4">
        <li className="rounded-lg border border-dark-900 p-4">
          <figure className="aspect-video overflow-hidden rounded-lg">
            <div className="h-full w-full bg-secondary-500" />
          </figure>
        </li>
        <li className="rounded-lg border border-dark-900 p-4">
          <figure className="aspect-video overflow-hidden rounded-lg">
            <div className="h-full w-full bg-secondary-500" />
          </figure>
        </li>
        <li className="rounded-lg border border-dark-900 p-4">
          <figure className="aspect-video overflow-hidden rounded-lg">
            <div className="h-full w-full bg-secondary-500" />
          </figure>
        </li>
      </ul>
    </section>
  );
};

export default EducationPage;
