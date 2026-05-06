import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Communications from "@/components/communications";

const HomePage = () => {
  return (
    <div className="text-foreground min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-5xl px-6">
        <Hero />
        <Experience />
        <Projects />
        <Communications />
      </main>
    </div>
  );
};

export default HomePage;
