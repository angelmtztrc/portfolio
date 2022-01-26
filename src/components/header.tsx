import Image from 'next/image';
import Link from 'next/link';
import {
  GitHub as GitHubIcon,
  Twitter as TwitterIcon,
  Linkedin as LinkedinIcon
} from 'react-feather';

// interfaces
import { Profile } from 'interfaces/profile.interface';

// components
import { Button } from './button';

export const Header = ({
  profile: {
    name,
    username,
    biography,
    github,
    twitter,
    linkedin,
    picture,
    cover
  }
}: HeaderProps) => {
  return (
    <header>
      <div className="relative h-96 w-full overflow-hidden">
        <Image
          src={cover.url}
          placeholder="blur"
          blurDataURL={cover.url}
          layout="fill"
          objectFit="cover"
          alt="Cover picture"
          priority
        />
      </div>
      <div className="container">
        <div className="flex w-full justify-between">
          <div className="w-1/2">
            <div className="relative -mt-24 h-48 w-48 overflow-hidden rounded-full border-2 border-white bg-cover bg-center">
              <Image
                src={picture.url}
                className="transition-all duration-300 ease-in"
                placeholder="blur"
                blurDataURL={picture.url}
                layout="fill"
                objectFit="cover"
                alt={name}
                priority
              />
            </div>
          </div>
          <div className="flex w-1/2 justify-end">
            <div className="mt-4">
              <a href="/files/resume.pdf">
                <Button className="bg-medium-state-blue text-white hover:border-medium-state-blue-dark hover:bg-medium-state-blue-dark">
                  Resume
                </Button>
              </a>
            </div>
          </div>
        </div>
        <section className="mt-6">
          <h1 className="font-display text-4xl text-white">
            {name}
            <span className="block font-body text-base font-light text-cadet-grey">
              @{username}
            </span>
          </h1>
          <div className="mt-4 w-full lg:w-4/5">
            <p className="font-body font-light leading-relaxed text-white">
              {biography}
            </p>
            <ul className="mt-4 flex space-x-4">
              <li className="flex cursor-pointer rounded-full p-2 hover:bg-raisin-black">
                <Link href={github}>
                  <a target="_blank" rel="noreferrer">
                    <GitHubIcon className="h-6 w-6 text-white" />
                  </a>
                </Link>
              </li>
              <li className="flex cursor-pointer rounded-full p-2 hover:bg-raisin-black">
                <Link href={twitter}>
                  <a target="_blank" rel="noreferrer">
                    <TwitterIcon className="h-6 w-6 text-white" />
                  </a>
                </Link>
              </li>
              <li className="flex cursor-pointer rounded-full p-2 hover:bg-raisin-black">
                <Link href={linkedin}>
                  <a target="_blank" rel="noreferrer">
                    <LinkedinIcon className="h-6 w-6 text-white" />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </header>
  );
};

type HeaderProps = {
  profile: Profile;
};
