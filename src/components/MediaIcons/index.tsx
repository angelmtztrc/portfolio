import { cls } from '@/utils/classname.utils';
import Link from 'next/link';
import {
  GitHub as GitHubIcon,
  Twitter as TwitterIcon,
  Linkedin as LinkedinIcon
} from 'react-feather';

type MediaIconsProps = {
  isShrink?: boolean;
};

const MediaIcons = ({ isShrink = false }: MediaIconsProps) => {
  const itemClassnames = cls(
    'font-body flex items-center',
    isShrink
      ? 'font-normal text-sm leading-6'
      : 'font-semibold text-lg leading-8'
  );

  return (
    <ul className="flex space-x-6 mt-4 items-center text-content-dark">
      <li className={itemClassnames}>
        <GitHubIcon className="mr-2" />
        <Link href="https://github.com/angelmtztrc">GitHub</Link>
      </li>
      <li className={itemClassnames}>
        <TwitterIcon className="mr-2" />
        <Link href="https://x.com/angelmtztrc">Twitter</Link>
      </li>
      <li className={itemClassnames}>
        <LinkedinIcon className="mr-2" />
        <Link href="https://www.linkedin.com/in/angelmtztrc/">LinkedIn</Link>
      </li>
    </ul>
  );
};

export default MediaIcons;
