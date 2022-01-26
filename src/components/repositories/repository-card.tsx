import Image from 'next/image';
import Link from 'next/link';
import { GitHub as GitHubIcon, Eye as EyeIcon } from 'react-feather';

// interfaces
import { Repository } from 'interfaces/repository.interface';

// components
import { Button } from 'components/button';

export const RepositoryCard = ({
  repository: {
    picture: { url, alt },
    category: { name },
    title,
    description,
    github,
    preview
  }
}: RepositoryCardProps) => {
  return (
    <article className="col-span-2 select-none lg:col-span-1">
      <div className="overflow-hidden rounded border-2 border-raisin-black">
        <div className="overlay relative h-64 w-full">
          <div className="absolute flex h-full w-full items-center justify-center space-x-2 transition-opacity duration-500 ease-in">
            <Link href={github}>
              <a target="_blank" rel="noreferrer">
                <Button className="flex items-center space-x-2">
                  <GitHubIcon className="h-4 w-4" />
                  <span className="font-semibold">GitHub</span>
                </Button>
              </a>
            </Link>
            <Link href={preview}>
              <a target="_blank" rel="noreferrer">
                <Button className="flex items-center space-x-2">
                  <EyeIcon className="h-4 w-4" />
                  <span className="font-semibold">Preview</span>
                </Button>
              </a>
            </Link>
          </div>
          <Image
            src={url}
            placeholder="blur"
            blurDataURL={url}
            layout="fill"
            objectFit="cover"
            alt={alt}
            className="object-center transition-opacity duration-300 ease-in-out"
          />
        </div>
        <div className="p-6">
          <h3 className="font-body text-xs font-semibold uppercase tracking-widest text-medium-state-blue">
            {name}
          </h3>
          <h2 className="mb-4 font-display text-lg font-medium text-white">
            {title}
          </h2>
          <p className="font-body text-base font-light leading-relaxed text-cadet-grey">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
};

type RepositoryCardProps = {
  repository: Repository;
};
