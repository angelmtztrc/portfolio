import { use } from 'react';
import Image from 'next/image';
import MarkdownRender from 'react-markdown';
import { ArrowSmallLeftIcon } from '@heroicons/react/24/solid';

import { Button } from '@atoms';
import { ArticlesService } from '@services';
import Link from 'next/link';
import { formattedDate } from '@utils/day.util';

const fetcher = async (slug: string) => {
  const data = await ArticlesService.findOneBySlug(slug);

  return data.article;
};

const ArticlePage = ({ params }: { params: { slug: string } }) => {
  const data = use(fetcher(params.slug));

  return (
    <article className="rounded-lg border border-dark-900 bg-darken-900 px-12 py-8">
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
          <Image src={data.picture.url} alt={data.title} className="object-cover" fill />
        </figure>
        <div className="mt-6 px-12">
          <h1 className="font-display text-4xl font-bold text-white">{data.title}</h1>
          <div className="mt-4 flex items-center ">
            <p className="mr-2 font-body text-sm font-light uppercase text-gray-800">
              {formattedDate(data.createdAt)} -
            </p>
            <ul className="flex items-center space-x-2">
              {data.tags.split(',').map(tag => (
                <li key={tag} className="font-body font-light text-greyish-800">
                  <span className="text-red-500">#</span>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
      <div className="prose prose-lg prose-invert mt-12 w-full max-w-full px-12">
        <MarkdownRender>{data.content}</MarkdownRender>
      </div>
    </article>
  );
};

export default ArticlePage;
