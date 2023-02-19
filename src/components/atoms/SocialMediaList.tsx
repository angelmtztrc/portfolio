import {
  GitHub as GitHubIcon,
  Twitter as TwitterIcon,
  Linkedin as LinkedinIcon
} from 'react-feather';
import Link from 'next/link';

type SocialMediaListProps = {
  data: Record<string, string>;
};

const ICON_CLASSNAMES =
  'h-5 w-5 text-white group-hover:text-primary-400 transition duration-300 ease-in';
const SOCIAL_ICONS = {
  github: <GitHubIcon className={ICON_CLASSNAMES} />,
  twitter: <TwitterIcon className={ICON_CLASSNAMES} />,
  linkedin: <LinkedinIcon className={ICON_CLASSNAMES} />
};

const SocialMediaList = ({ data }: SocialMediaListProps) => {
  return (
    <section className="rounded-lg border border-dark-900 bg-darken-900 p-5 ">
      <div className="flex items-center justify-center space-x-4">
        {Object.entries(data).map(([key, value]) => (
          <Link
            key={key}
            href={value}
            target="_blank"
            className="group flex items-center justify-center rounded-full border border-dark-900 p-3 transition duration-200 ease-in hover:bg-purple-500 hover:bg-opacity-10"
          >
            {SOCIAL_ICONS[key as keyof typeof SOCIAL_ICONS]}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SocialMediaList;
