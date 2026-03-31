import ProjectCard from "./ProjectCard";
import { projectCards } from "@/data/projectCards";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Work = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section id="work" className="py-24 md:py-32">
      <div className="container">
        <div 
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`flex items-end justify-between mb-12 md:mb-16 scroll-hidden ${headerVisible ? 'scroll-visible' : ''}`}
        >
          <div>
            <p className="font-body text-sm tracking-widest text-muted-foreground uppercase mb-3">
              Featured Projects
            </p>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight">
              Selected work (from 10+ projects)
            </h2>
          </div>
        </div>

        <div 
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className={`grid md:grid-cols-2 gap-8 md:gap-12 scroll-hidden ${gridVisible ? 'scroll-visible' : ''}`}
        >
          {projectCards.map((project, index) => (
            <ProjectCard key={project.id} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
