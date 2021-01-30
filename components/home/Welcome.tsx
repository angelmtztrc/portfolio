import Image from 'next/image';
import { IconBrandTwitter, IconBrandGithub, IconSend } from '@tabler/icons';

const Welcome = () => {
  return (
    <section className="mt-28">
      <div className="container mx-auto pb-24 pt-8">
        <div className="grid gap-10 grid-cols-2">
          <div className="flex col-span-2 items-center lg:col-span-1">
            <div className="-mt-10">
              <h1 className="text-primary-600 leading-relaxed">
                <span className="text-2xl font-medium">Hello, I'm</span>
                <br />
                <span className="text-5xl font-bold">Angel Martinez</span>
              </h1>
              <p className="mt-4 text-gray-500 lg:w-4/5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem eveniet placeat itaque non porro dolore quaerat
                repellendus. Earum, optio fugiat?
              </p>
              <ul className="flex items-center mt-4 space-x-4">
                <li>
                  <a href="https://twitter.com/angelmtztrc" target="_blank">
                    <IconBrandTwitter
                      className="text-primary-600 w-5 h-5"
                      stroke={1.5}
                      strokeLinejoin={'round'}
                    />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/angelmtztrc" target="_blank">
                    <IconBrandGithub
                      className="text-primary-600 w-5 h-5"
                      stroke={1.5}
                      strokeLinejoin={'round'}
                    />
                  </a>
                </li>
                <li>
                  <a href="mailto:angel.martineztrc@gmail.com">
                    <IconSend
                      className="text-primary-600 w-5 h-5"
                      stroke={1.5}
                      strokeLinejoin={'round'}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <Image
              src="/welcome.svg"
              layout="responsive"
              width="auto"
              height="auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
