import { NewspaperIcon } from '@heroicons/react/24/solid';

import { PageHeading, PostItem } from '@atoms';

import { ArticlesService } from '@services';
import { use } from 'react';

const fetcher = async () => {
  const data = await ArticlesService.findArticles();
  return data.allArticles;
};

const ArticlesPage = () => {
  const data = use(fetcher());

  return (
    <section className="rounded-lg border border-dark-900 bg-darken-900 p-5">
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
    </section>
  );
};

export default ArticlesPage;
