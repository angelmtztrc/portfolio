const Welcome = () => {
  return (
    <section className="flex items-center justify-center min-h-screen">
      <div className="container mx-auto">
        <h1 className="font-sans">
          <span className="block text-primary-100 text-xl">Hello, I'm</span>
          <span className="block text-primary-100 text-6xl font-extrabold">
            Angel Martinez
          </span>
          <span className="block mt-2 text-primary-300 text-4xl font-extrabold">
            I'm a JavaScript Developer
          </span>
        </h1>
        <p className="mt-4 w-2/5 text-primary-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
          odio eos quis nobis ratione delectus esse at magnam numquam
          perspiciatis.
        </p>
        {/* TODO: Create a custom class for buttons */}
        <a className="inline-block mt-4 px-4 py-2 hover:text-primary-100 text-secondary-100 font-sans hover:bg-secondary-100 border border-secondary-100">
          Get in touch
        </a>
      </div>
    </section>
  );
};

export default Welcome;
