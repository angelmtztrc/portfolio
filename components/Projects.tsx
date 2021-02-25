// components
import Project from './Project';

export type ProjectsProps = {};

const Projects = () => {
  return (
    <div className="mt-14">
      <ul className="flex items-center justify-center font-sans space-x-14">
        <li className="text-red-500 text-base">All</li>
        <li className="text-gray-600 text-base">Full-Stack</li>
        <li className="text-gray-600 text-base">Front-End</li>
        <li className="text-gray-600 text-base">Back-End</li>
      </ul>
      <div className="grid gap-10 grid-cols-3 mt-16">
        <Project />
      </div>
    </div>
  );
};

export default Projects;
