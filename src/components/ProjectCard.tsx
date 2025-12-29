import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  image: string;
  index: number;
}

const ProjectCard = ({ id, title, category, year, description, tags, image, index }: ProjectCardProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <article 
      ref={ref as React.RefObject<HTMLElement>}
      className={`group scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Link to={`/work/${id}`} className="block bg-card border border-border rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
        <div className="aspect-[4/3] bg-muted overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <div className="p-5 space-y-3">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-xl md:text-2xl mb-1 group-hover:text-primary transition-colors duration-300">{title}</h3>
              <p className="font-body text-sm text-muted-foreground">{category}</p>
            </div>
            <span className="font-body text-sm text-muted-foreground shrink-0">{year}</span>
          </div>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span 
                key={tag} 
                className={`font-body text-xs px-2 py-1 rounded-md transition-all duration-300 hover:scale-105 ${
                  i === 0 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ProjectCard;
