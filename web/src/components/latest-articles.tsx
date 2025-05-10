import Image from 'next/image';

export const LatestArticles = () => {
  return (
    <section className="mt-64">
      <h2 className="font-display text-2xl leading-7 tracking-[-1px] font-medium text-primary-300 text-center">
        Enjoy My Latest Articles
      </h2>
      <div className="container mx-auto grid grid-cols-2 gap-16 mt-12 relative">
        <Image
          fill
          alt="nebula"
          src="/assets/raw-nebula.svg"
          className="absolute blur-[75px] inset-x-0 !w-96 -z-10 !top-1/4 !left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        <article className="rounded-2xl p-6 bg-white/[0.08] border border-white/[0.15]">
          <figure className="bg-red-500 aspect-video w-full rounded-lg"></figure>
          <div className="mt-8">
            <h3 className="font-display text-3xl leading-8 tracking-[-1px] font-bold bg-clip-text bg-gradient-to-r from-content-title to-content-title/75 text-transparent">
              Nest.js - Introduction (Part 1)
            </h3>
            <p className="mt-6 font-body text-lg leading-8 text-content-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              voluptatem fuga odio velit reprehenderit ipsum magni laboriosam ab
              rem sapiente.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};
