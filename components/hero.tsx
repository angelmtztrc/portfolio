const Hero = () => {
  return (
    <section className="py-16 md:py-24 border-b border-line">
      <div className="mb-3">
        <h2 className="text-muted-foreground text-xs tracking-widest uppercase">
          {'// Identification'}
        </h2>
      </div>
      <h1 className="uppercase text-4xl md:text-7xl font-normal text-foreground tracking-tight text-balance leading-none mb-4">
        Angel
        <br />
        <span className="text-muted-foreground">Martinez</span>
        <span className="text-foreground ml-1 inline-block animate-blink">
          _
        </span>
      </h1>
      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mt-6">
        <p className="text-muted-foreground text-sm tracking-widest uppercase">
          Software Engineer
        </p>
        <span className="hidden md:block text-line">/</span>
        <p className="text-muted-foreground text-sm tracking-widest uppercase">
          TypeScript Enthusiast
        </p>
        <span className="hidden md:block text-line">/</span>
        <p className="text-muted-foreground text-sm tracking-widest uppercase">
          Coahuila, México
        </p>
      </div>
      <p className="mt-8 text-foreground/70 text-sm leading-relaxed max-w-xl">
        I create practical digital solutions with TypeScript, focusing on clean
        interfaces, solid architecture, and tools that help people get things
        done faster.
      </p>
      <div className="flex mt-10 gap-4">
        <a
          href=""
          className="px-5 py-2.5 bg-foreground text-background text-xs tracking-widest uppercase hover:bg-foreground/80 transition-colors"
        >
          GitHub
        </a>
        <a
          href=""
          className="px-5 py-2.5 bg-transparent border border-line text-foreground text-xs tracking-widest uppercase hover:bg-surface transition-colors"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;
