import Link from 'next/link';

type ProjectItemProps = {
  title: string;
  description: string;
  github: string;
};

const ProjectItem = ({ title, description, github }: ProjectItemProps) => {
  return (
    <Link href={github} target="_blank">
      <a>
        <article className="group cursor-pointer rounded-lg border border-dark-900 p-4 transition-colors duration-200 ease-in hover:bg-dark-900">
          <figure className="aspect-video rounded-lg bg-secondary-500" />
          <h3 className="mt-4 font-display text-xl font-bold text-white hover:underline hover:decoration-primary-500">
            {title}
          </h3>
          <p className="mt-2 font-body text-base font-light leading-relaxed text-greyish-900">
            {description}
          </p>
        </article>
      </a>
    </Link>
  );
};

export default ProjectItem;
