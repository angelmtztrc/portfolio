import { GitHub, Twitter, Linkedin } from 'react-feather';

// components
import { Button } from './button';

export const Header = () => {
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
            <div
              style={{
                backgroundImage:
                  'url("https://pbs.twimg.com/profile_images/1327018550360375296/z98YV32J_400x400.jpg")'
              }}
              className="-mt-24 w-48 h-48 bg-cover bg-center border border-white rounded-full"
            />
          </div>
          <div className="flex justify-end w-1/2">
            <div className="mt-4">
              <Button>Resume</Button>
            </div>
          </div>
        </div>
        <section className="mt-6">
          <h1 className="font-display text-white text-4xl">
            Angel Martinez
            <span className="block text-cadet-grey font-body text-base font-light">
              @angelmtztrc
            </span>
          </h1>
          <div className="mt-4 w-4/5">
            {/* better bio here */}
            <p className="text-white font-body font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              eius excepturi nihil tempora fugit libero maxime numquam impedit.
              Nisi, beatae?
            </p>
            <ul className="flex mt-4 space-x-4">
              <li className="flex p-2 hover:bg-raisin-black rounded-full cursor-pointer">
                <a
                  href="https://github.com/angelmtztrc"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHub className="w-6 h-6 text-white" />
                </a>
              </li>
              <li className="flex p-2 hover:bg-raisin-black rounded-full cursor-pointer">
                <a
                  href="https://twitter.com/angelmtztrc"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Twitter className="w-6 h-6 text-white" />
                </a>
              </li>
              <li className="flex p-2 hover:bg-raisin-black rounded-full cursor-pointer">
                <a
                  href="https://www.linkedin.com/in/angelmtztrc/"
                  target="_blank"
                  rel="noreferrer"
                >
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
