import React from 'react';

// Containers
import Layout from '../containers/Layout';

const BlogPage = () => {
  return (
    <Layout>
      <main className="py-6 lg:py-10 px-8 lg:px-0 container mx-auto mb-auto">
        <section className="mb-16 text-dark-primary dark:text-light-primary">
          <h1 className="text-4xl font-semibold">Blog</h1>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            cumque veritatis. Porro ullam nulla doloremque voluptatem
            dignissimos maiores, ab corporis reprehenderit molestiae natus
            aliquid odit veritatis architecto nobis dicta facere.
          </p>
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <article className="max-w-sm bg-light-primary dark:bg-dark-primary shadow-md rounded-md">
            <div className="h-48 rounded-t-md bg-gray-500"></div>
            <div className="p-6 text-dark-100 dark:text-light-primary">
              <h2 className="mb-2 text-lg font-semibold">
                Coffee. The real power of a Developer
              </h2>
              <p className="mb-4 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas, cumque veritatis. Porro ullam nulla doloremque
                voluptatem dignissimos maiores
              </p>
              <div className="w-full flex justify-end">
                <a className="px-2 py-1 text-sm font-bold uppercase border-2 border-dark-primary hover:bg-dark-primary hover:text-light-primary dark:border-light-primary dark:hover:bg-light-primary dark:hover:text-dark-primary transition-colors ease-in-out duration-300">
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
