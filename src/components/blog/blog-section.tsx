import { Tab } from '@headlessui/react';

// interfaces
import { Article } from 'interfaces/article.interface';

// components
import { ArticleCard } from './article-card';

export const BlogSection = ({ articles }: BlogSectionProps) => {
  return (
    <Tab.Panel as="section" className="focus-visible:outline-none">
      <div className="mb-6 flex flex-col items-center justify-center">
        <h2 className="mb-4 font-display text-3xl font-bold capitalize text-white">
          Blog
        </h2>
        <p className="w-full text-center font-body font-light text-cadet-grey md:w-1/2">
          Sometimes I like to write articles about technologies, most of them
          are tutorials with the focus of explaining away easier the usage of a
          particular tool.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-6 xl:grid-cols-3">
        {articles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </Tab.Panel>
  );
};

type BlogSectionProps = {
  articles: Article[];
};
