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
      <div className="border-2 border-raisin-black rounded overflow-hidden">
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
          <h3 className="text-sonic-silver font-body text-xs font-semibold tracking-widest uppercase">
            {name}
          </h3>
          <h2 className="mb-3 text-white font-display text-lg font-medium truncate">
            {title}
          </h2>
          <p className="text-cadet-grey font-body text-base font-light leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap items-center mt-2">
            <Link href={link}>
              <a className="inline-flex items-center text-medium-state-blue hover:underline cursor-pointer md:mb-2 lg:mb-0">
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
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
