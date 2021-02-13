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
        <div className="-mt-10 p-6 w-11/12 bg-primary-400 shadow-lg">
          <ul className="flex items-center space-x-4">
            <li className="text-secondary-100 text-sm">Tutorial</li>
            <li className="text-secondary-100 text-sm">Tips</li>
          </ul>
          <h3 className="mt-2 text-primary-100 text-xl font-bold">
            NextJS with TypeScript
          </h3>
          <span className="text-primary-300 text-sm">January 25, 2021</span>
          <p className="mt-4 text-primary-200 text-base">
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
