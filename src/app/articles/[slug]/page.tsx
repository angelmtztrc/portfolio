import { use } from 'react';
import Image from 'next/image';
import MarkdownRender from 'react-markdown';
import { ArrowSmallLeftIcon } from '@heroicons/react/24/solid';

import { Button } from '@atoms';
import { ArticlesService } from '@services';
import Link from 'next/link';
import { formattedDate } from '@utils/day.util';
import { SectionLayout } from '@layouts';
import { randomColor } from '@utils/random-color.util';

const fetcher = async (slug: string) => {
  const data = await ArticlesService.findOneBySlug(slug);

  return data.article;
};

const ArticlePage = ({ params }: { params: { slug: string } }) => {
  const data = use(fetcher(params.slug));

  return (
    <SectionLayout className="p-5 lg:px-12 lg:py-8">
      <article>
        <header>
          <div>
            <Link href="/articles">
              <Button className="flex items-center space-x-2 px-6 py-3">
                <ArrowSmallLeftIcon className="h-4 w-4 text-white" />
                <span>Back</span>
              </Button>
            </Link>
          </div>
          <figure className="relative mt-4 aspect-[16/8] w-full overflow-hidden rounded-lg">
            <Image src={data.picture.url} alt={data.title} className="object-cover" fill priority />
          </figure>
          <div className="mt-6 lg:px-12">
            <h1 className="font-display text-2xl font-bold text-white lg:text-4xl">{data.title}</h1>
            <div className="mt-4 flex flex-col">
              <ul className="flex flex-wrap items-center space-x-2">
                {data.tags.split(',').map(tag => (
                  <li key={tag} className="font-body font-light text-greyish-800">
                    <span className={`text-${randomColor()}-500`}>#</span>
                    {tag}
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-body text-sm font-light uppercase text-gray-800">
                {formattedDate(data.createdAt)}
              </p>
            </div>
          </div>
        </header>
        <div className="prose prose-invert mt-12 w-full max-w-full lg:prose-lg lg:px-12">
          <MarkdownRender>{data.content}</MarkdownRender>
        </div>
      </article>
    </SectionLayout>
  );
};

export default ArticlePage;
