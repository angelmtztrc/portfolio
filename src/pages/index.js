import React from 'react';
import WelcomeIcon from '../svg/home.inline.svg';

// Containers
import Layout from '../containers/Layout';

const IndexPage = () => (
  <Layout>
    <main className="container mx-auto my-auto px-8 lg:px-0">
      <div className="py-6 flex justify-center items-center">
        <div className="grid grid-cols-2 gap-12 lg:gap-10">
          <div className="col-span-2 lg:col-span-1 flex flex-col justify-center text-dark">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              Hi, I'm Angel Martinez!
            </h1>
            <p className="text-base lg:text-lg">
              Also known as angel_codes, I am a developer with more than 4 years
              of experience mainly working in both Front-end and Back-end
              JavaScript environments. I currently live in Coah, Mexico.
            </p>
            <div></div>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <WelcomeIcon className="w-full object-cover" />
          </div>
        </div>
      </div>
    </main>
  </Layout>
);

export default IndexPage;
