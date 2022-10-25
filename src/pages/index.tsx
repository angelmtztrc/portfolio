import type { NextPage } from 'next';
import { BriefcaseIcon } from '@heroicons/react/24/solid';

import { ProjectItem, SkillsList, SocialMediaList } from '@atoms';
import { Biography, Navbar } from '@molecules';

const HomePage: NextPage = () => {
  return (
    <div className="min-h-screen bg-darken-900">
      <div className="h-52 bg-primary-500" />
      <main className="container mx-auto grid grid-cols-1 gap-8 px-4 lg:grid-cols-12">
        <div className="-mt-12 flex flex-col gap-4 lg:col-span-3">
          <Biography />
          <SocialMediaList />
          <SkillsList />
        </div>
        <div className="flex flex-col gap-4 lg:col-span-9 lg:-mt-12">
          <Navbar />
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
        </div>
      </main>
    </div>
  );
};

export default HomePage;
