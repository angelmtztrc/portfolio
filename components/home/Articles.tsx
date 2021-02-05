// components
import SubHeading from '../SubHeading';
import ArticlePreview from './ArticlePreview';

const Articles = () => {
  return (
    <section className="mt-32">
      <div className="container mx-auto">
        <SubHeading number="04" text="Latest Articles" />
        <div className="flex justify-center">
          <ArticlePreview />
        </div>
      </div>
    </section>
  );
};

export default Articles;
