import React from 'react';

// Containers
import Layout from '../containers/Layout';

const BlogPage = () => {
  return (
    <Layout>
      <main className="container mx-auto mb-auto py-6 lg:py-10 px-8 lg:px-0">
        <section className="mb-16 text-dark-100 dark:text-light-200">
          <h1 className="text-4xl font-semibold">Blog</h1>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            cumque veritatis. Porro ullam nulla doloremque voluptatem
            dignissimos maiores, ab corporis reprehenderit molestiae natus
            aliquid odit veritatis architecto nobis dicta facere.
          </p>
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <article className="max-w-sm bg-light-200 dark:bg-dark-100 shadow-md rounded-md ">
            <div className="h-48 rounded-t-md bg-gray-500"></div>
            <div className="p-6 text-dark-100 dark:text-light-200">
              <h2 className="mb-2 text-lg font-semibold">
                Coffee. The real power of a Developer
              </h2>
              <p className="mb-4 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, cumque veritatis. Porro ullam nulla doloremque
                voluptatem dignissimos maiores
              </p>
              <div className="w-full flex justify-end">
                <a className="px-2 py-1 hover:text-light-100 dark:text-light-200 hover:bg-dark-100 dark:hover:bg-dark-200 font-bold uppercase">
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
