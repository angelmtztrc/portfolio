const Hero = () => {
  return (
    <section className="border-line border-b py-16 md:py-24">
      <div className="mb-3">
        <h2 className="text-muted-foreground text-xs tracking-widest uppercase">
          {"// Identification"}
        </h2>
      </div>
      <h1 className="text-foreground mb-4 text-4xl leading-none font-normal tracking-tight text-balance uppercase md:text-7xl">
        Angel
        <br />
        <span className="text-muted-foreground">Martinez</span>
        <span className="text-foreground animate-blink ml-1 inline-block">
          _
        </span>
      </h1>
      <div className="mt-6 flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
        <p className="text-muted-foreground text-sm tracking-widest uppercase">
          Software Engineer
        </p>
        <span className="text-line hidden md:block">/</span>
        <p className="text-muted-foreground text-sm tracking-widest uppercase">
          TypeScript Enthusiast
        </p>
        <span className="text-line hidden md:block">/</span>
        <p className="text-muted-foreground text-sm tracking-widest uppercase">
          Coahuila, México
        </p>
      </div>
      <p className="text-foreground/70 mt-8 max-w-xl text-sm leading-relaxed">
        I create practical digital solutions with TypeScript, focusing on clean
        interfaces, solid architecture, and tools that help people get things
        done faster.
      </p>
      <div className="mt-10 flex gap-4">
        <a
          href=""
          className="bg-foreground text-background hover:bg-foreground/80 px-5 py-2.5 text-xs tracking-widest uppercase transition-colors"
        >
          GitHub
        </a>
        <a
          href=""
          className="border-line text-foreground hover:bg-surface border bg-transparent px-5 py-2.5 text-xs tracking-widest uppercase transition-colors"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;
