import { Fragment } from 'react';
import type { NextPage } from 'next';
import { Tab } from '@headlessui/react';

import { Menu, ProfileSection } from '@molecules';
import { BlogPanel, EducationPanel, ExperiencePanel, ProjectsPanel } from '@organisms';

const HomePage: NextPage<HomePageProps> = () => {
  return (
    <Fragment>
      <div className="h-48 bg-gradient-to-tr from-indigo-400 to-indigo-500" />
      <main className="container mx-auto -mt-12 flex-1">
        <div className="grid grid-cols-12 gap-4">
          <ProfileSection />
          <Tab.Group as="section" className="col-span-12 space-y-4 lg:col-span-9">
            <Menu />
            <Tab.Panels>
              <ProjectsPanel />
              <BlogPanel />
              <ExperiencePanel />
              <EducationPanel />
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>
    </Fragment>
  );
};

type HomePageProps = {};

export default HomePage;
