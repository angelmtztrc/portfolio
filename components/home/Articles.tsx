import ArticlePreview from '../ArticlePreview';

const Articles = () => {
  return (
    <section className="mt-12">
      <div className="container mx-auto">
        <div>
          <h2 className="flex items-center space-x-4">
            <span className="text-primary-600 text-4xl font-medium">
              Articles
            </span>
          </h2>
          <p className="mt-6 text-gray-500 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            repellendus?
          </p>
        </div>
        <div className="flex flex-col justify-center mt-10 space-x-8 lg:flex-row">
          <ArticlePreview />
        </div>
      </div>
    </section>
  );
};

export default Articles;
