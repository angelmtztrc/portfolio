import type { NextPage } from 'next';
import Head from 'next/head';

const Temp: NextPage = () => {
  return (
    <div className="min-h-screen bg-eerie-black">
      <Head>
        <title>Angel M. - Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className="w-full h-96 bg-red-900 bg-center" />
        <div className="container">
          <div className="flex justify-between w-full">
            <div className="w-1/2">
              <div className="-mt-28 w-48 h-48 bg-red-300 bg-cover bg-center border border-white rounded-full" />
            </div>
            <div className="flex justify-end w-1/2">
              <div className="mt-4">
                <button className="inline-block px-4 py-2 text-purple-500 border border-purple-500 rounded">
                  Resume
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h1 className="text-white font-mono text-4xl">
              Angel Martinez
              <span className="text-cadet-grey block font-sans text-base">
                @angelmtztrc
              </span>
            </h1>
            <div className="mt-4 w-4/5">
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                illo in suscipit! Perspiciatis consequatur quasi quis provident
                mollitia deserunt voluptates?
              </p>
              {/* social network links here */}
            </div>
          </div>
        </div>
      </header>
      <div className="container mt-8">
        <ul className="flex flex-nowrap w-full overflow-x-auto">
          <li className="relative flex flex-1 flex-col items-center px-8 py-2 hover:bg-raisin-black rounded">
            <span className="text-white font-sans font-medium">
              Repositories
            </span>
            <span className="bg-medium-state-blue absolute bottom-1 inline-block mt-1 w-10 h-1 rounded-full" />
          </li>
          <li className="relative flex flex-1 flex-col items-center px-8 py-2 hover:bg-raisin-black">
            <span className="text-cadet-grey font-sans font-medium">Blog</span>
            <span className="absolute bottom-1 inline-block mt-1 w-10 h-1 bg-none rounded-full" />
          </li>
          <li className="relative flex flex-1 flex-col items-center px-8 py-2 hover:bg-raisin-black">
            <span className="text-cadet-grey font-sans font-medium">
              Experience
            </span>
            <span className="absolute bottom-1 inline-block mt-1 w-10 h-1 bg-none rounded-full" />
          </li>
          <li className="relative flex flex-1 flex-col items-center px-8 py-2 hover:bg-raisin-black">
            <span className="text-cadet-grey font-sans font-medium">
              Education
            </span>
            <span className="absolute bottom-1 inline-block mt-1 w-10 h-1 bg-none rounded-full" />
          </li>
          <li className="relative flex flex-1 flex-col items-center px-8 py-2 hover:bg-raisin-black">
            <span className="text-cadet-grey font-sans font-medium">
              Contact
            </span>
            <span className="absolute bottom-1 inline-block mt-1 w-10 h-1 bg-none rounded-full" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Temp;
