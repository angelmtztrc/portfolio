const ProjectPreview = () => {
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
        <div className="bg-primary-300 -mt-10 p-6 w-11/12 shadow-lg">
          <h3 className="text-primary-600 mt-2 text-xl font-bold">
            NextJS with TypeScript
          </h3>
          <ul className="flex items-center mt-1 space-x-4">
            <li className="text-gray-500 text-sm">Tutorial</li>
            <li className="text-gray-500 text-sm">Tips</li>
          </ul>
          <p className="mt-4 text-gray-500 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
            minima autem, aut natus repellendus quidem officia ea quos qui
            veniam?
          </p>
          <div className="flex mt-4 space-x-2">
            <button className="text-primary-600 hover:bg-primary-600 border-primary-600 px-4 py-2 hover:text-white text-sm font-medium border-2 transition-colors duration-300 ease-in">
              Preview
            </button>
            <button className="text-primary-600 hover:bg-primary-600 border-primary-600 px-4 py-2 hover:text-white text-sm font-medium border-2 transition-colors duration-300 ease-in">
              Code
            </button>
          </div>
        </div>
      </a>
    </article>
  );
};

export default ProjectPreview;
