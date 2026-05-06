const Communications = () => {
  return (
    <section className="border-line border-b py-12">
      <div className="mb-8">
        <h2 className="text-muted-foreground text-xs tracking-widest uppercase">
          {"// Communications"}
        </h2>
      </div>
      <div className="border-line grid grid-cols-2 gap-0 border md:grid-cols-3">
        <a
          href=""
          className="group hover:bg-surface border-line flex flex-col gap-2 border-b p-6 transition-colors md:border-r md:border-b-0"
        >
          <span className="text-muted-foreground text-xs tracking-widest uppercase">
            GitHub
          </span>
          <span className="text-foreground group-hover:text-muted-foreground text-sm transition-colors">
            github.com/angelmtztrc
          </span>
          <span className="text-dim group-hover:text-foreground mt-auto text-xs transition-colors">
            →
          </span>
        </a>
        <a
          href=""
          className="group hover:bg-surface border-line flex flex-col gap-2 border-b p-6 transition-colors md:border-r md:border-b-0"
        >
          <span className="text-muted-foreground text-xs tracking-widest uppercase">
            LinkedIn
          </span>
          <span className="text-foreground group-hover:text-muted-foreground text-sm transition-colors">
            linkedin.com/in/angelmtztrc
          </span>
          <span className="text-dim group-hover:text-foreground mt-auto text-xs transition-colors">
            →
          </span>
        </a>
        <a
          href=""
          className="group hover:bg-surface border-line flex flex-col gap-2 border-b p-6 transition-colors md:border-r md:border-b-0"
        >
          <span className="text-muted-foreground text-xs tracking-widest uppercase">
            Resume
          </span>
          <span className="text-foreground group-hover:text-muted-foreground text-sm transition-colors">
            download pdf
          </span>
          <span className="text-dim group-hover:text-foreground mt-auto text-xs transition-colors">
            →
          </span>
        </a>
      </div>
    </section>
  );
};

export default Communications;
