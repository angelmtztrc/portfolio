import ProjectPreview from './ProjectPreview';
import SubHeading from '../SubHeading';

const Projects = () => {
  return (
    <section className="mt-32">
      <div className="container mx-auto">
        <SubHeading number="03" text="Projects I have built" />
        <div className="flex flex-col justify-center">
          <ProjectPreview />
        </div>
      </div>
    </section>
  );
};

export default Projects;
