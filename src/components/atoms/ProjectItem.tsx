import Link from 'next/link';
import Image from 'next/image';

type ProjectItemProps = {
  title: string;
  description: string;
  picture: string;
  url: string;
};

const ProjectItem = ({ title, description, picture, url }: ProjectItemProps) => {
  return (
    <Link href={url} target="_blank">
      <article className="group cursor-pointer rounded-lg border border-dark-900 p-4 transition-colors duration-200 ease-in hover:bg-dark-900">
        <figure className="relative aspect-video overflow-hidden rounded-lg">
          <Image src={picture} alt={title} className="object-cover" fill />
        </figure>
        <h3 className="mt-4 font-display text-xl font-bold text-white hover:underline hover:decoration-primary-500">
          {title}
        </h3>
        <p className="mt-2 font-body text-base font-light leading-relaxed text-greyish-900">
          {description}
        </p>
      </article>
    </Link>
  );
};

export default ProjectItem;
