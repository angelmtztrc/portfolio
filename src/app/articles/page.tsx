import { NewspaperIcon } from '@heroicons/react/24/solid';

import { PageHeading, PostItem } from '@atoms';

import { ArticlesService } from '@services';

import { SectionLayout } from '@layouts';

const fetcher = async () => {
  const data = await ArticlesService.find();
  return data.allArticles;
};

const ArticlesPage = async () => {
  const data = await fetcher();

  return (
    <SectionLayout className="p-5">
      <PageHeading title="Articles" icon={<NewspaperIcon />} />
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {data.map(article => (
          <PostItem
            key={article.slug}
            title={article.title}
            description={article.description}
            picture={article.picture.url}
            url={`/articles/${article.slug}`}
          />
        ))}
      </div>
    </SectionLayout>
  );
};

export default ArticlesPage;
