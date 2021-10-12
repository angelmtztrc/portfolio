import Image from 'next/image';

// interfaces
import { Repository } from 'interfaces/repository.interface';

export const RepositoryCard = ({
  repository: {
    picture: { url, alt },
    category: { name },
    title,
    description
  }
}: RepositoryCardProps) => {
  return (
    <article className="col-span-2 select-none lg:col-span-1">
      <div className="border-2 border-raisin-black rounded overflow-hidden">
        <div className="relative w-full h-56">
          <Image
            src={url}
            placeholder="blur"
            blurDataURL={url}
            layout="fill"
            objectFit="cover"
            alt={alt}
            className="object-cover object-center"
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
