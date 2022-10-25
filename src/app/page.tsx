import { BriefcaseIcon } from '@heroicons/react/24/solid';

import { ProjectItem } from '@atoms';

const HomePage = () => {
  return (
    <section className="rounded-lg border border-dark-900 bg-darken-900 p-5">
      <div className="flex items-center gap-4">
        <div className="rounded-full bg-purple-500 bg-opacity-10 p-2">
          <BriefcaseIcon className="h-8 w-8 rounded-full text-primary-400" />
        </div>
        <h2 className="font-display text-2xl font-bold text-white">Projects</h2>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {[1, 2, 3].map(i => (
          <ProjectItem
            key={i}
            title="Passgen - Deno"
            description="A command-line tool built with Deno and TypeScript that allows you to generate random
            and secure passwords."
            github="https://angelmtz.dev"
          />
        ))}
      </div>
    </section>
  );
};

export default HomePage;
