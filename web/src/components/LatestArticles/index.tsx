import Image from 'next/image';
import Article from './Article';

const LatestArticles = () => {
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
        <Article />
        <Article />
      </div>
    </section>
  );
};

export default LatestArticles;
