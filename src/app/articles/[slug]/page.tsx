import { ArrowSmallLeftIcon } from '@heroicons/react/24/solid';

import { Button } from '@atoms';

const ArticlePage = () => {
  return (
    <article className="rounded-lg border border-dark-900 bg-darken-900 px-12 py-8">
      <header>
        <div>
          {/* TODO: LEFT ARROW ICON */}
          <Button className="flex items-center space-x-2 px-6 py-3">
            <ArrowSmallLeftIcon className="h-4 w-4 text-white" />
            <span>Back</span>
          </Button>
        </div>
        <figure className="mt-4 aspect-[16/8] w-full overflow-hidden rounded-lg">
          <div className="h-full w-full bg-secondary-500" />
        </figure>
        <div className="mt-6 px-12">
          <h1 className="font-display text-4xl font-bold text-white">
            Nest.js - Introduction (Part I)
          </h1>
          <ul className="mt-2 flex items-center space-x-2">
            <li className="font-body font-light text-gray-800">
              <span className="text-red-500">#</span>typescript
            </li>
            <li className="font-body font-light text-gray-800">
              <span className="text-purple-500">#</span>backend
            </li>
            <li className="font-body font-light text-gray-800">
              <span className="text-green-500">#</span>nest
            </li>
            <li className="font-body font-light text-gray-800">
              <span className="text-blue-500">#</span>prisma
            </li>
          </ul>
        </div>
      </header>
      <div className="mt-12 px-12">
        {/* TODO: MARKDOWN RENDER */}
        <p className="font-body font-light text-greyish-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque hic quo dolore unde
          consectetur expedita perspiciatis natus rem perferendis facere.
        </p>
        <p className="font-body font-light text-greyish-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque hic quo dolore unde
          consectetur expedita perspiciatis natus rem perferendis facere.
        </p>
        <p className="font-body font-light text-greyish-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque hic quo dolore unde
          consectetur expedita perspiciatis natus rem perferendis facere.
        </p>
        <p className="font-body font-light text-greyish-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque hic quo dolore unde
          consectetur expedita perspiciatis natus rem perferendis facere.
        </p>
      </div>
    </article>
  );
};

export default ArticlePage;
