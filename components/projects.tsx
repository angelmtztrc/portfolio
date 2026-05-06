const Projects = () => {
  return (
    <section className="border-line border-b py-12">
      <div className="mb-8">
        <h2 className="text-muted-foreground text-xs tracking-widest uppercase">
          {"// Projects"}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="group border-line md:border-line hover:bg-surface border-b bg-transparent p-6 transition-colors md:border-r">
          <figure className="bg-surface relative mb-4 h-36 w-full overflow-hidden"></figure>
          <div className="mb-4 flex items-start justify-between">
            <span className="text-dim text-xs">01</span>
            <span className="text-muted-foreground border-line border px-2 py-0.5 text-xs tracking-widest uppercase">
              Deployed
            </span>
          </div>
          <h3 className="text-foreground mb-4 text-base tracking-wide uppercase">
            Passgen
          </h3>
          <p className="text-muted-foreground mb-5 text-xs leading-relaxed">
            Command-line tool built with Deno and TypeScript that generates
            random and cryptographically secure passwords.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="text-tag-fg bg-tag-bg px-2 py-0.5 text-xs tracking-wide">
              TypeScript
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
