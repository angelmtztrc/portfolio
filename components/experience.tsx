const Experience = () => {
  return (
    <section className="border-b border-line py-12">
      <div className="mb-8">
        <h2 className="text-muted-foreground text-xs tracking-widest uppercase">
          {'// Experience'}
        </h2>
      </div>
      <div className="space-y-6">
        <div className="pb-6 border-b border-line last:border-b-0">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
            <h3 className="text-foreground text-sm ">
              Software Engineer{' '}
              <span className="text-muted-foreground text-xs">
                @ MedTrainer
              </span>
            </h3>
            <span className="text-muted-foreground text-xs tracking-wide">
              Aug 2023 - Present
            </span>
          </div>
          <p className="text-muted-foreground text-xs max-w-10/12">
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
