import { use } from 'react';
import { FolderOpenIcon } from '@heroicons/react/24/solid';

import { PageHeading, PostItem } from '@atoms';

import { ProjectsService } from '@services';
import { SectionLayout } from '@layouts';

const fetcher = async () => {
  const data = await ProjectsService.find();
  return data.allProjects;
};

const HomePage = () => {
  const data = use(fetcher());

  return (
    <SectionLayout className="p-5">
      <PageHeading title="Projects" icon={<FolderOpenIcon />} />
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {data.map(project => (
          <PostItem
            key={project.id}
            title={project.name}
            description={project.description}
            picture={project.picture.url}
            url={project.url}
          />
        ))}
      </div>
    </SectionLayout>
  );
};

export default HomePage;
