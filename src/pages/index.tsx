import { Fragment } from 'react';
import type { GetStaticProps, NextPage } from 'next';
import { Tab } from '@headlessui/react';

// graphql queries
import { HOME_QUERY } from 'graphql/queries';

// libs
import { request } from 'libs/request';

// interfaces
import { Me } from 'interfaces/me.interface';
import { Repository } from 'interfaces/repository.interface';
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
import { Article } from 'interfaces/article.interface';

const HomePage: NextPage<HomePageProps> = ({ me, repositories, articles }) => {
  return (
    <Fragment>
      <Header me={me} />
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
  me: Me;
  repositories: Repository[];
  articles: Article[];
};

export const getStaticProps: GetStaticProps = async () => {
  const { me, allRepositories, allArticles } =
    await request<HomePageQueryResponse>({
      query: HOME_QUERY
    });

  return {
    props: {
      me,
      repositories: allRepositories,
      articles: allArticles
    }
  };
};

export default HomePage;
