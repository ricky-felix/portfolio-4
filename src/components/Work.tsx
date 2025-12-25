import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Noir Banking",
    category: "Fintech App Design",
    year: "2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    title: "Minimal Store",
    category: "E-commerce Platform",
    year: "2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    title: "Flow Analytics",
    category: "Dashboard Design",
    year: "2023",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
  },
  {
    title: "Serene Wellness",
    category: "Mobile App",
    year: "2023",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
  },
];

const Work = () => {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="container">
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <div>
            <p className="font-body text-sm tracking-widest text-muted-foreground uppercase mb-3">
              Selected Projects
            </p>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight">
              Recent work
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
