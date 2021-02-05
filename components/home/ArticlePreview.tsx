const ArticlePreview = () => {
  return (
    <article>
      <a
        href="#"
        className="flex flex-col items-center justify-center mx-auto max-w-sm"
      >
        <div className="w-full">
          <img
            className="w-full h-56"
            src="https://images.unsplash.com/photo-1557599443-2071a2df9c19?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1382&q=80"
          />
        </div>
        <div className="-mt-10 p-6 w-11/12 bg-gray-100 border border-blue-200 shadow-lg">
          <ul className="flex items-center space-x-4">
            <li className="text-gray-500 text-sm">Tutorial</li>
            <li className="text-gray-500 text-sm">Tips</li>
          </ul>
          <h3 className="mt-2 text-gray-900 text-xl font-bold">
            NextJS with TypeScript
          </h3>
          <span className="text-gray-600 text-sm">January 25, 2021</span>
          <p className="mt-4 text-gray-800 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
            minima autem, aut natus repellendus quidem officia ea quos qui
            veniam?
          </p>
        </div>
      </a>
    </article>
  );
};

export default ArticlePreview;
