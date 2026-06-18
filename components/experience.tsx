import { EXPERIENCE } from "@/data/experience";

const Experience = () => {
  return (
    <section id="experience" className="border-line border-b py-12">
      <div className="mb-8">
        <h2 className="text-muted-foreground text-xs tracking-widest uppercase">
          {"// Experience"}
        </h2>
      </div>
      <div className="space-y-6">
        {EXPERIENCE.map((experience, index) => (
          <div
            key={experience.company + index}
            className="border-line border-b pb-6 last:border-b-0"
          >
            <div className="mb-2 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <h3 className="text-foreground text-sm lg:text-base">
                {experience.position}{" "}
                <span className="text-muted-foreground text-xs lg:text-sm">
                  @ {experience.company}
                </span>
              </h3>
              <span className="text-muted-foreground text-xs lg:text-sm tracking-wide">
                {experience.duration}
              </span>
            </div>
            <p className="text-muted-foreground max-w-10/12 text-xs lg:text-base">
              {experience.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
