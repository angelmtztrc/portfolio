// components
import Project from './Project';

export type ProjectsProps = {};

const Projects = () => {
  return (
    <div className="mt-14">
      <ul className="flex items-center justify-center font-sans space-x-14">
        <li className="text-red-500 text-xs lg:text-base">All</li>
        <li className="text-gray-600 text-xs lg:text-base">Full-Stack</li>
        <li className="text-gray-600 text-xs lg:text-base">Front-End</li>
        <li className="text-gray-600 text-xs lg:text-base">Back-End</li>
      </ul>
      <div className="grid gap-10 grid-cols-1 mt-16 md:grid-cols-4 lg:grid-cols-3">
        <Project />
      </div>
    </div>
  );
};

export default Projects;
