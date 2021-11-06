import { Fragment } from 'react';
import type { GetStaticProps, NextPage } from 'next';
import { Tab } from '@headlessui/react';

// graphql queries
import { HOME_QUERY } from 'graphql/queries';

// libs
import { request } from 'libs/request';

// interfaces
import { Profile } from 'interfaces/profile.interface';
import { Repository } from 'interfaces/repository.interface';
import { Article } from 'interfaces/article.interface';
import { HomePageQueryResponse } from 'interfaces/home-page-query.interface';

// components
import { Header } from 'components/header';
import { Menu } from 'components/menu';
import { RepositoriesSection } from 'components/repositories/repositories-section';
import { ExperienceSection } from 'components/experience/experience-section';
import { BlogSection } from 'components/blog/blog-section';
import { EducationSection } from 'components/education/education-section';
import { ContactSection } from 'components/contact/contact-section';
import { Footer } from 'components/footer';

const HomePage: NextPage<HomePageProps> = ({
  profile,
  repositories,
  articles
}) => {
  return (
    <Fragment>
      <Header profile={profile} />
      <Tab.Group>
        <Menu />
        <div className="mt-10">
          <Tab.Panels className="container mt-10">
            <RepositoriesSection repositories={repositories} />
            <BlogSection articles={articles} />
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

type HomePageProps = {
  profile: Profile;
  repositories: Repository[];
  articles: Article[];
};

export const getStaticProps: GetStaticProps = async () => {
  const { profile, allRepositories, allArticles } =
    await request<HomePageQueryResponse>({
      query: HOME_QUERY
    });

  return {
    props: {
      profile,
      repositories: allRepositories,
      articles: allArticles
    }
  };
};

export default HomePage;
