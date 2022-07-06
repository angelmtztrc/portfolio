import type { NextPage } from 'next';

const HomePage: NextPage<HomePageProps> = () => {
  return (
    <div>
      <p className="text-lg font-bold text-slate-900">Hello, World!</p>
    </div>
  );
};

type HomePageProps = {};

export default HomePage;
