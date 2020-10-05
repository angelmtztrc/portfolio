import React from 'react';

// Containers
import Layout from '../containers/Layout';

const BlogPage = () => {
  return (
    <Layout>
      <main className="container mx-auto mb-auto py-6 lg:py-10 px-8 lg:px-0">
        <section className="mb-10">
          <h1 className="text-4xl font-semibold">Blog</h1>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            cumque veritatis. Porro ullam nulla doloremque voluptatem
            dignissimos maiores, ab corporis reprehenderit molestiae natus
            aliquid odit veritatis architecto nobis dicta facere.
          </p>
        </section>
      </main>
    </Layout>
  );
};

export default BlogPage;
