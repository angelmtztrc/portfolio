import { Fragment } from 'react';
import type { GetStaticProps, NextPage } from 'next';
import { Tab } from '@headlessui/react';

// graphql queries
import { HOME_QUERY } from 'graphql/queries';

// libs
import { request } from 'libs/request';

// components
import { Header } from 'components/header';
import { Menu } from 'components/menu';
import { RepositoriesSection } from 'components/repositories-section';
import { ExperienceSection } from 'components/experience-section';
import { BlogSection } from 'components/blog-section';
import { EducationSection } from 'components/education-section';
import { ContactSection } from 'components/contact-section';
import { Footer } from 'components/footer';
import { HomePageQueryResponse } from 'interfaces/home-page-query.interface';

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
      <Footer />
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { me, allRepositories } = await request<HomePageQueryResponse>({
    query: HOME_QUERY
  });

  console.log(me);
  return {
    props: {}
  };
};

export default HomePage;
