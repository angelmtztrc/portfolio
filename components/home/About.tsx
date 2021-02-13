import Image from 'next/image';
import Icon from '@mdi/react';
import {
  mdiEmail,
  mdiGithub,
  mdiLanguageJavascript,
  mdiLanguageTypescript,
  mdiNodejs,
  mdiReact,
  mdiTwitter
} from '@mdi/js';

// components
import SubHeading from '../SubHeading';

const About = () => {
  return (
    <section>
      <div className="container mx-auto">
        <SubHeading number={'01'} text={'About Me'} />
        <div className="grid gap-10 grid-cols-2">
          <div className="col-span-1 mt-2 space-y-2">
            {/* TODO: Little bio here */}
            <p className="text-primary-100 text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem modi
            </p>
            <p className="text-primary-100 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              et at nisi magnam fuga aliquid tempore veritatis explicabo labore
              reprehenderit.
            </p>
            <p className="text-primary-100 text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatum, iste!
            </p>
            <ul className="flex items-center mt-6 space-x-4">
              <li>
                <a href="#">
                  <Icon
                    className="w-8 h-8 text-secondary-100 hover:text-secondary-200"
                    path={mdiTwitter}
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <Icon
                    className="w-8 h-8 text-secondary-100 hover:text-secondary-200"
                    path={mdiGithub}
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <Icon
                    className="w-8 h-8 text-secondary-100 hover:text-secondary-200"
                    path={mdiEmail}
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-1 px-20">
            <Image
              src="/about-illustration.svg"
              layout="responsive"
              width="auto"
              height="auto"
            />
          </div>
        </div>
        <ul className="flex items-center justify-around mt-28">
          <li className="text-center">
            <Icon
              className="w-28 h-28 text-primary-200"
              path={mdiLanguageJavascript}
            />
            <p className="text-primary-300 font-mono text-base">JavaScript</p>
          </li>
          <li className="text-center">
            <Icon className="w-28 h-28 text-primary-200" path={mdiReact} />
            <p className="text-primary-300 font-mono text-base">React.js</p>
          </li>
          <li className="text-center">
            <Icon
              className="w-28 h-28 text-primary-200"
              path={mdiLanguageTypescript}
            />
            <p className="text-primary-300 font-mono text-base">TypeScript</p>
          </li>
          <li className="text-center">
            <Icon className="w-28 h-28 text-primary-200" path={mdiNodejs} />
            <p className="text-primary-300 font-mono text-base">Node.js</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
