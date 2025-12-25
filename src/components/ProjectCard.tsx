interface ProjectCardProps {
  title: string;
  category: string;
  year: string;
  image: string;
  index: number;
}

const ProjectCard = ({ title, category, year, image, index }: ProjectCardProps) => {
  return (
    <article 
      className="group cursor-pointer opacity-0 animate-fade-up"
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="aspect-[4/3] bg-muted overflow-hidden mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-xl md:text-2xl mb-1">{title}</h3>
          <p className="font-body text-sm text-muted-foreground">{category}</p>
        </div>
        <span className="font-body text-sm text-muted-foreground">{year}</span>
      </div>
    </article>
  );
};

export default ProjectCard;
