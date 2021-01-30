import { IconFolders } from '@tabler/icons';

// components
import ProjectPreview from '../ProjectPreview';

const Projects = () => {
  return (
    <section className="mt-32">
      <div className="container mx-auto">
        <div>
          <h2 className="flex items-center space-x-4">
            <IconFolders
              className="text-primary-600 w-12 h-12"
              stroke={1.5}
              strokeLinejoin={'round'}
            />
            <span className="text-primary-600 text-4xl font-medium">
              Projects
            </span>
          </h2>
          <p className="mt-6 text-gray-500 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            repellendus?
          </p>
        </div>
        <div className="flex flex-col justify-center mt-10 space-x-8 lg:flex-row">
          <ProjectPreview />
        </div>
      </div>
    </section>
  );
};

export default Projects;
