import { FolderOpenIcon } from '@heroicons/react/24/solid';

import { PageHeading, PostItem } from '@atoms';

import { ProjectsService } from '@services';
import { SectionLayout } from '@layouts';
import { getImagePath } from '@utils/image.util';

const fetcher = async () => {
  const data = await ProjectsService.find();
  return data.data;
};

const HomePage = async () => {
  const data = await fetcher();

  return (
    <SectionLayout className="p-5">
      <PageHeading title="Projects" icon={<FolderOpenIcon />} />
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {data.map(({ id, attributes }) => (
          <PostItem
            key={id}
            title={attributes.name}
            description={attributes.description}
            picture={getImagePath(attributes.picture)}
            url={attributes.url}
          />
        ))}
      </div>
    </SectionLayout>
  );
};

export default HomePage;
