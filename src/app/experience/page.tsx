import { BriefcaseIcon } from '@heroicons/react/24/solid';

const ExperiencePage = () => {
  return (
    <section className="rounded-lg border border-dark-900 bg-darken-900 p-5">
      <div className="flex items-center gap-4">
        <div className="rounded-full bg-purple-500 bg-opacity-10 p-2">
          <BriefcaseIcon className="h-8 w-8 rounded-full text-primary-400" />
        </div>
        <h2 className="font-display text-2xl font-bold text-white">Experience</h2>
      </div>
      <ul className="mt-6">
        <li className="relative rounded-t border-l-4 border-primary-500 pl-6 pb-8">
          <span className="absolute top-0 -left-[10px] h-4 w-4 rounded-full bg-primary-500" />
          <div className="relative">
            <p className="font-body text-xs font-light uppercase text-gray-900">
              March, 2022 - Present
            </p>
          </div>
          <div className="mt-2">
            <h2 className="font-display font-bold text-white">Front-end Developer @ Never8</h2>
            <p className="mt-1 w-3/4 font-body font-light text-greyish-800">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci repudiandae
              perferendis similique minima id inventore corporis cum ullam tenetur unde?
            </p>
          </div>
        </li>
        <li className="relative rounded-t border-l-4 border-primary-500 pl-6 pb-3">
          <span className="absolute top-0 -left-[10px] h-4 w-4 rounded-full bg-primary-500" />
          <div className="relative">
            <p className="font-body text-xs font-light uppercase text-gray-900">
              March, 2022 - Present
            </p>
          </div>
          <div className="mt-2">
            <h2 className="font-display font-bold text-white">Front-end Developer @ Never8</h2>
            <p className="mt-1 w-3/4 font-body font-light text-greyish-800">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci repudiandae
              perferendis similique minima id inventore corporis cum ullam tenetur unde?
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default ExperiencePage;
