const Projects = () => {
  return (
    <section className="border-b border-line py-12">
      <div className="mb-8">
        <h2 className="text-muted-foreground text-xs tracking-widest uppercase">
          {'// Projects'}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="group p-6 transition-colors bg-transparent border-b border-line md:border-r md:border-line hover:bg-surface">
          <figure className="relative w-full h-36 mb-4 overflow-hidden bg-surface"></figure>
          <div className="flex items-start justify-between mb-4">
            <span className="text-dim text-xs">01</span>
            <span className="text-muted-foreground text-xs tracking-widest border border-line px-2 py-0.5">
              Deployed
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
