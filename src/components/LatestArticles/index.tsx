import Article from './Article';

const LatestArticles = () => {
  return (
    <section className="mt-64">
      <h2 className="font-display text-3xl leading-7 tracking-[-1px] font-medium text-center text-primary-300">
        Enjoy my latest articles
      </h2>
      <div className="container mx-auto">
        <Article />
      </div>
    </section>
  );
};

export default LatestArticles;
