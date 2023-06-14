import { NewspaperIcon } from '@heroicons/react/24/solid';

import { PageHeading, PostItem } from '@atoms';

import { ArticlesService } from '@services';

import { SectionLayout } from '@layouts';
import { getImagePath } from '@utils/image.util';

const fetcher = async () => {
  const data = await ArticlesService.find();
  return data.data;
};

const ArticlesPage = async () => {
  const data = await fetcher();

  return (
    <SectionLayout className="p-5">
      <PageHeading title="Articles" icon={<NewspaperIcon />} />
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {data.map(({ id, attributes }) => (
          <PostItem
            key={id}
            title={attributes.title}
            description={attributes.description}
            picture={getImagePath(attributes.picture)}
            url={attributes.url}
          />
        ))}
      </div>
    </SectionLayout>
  );
};

export default ArticlesPage;
