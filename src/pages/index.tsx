import { Fragment } from 'react';
import type { NextPage } from 'next';

const HomePage: NextPage<HomePageProps> = () => {
  return (
    <Fragment>
      <div className="h-48 bg-gradient-to-tr from-indigo-400 to-indigo-500" />
      <main className="container mx-auto -mt-12 flex-1">
        <div className="grid grid-cols-12 gap-4">
          <section className="col-span-12 space-y-4">
            <div className="flex flex-col items-center justify-center rounded-lg border border-raisin-black bg-eerie-black p-4">
              <div className="h-28 w-28 rounded-full border border-indigo-500 bg-raisin-black"></div>
              <div className="mt-4 text-center">
                <h2 className="font-display text-2xl font-bold text-white">Angel Martinez</h2>
                <div className="mt-4 space-y-2">
                  <p className="font-body text-base font-light text-cadet-grey-light">
                    Front-end Developer • Coahuila, México
                  </p>
                  <p className="font-body text-base font-light text-cadet-grey-light">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, modi!
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center rounded-lg border border-raisin-black bg-eerie-black p-4"></div>
          </section>
          <section className="col-span-12"></section>
        </div>
      </main>
    </Fragment>
  );
};

type HomePageProps = {};

export default HomePage;
