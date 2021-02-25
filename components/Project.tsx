export type ProjectProps = {};

const Project = () => {
  return (
    <div className="col-span-3 md:col-span-2 lg:col-span-1">
      <img
        src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80"
        alt="Some picture"
      />
      <div className="mt-5 text-center font-sans">
        <p className="text-xl">Some Amazing Project</p>
        <p className="mt-2 text-gray-600 text-base uppercase">Back-End</p>
      </div>
    </div>
  );
};

export default Project;
