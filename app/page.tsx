import Experience from '@/components/experience';
import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import Projects from '@/components/projects';

const HomePage = () => {
  return (
    <div className="min-h-screen text-foreground">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6">
        <Hero />
        <Experience />
        <Projects />
      </main>
    </div>
  );
};

export default HomePage;
