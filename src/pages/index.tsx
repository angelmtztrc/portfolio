import { Fragment } from 'react';
import type { NextPage } from 'next';
import { Tab } from '@headlessui/react';

// components
import { Header } from 'components/header';
import { Menu } from 'components/menu';
import { RepositoriesSection } from 'components/repositories-section';
import { ExperienceSection } from 'components/experience-section';
import { BlogSection } from 'components/blog-section';
import { EducationSection } from 'components/education-section';
import { ContactSection } from 'components/contact-section';

const HomePage: NextPage = () => {
  return (
    <Fragment>
      <Header />
      <Tab.Group>
        <Menu />
        <div className="mt-10">
          <Tab.Panels className="container mt-10">
            <RepositoriesSection />
            <BlogSection />
            <ExperienceSection />
            <EducationSection />
            <ContactSection />
          </Tab.Panels>
        </div>
      </Tab.Group>
    </Fragment>
  );
};

export default HomePage;
