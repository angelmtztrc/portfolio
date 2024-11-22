import {
  Hero,
  About,
  LatestArticles,
  ProfileOverview,
  ProjectsShowcase
} from '@/components';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <About />
      <ProjectsShowcase />
      <ProfileOverview />
      <LatestArticles />
    </main>
  );
};

export default HomePage;
