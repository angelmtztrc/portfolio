import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'react-feather';

// interfaces
import { Article } from 'interfaces/article.interface';

export const ArticleCard = ({
  article: {
    picture: { url, alt },
    category: { name },
    title,
    description,
    link
  }
}: ArticleCardProps) => {
  return (
    <article className="col-span-4 md:col-span-2 xl:col-span-1">
      <div className="overflow-hidden rounded border-2 border-raisin-black">
        <div className="relative md:h-36 lg:h-48">
          <Image
            src={url}
            placeholder="blur"
            blurDataURL={url}
            layout="fill"
            objectFit="cover"
            alt={alt}
            className="w-full object-cover object-center"
          />
        </div>
        <div className="p-6">
          <h3 className="font-body text-xs font-semibold uppercase tracking-widest text-sonic-silver">
            {name}
          </h3>
          <h2 className="mb-3 truncate font-display text-lg font-medium text-white">
            {title}
          </h2>
          <p className="font-body text-base font-light leading-relaxed text-cadet-grey">
            {description}
          </p>
          <div className="mt-2 flex flex-wrap items-center">
            <Link href={link}>
              <a className="inline-flex cursor-pointer items-center text-medium-state-blue hover:underline md:mb-2 lg:mb-0">
                Read More
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

type ArticleCardProps = {
  article: Article;
};
