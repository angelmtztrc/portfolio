import React from 'react';
import WelcomeIcon from '../svg/home.inline.svg';

// Containers
import Layout from '../containers/Layout';

const IndexPage = () => (
  <Layout>
    <main className="container mx-auto my-auto px-8 lg:px-0">
      <div className="flex items-center justify-center py-6">
        <div className="grid gap-12 grid-cols-2 lg:gap-10">
          <div className="flex flex-col col-span-2 justify-center text-dark-primary lg:col-span-1">
            <h1 className="mb-4 text-3xl font-bold lg:text-4xl">
              Hi, I'm Angel Martinez!
            </h1>
            <p className="text-base lg:text-lg">
              Also known as angel_codes, I am a developer with more than 4 years
              of experience mainly working in both Front-end and Back-end
              JavaScript environments. I currently live in Coah, Mexico.
            </p>
            <div>{/* TODO: add icons */}</div>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <WelcomeIcon className="w-full h-64 object-cover lg:h-full" />
          </div>
        </div>
      </div>
    </main>
  </Layout>
);

export default IndexPage;
