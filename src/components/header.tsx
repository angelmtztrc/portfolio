/* eslint-disable jsx-a11y/alt-text */
import { Image } from 'react-datocms';
import { GitHub, Twitter, Linkedin } from 'react-feather';

// interfaces
import { Me } from 'interfaces/me.interface';

// components
import { Button } from './button';

export const Header = ({
  me: { name, username, biography, github, twitter, linkedin, picture }
}: HeaderProps) => {
  return (
    <header>
      <div
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1538481199705-c710c4e965fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1565&q=80")'
        }}
        className="w-full h-96 bg-cover bg-center bg-no-repeat"
      />
      <div className="container">
        <div className="flex justify-between w-full">
          <div className="w-1/2">
            <div className="-mt-24 w-48 h-48 bg-cover bg-center border border-white rounded-full overflow-hidden">
              <Image data={picture.responsiveImage} />
            </div>
          </div>
          <div className="flex justify-end w-1/2">
            <div className="mt-4">
              <Button>Resume</Button>
            </div>
          </div>
        </div>
        <section className="mt-6">
          <h1 className="text-white font-display text-4xl">
            {name}
            <span className="block text-cadet-grey font-body text-base font-light">
              @{username}
            </span>
          </h1>
          <div className="mt-4 w-4/5">
            <p className="text-white font-body font-light">{biography}</p>
            <ul className="flex mt-4 space-x-4">
              <li className="flex p-2 hover:bg-raisin-black rounded-full cursor-pointer">
                <a href={github} target="_blank" rel="noreferrer">
                  <GitHub className="w-6 h-6 text-white" />
                </a>
              </li>
              <li className="flex p-2 hover:bg-raisin-black rounded-full cursor-pointer">
                <a href={twitter} target="_blank" rel="noreferrer">
                  <Twitter className="w-6 h-6 text-white" />
                </a>
              </li>
              <li className="flex p-2 hover:bg-raisin-black rounded-full cursor-pointer">
                <a href={linkedin} target="_blank" rel="noreferrer">
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </header>
  );
};

type HeaderProps = {
  me: Me;
};
