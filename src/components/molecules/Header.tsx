import {
  GitHub as GitHubIcon,
  Twitter as TwitterIcon,
  Linkedin as LinkedInIcon
} from 'react-feather';

import { Picture } from '@atoms';
import Link from 'next/link';

const Header = ({}: HeaderProps) => {
  return (
    <header>
      <div className="relative h-96 w-full overflow-hidden">
        <Picture
          src="https://images.unsplash.com/photo-1506259091721-347e791bab0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="header background"
          priority
        />
      </div>
      <section className="container">
        <div className="flex w-full justify-between">
          <div className="w-1/2">
            <div className="relative -mt-24 h-48 w-48 overflow-hidden rounded-full border-4 border-indigo-500">
              <Picture
                src="https://images.unsplash.com/photo-1473830394358-91588751b241?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="profile picture"
                priority
              />
            </div>
          </div>
          <div>{/* TODO: get resume button */}</div>
        </div>
        <div className="mt-6">
          <h1 className="font-display text-4xl font-bold text-slate-50">
            Angel Martinez
            <span className="block font-body text-base font-light text-cadet-grey">
              @angelmtztrc
            </span>
          </h1>
          <div className="mt-4 w-full lg:w-4/5">
            <p className="font-body font-light text-slate-50">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga ut, dolorum ipsam
              laudantium animi voluptas dignissimos dolore itaque repellat doloremque atque earum
              eveniet iste consequuntur molestias voluptate, nulla, expedita quaerat!
            </p>
            <ul className="mt-4 flex space-x-4">
              <li>
                <Link href="https://github.com/angelmtztrc">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex cursor-pointer rounded-full p-2 shadow hover:bg-raisin-black"
                  >
                    <GitHubIcon className="h-6 w-6 text-slate-50" />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://github.com/angelmtztrc">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex cursor-pointer rounded-full p-2 shadow hover:bg-raisin-black"
                  >
                    <TwitterIcon className="h-6 w-6 text-slate-50" />
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://github.com/angelmtztrc">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex cursor-pointer rounded-full p-2 shadow hover:bg-raisin-black"
                  >
                    <LinkedInIcon className="h-6 w-6 text-slate-50" />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </header>
  );
};

type HeaderProps = {};

export default Header;
