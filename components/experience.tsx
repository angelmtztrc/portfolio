const Experience = () => {
  return (
    <section className="border-line border-b py-12">
      <div className="mb-8">
        <h2 className="text-muted-foreground text-xs tracking-widest uppercase">
          {"// Experience"}
        </h2>
      </div>
      <div className="space-y-6">
        <div className="border-line border-b pb-6 last:border-b-0">
          <div className="mb-2 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <h3 className="text-foreground text-sm">
              Software Engineer{" "}
              <span className="text-muted-foreground text-xs">
                @ MedTrainer
              </span>
            </h3>
            <span className="text-muted-foreground text-xs tracking-wide">
              Aug 2023 - Present
            </span>
          </div>
          <p className="text-muted-foreground max-w-10/12 text-xs">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque hic
            vero aliquid provident. Vero natus, beatae molestias error iure
            aspernatur.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
