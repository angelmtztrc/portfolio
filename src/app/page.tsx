import { use } from 'react';
import { FolderOpenIcon } from '@heroicons/react/24/solid';

import { ProjectItem } from '@atoms';

import { request } from '@utils/request.util';
import { GET_PROJECTS } from '@graphql/queries';
import { IProject } from '@interfaces/project';

const fetcher = async () => {
  const response = await request<{ allProjects: IProject[] }>({ query: GET_PROJECTS });
  return response.allProjects;
};

const HomePage = () => {
  const data = use(fetcher());

  return (
    <section className="rounded-lg border border-dark-900 bg-darken-900 p-5">
      <div className="flex items-center gap-4">
        <div className="rounded-full bg-purple-500 bg-opacity-10 p-2">
          <FolderOpenIcon className="h-8 w-8 rounded-full text-primary-400" />
        </div>
        <h2 className="font-display text-2xl font-bold text-white">Projects</h2>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {data.map(project => (
          <ProjectItem
            key={project.id}
            title={project.name}
            description={project.description}
            picture={project.picture.url}
            url={project.url}
          />
        ))}
      </div>
    </section>
  );
};

export default HomePage;
