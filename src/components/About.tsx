const About = () => {
  return (
    <section className="container mx-auto mt-64 text-primary-300 flex justify-between">
      <div className="w-3/5">
        <h2 className="font-display text-2xl leading-7 tracking-[-1px] font-medium">
          About Me
        </h2>
        <p className="font-body font-semibold leading-[3.375rem] text-4xl text-content-description mt-5">
          I&apos;m a self-taught developer, who is passionate about everything
          related to web development. I love to build projects that help people
          do their tasks more easily and efficiently.
        </p>
        <div className="mt-8">
          <h3 className="font-display font-medium text-base leading-5 tracking-[0.5px] text-content-darkest">
            Let&apos;s Connect
          </h3>
        </div>
      </div>
      <div className="w-full max-w-80">
        <figure className="aspect-square border border-white/[0.15] bg-white/[0.08] p-8 rounded-2xl"></figure>
      </div>
    </section>
  );
};

export default About;
