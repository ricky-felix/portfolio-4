import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

const Work = () => {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="container">
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <div>
            <p className="font-body text-sm tracking-widest text-muted-foreground uppercase mb-3">
              Featured Projects
            </p>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight">
              Selected work
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
