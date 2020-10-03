import React from 'react';

// Containers
import Layout from '../containers/Layout';

const IndexPage = () => (
  <Layout>
    <div className="py-6 lg:py-24 flex justify-center items-center">
      <div class="grid grid-cols-2 gap-12 lg:gap-10">
        <div class="col-span-2 lg:col-span-1 flex flex-col justify-center text-dark">
          <h1 class="text-3xl lg:text-4xl font-bold mb-4">
            Hi, I'm Angel Martinez!
          </h1>
          <p class="text-base lg:text-lg">
            Also known as angel_codes, I am a developer with more than 4 years
            of experience mainly working in both Front-end and Back-end
            JavaScript environments. I currently live in Coah, Mexico.
          </p>
          <div></div>
        </div>
        <div class="col-span-2 lg:col-span-1">
          {/* <img
                class="w-full object-cover"
                src="assets/images/home-image.svg"
              /> */}
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
