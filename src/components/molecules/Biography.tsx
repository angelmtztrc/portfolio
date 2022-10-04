const Biography = () => {
  return (
    <section className=" flex flex-col items-center justify-center rounded-lg border border-dark-900 bg-darken-900 p-5 ">
      <figure className="h-24 w-24 rounded-full bg-secondary-500" />
      <h1 className="mt-5 text-center font-display text-2xl font-bold text-white">
        Angel Martinez
        <div className="mt-4 font-body text-sm font-light text-gray-900">
          <span>Front-end Developer • </span>
          <span>Coahuila, México</span>
        </div>
      </h1>
      <p className="mt-4 text-center font-body text-sm font-light text-gray-900">
        I&apos;m a self-taught developer, who likes to create interesting projects that can help
        people do their chores more easy and fast.
      </p>
    </section>
  );
};

export default Biography;
