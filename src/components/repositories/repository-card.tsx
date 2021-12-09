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
      <div className="border-2 border-raisin-black rounded overflow-hidden">
        <div className="overlay relative w-full h-64">
          <div className="absolute flex items-center justify-center w-full h-full space-x-2 transition-opacity duration-500 ease-in">
            <Link href={github}>
              <a>
                <Button className="flex items-center space-x-2">
                  <GitHubIcon className="w-4 h-4" />
                  <span className="font-semibold">GitHub</span>
                </Button>
              </a>
            </Link>
            <Link href={preview}>
              <a>
                <Button className="flex items-center space-x-2">
                  <EyeIcon className="w-4 h-4" />
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
          <h3 className="text-medium-state-blue font-body text-xs font-semibold tracking-widest uppercase">
            {name}
          </h3>
          <h2 className="mb-4 text-white font-display text-lg font-medium">
            {title}
          </h2>
          <p className="text-cadet-grey font-body text-base font-light leading-relaxed">
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
