import { use } from 'react';
import { FolderOpenIcon } from '@heroicons/react/24/solid';

import { PageHeading, ProjectItem } from '@atoms';

import { ProjectsService } from '@services';

const fetcher = async () => {
  const data = await ProjectsService.findProjects();
  return data.allProjects;
};

const HomePage = () => {
  const data = use(fetcher());

  return (
    <section className="rounded-lg border border-dark-900 bg-darken-900 p-5">
      <PageHeading title="Projects" icon={<FolderOpenIcon />} />
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
