import { PROJECTS } from "@/data/projects";

const Projects = () => {
  return (
    <section id="projects" className="border-line border-b py-12">
      <div className="mb-8">
        <h2 className="text-muted-foreground text-xs tracking-widest uppercase">
          {"// Projects"}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {PROJECTS.map((project, index) => (
          <div
            key={project.name + index}
            className="group border-line md:border-line hover:bg-surface border-b bg-transparent p-6 transition-colors md:border-r"
          >
            <figure className="bg-surface relative mb-4 h-36 w-full overflow-hidden"></figure>
            <div className="mb-4 flex items-start justify-between">
              <span className="text-dim text-xs">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-muted-foreground border-line border px-2 py-0.5 text-xs tracking-widest uppercase">
                {project.status}
              </span>
            </div>
            <h3 className="text-foreground mb-4 text-base tracking-wide uppercase">
              {project.name}
            </h3>
            <p className="text-muted-foreground mb-5 text-xs leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={tech + techIndex}
                  className="text-tag-fg bg-tag-bg px-2 py-0.5 text-xs tracking-wide"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
