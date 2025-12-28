import { Link } from "react-router-dom";

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
  return (
    <article 
      className="group opacity-0 animate-fade-up"
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <Link to={`/work/${id}`} className="block">
        <div className="aspect-[4/3] bg-muted overflow-hidden mb-4">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-xl md:text-2xl mb-1 group-hover:text-primary transition-colors">{title}</h3>
              <p className="font-body text-sm text-muted-foreground">{category}</p>
            </div>
            <span className="font-body text-sm text-muted-foreground shrink-0">{year}</span>
          </div>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span 
                key={tag} 
                className={`font-body text-xs px-2 py-1 ${
                  i === 0 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
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
