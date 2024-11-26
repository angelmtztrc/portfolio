import {
  Hero,
  About,
  LatestArticles,
  ProfileOverview,
  ProjectsShowcase,
  GetInTouch,
  Footer
} from '@/components';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <About />
      <ProjectsShowcase />
      <ProfileOverview />
      <LatestArticles />
      <GetInTouch />
      <Footer />
    </main>
  );
};

export default HomePage;
