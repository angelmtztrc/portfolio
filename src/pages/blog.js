import React from 'react';

// Containers
import Layout from '../containers/Layout';

const BlogPage = () => {
  return (
    <Layout>
      <main className="container mb-auto mx-auto px-8 py-6 lg:px-0 lg:py-10">
        <section className="mb-16 text-dark-primary dark:text-light-primary">
          <h1 className="text-4xl font-semibold">Blog</h1>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            cumque veritatis. Porro ullam nulla doloremque voluptatem
            dignissimos maiores, ab corporis reprehenderit molestiae natus
            aliquid odit veritatis architecto nobis dicta facere.
          </p>
        </section>
        <section className="grid gap-6 grid-cols-1 lg:grid-cols-3">
          <article className="max-w-sm dark:bg-dark-primary bg-light-primary rounded-md shadow-md">
            <div className="h-48 bg-gray-500 rounded-t-md"></div>
            <div className="text-dark-100 p-6 dark:text-light-primary">
              <h2 className="mb-2 text-lg font-semibold">
                Coffee. The real power of a Developer
              </h2>
              <p className="mb-4 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, cumque veritatis. Porro ullam nulla doloremque
                voluptatem dignissimos maiores
              </p>
              <div className="flex justify-end w-full">
                <a className="dark:hover:bg-light-primary dark:hover:text-dark-primary px-2 py-1 hover:text-light-primary text-sm font-bold hover:bg-dark-primary border-2 border-dark-primary dark:border-light-primary uppercase transition-colors duration-300 ease-in-out">
                  Read more
                </a>
              </div>
            </div>
          </article>
        </section>
      </main>
    </Layout>
  );
};

export default BlogPage;
