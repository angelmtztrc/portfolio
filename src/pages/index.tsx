import type { NextPage } from 'next';

import { SkillsList, SocialMediaList } from '@atoms';
import { Biography } from '@molecules';

const HomePage: NextPage = () => {
  return (
    <div className="min-h-screen bg-darken-900">
      <div className="h-48 bg-primary-500" />
      <main className="container mx-auto  grid grid-cols-1 gap-4 px-4 lg:grid-cols-12">
        <div className="-mt-12 flex flex-col gap-4 lg:col-span-3">
          <Biography />
          <SocialMediaList />
          <SkillsList />
        </div>
        <div className="flex flex-col gap-4 lg:col-span-9 lg:-mt-12">
          <nav className="flex gap-4 rounded-lg border border-dark-900 bg-darken-900 p-5">
            <button
              type="button"
              className="rounded-lg bg-primary-500 px-6 py-3 font-body text-sm font-bold uppercase text-white"
            >
              Projects
            </button>
            <button
              type="button"
              className="rounded-lg bg-darken-900 px-6 py-3 font-body text-sm font-bold uppercase text-greyish-900"
            >
              Blog
            </button>
          </nav>
          <section className="rounded-lg border border-dark-900 bg-darken-900 p-5">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-secondary-500" />
              <h2 className="font-display text-2xl font-bold text-white">Projects</h2>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {[1, 2, 3].map(i => (
                <article
                  key={i}
                  className="cursor-pointer rounded-lg border border-dark-900 p-4 transition-colors duration-300 ease-in hover:bg-dark-900"
                >
                  <figure className="aspect-video rounded-lg bg-secondary-500" />
                  <h3 className="mt-4 font-display text-xl font-bold text-white">Passgen - Deno</h3>
                  <p className="mt-2 font-body text-base font-light leading-relaxed text-greyish-900">
                    A command-line tool built with Deno and TypeScript that allows you to generate
                    random and secure passwords.
                  </p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
