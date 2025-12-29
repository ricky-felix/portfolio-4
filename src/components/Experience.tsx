import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const experiences = [
  {
    role: "Product Manager",
    company: "Topremit",
    period: "Apr 2025 – Jun 2025",
    highlights: [
      "Authored PRDs, user flows, and acceptance criteria for 3 feature releases",
      "Reduced repeated support tickets by 25% through FAQ redesign",
      "Built SQL dashboards to track feature adoption and user behaviour",
      "Cut post-launch defect rate by 40% through proactive QA testing",
    ],
  },
  {
    role: "UI/UX Developer",
    company: "TradePro (formerly Inter Pan Pasifik Futures)",
    period: "Aug 2024 – Mar 2025",
    highlights: [
      "Reduced design-to-dev handoff iterations by 30% with Figma prototypes",
      "Built functional front-end prototypes using HTML, CSS, and JavaScript",
      "Led Git training for team members, improving version control adoption",
      "Refactored legacy pages using Bootstrap for better performance",
    ],
  },
  {
    role: "Web Designer / Developer",
    company: "All in IT Solutions",
    period: "Aug 2022 – Nov 2022",
    highlights: [
      "Led end-to-end website redesign using HTML/CSS on WordPress",
      "Designed brand assets including marketing materials and social content",
      "Translated business requirements into visual designs",
    ],
  },
  {
    role: "Director of Information",
    company: "PPIA (Indonesian Student Association in Australia)",
    period: "Jul 2021 – Aug 2022",
    highlights: [
      "Led 20-person cross-functional team for website redesign",
      "Increased user engagement by 40%",
      "Implemented GitHub Projects for issue tracking",
    ],
  },
];

const Experience = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container">
        <div 
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`mb-12 md:mb-16 scroll-hidden ${headerVisible ? 'scroll-visible' : ''}`}
        >
          <p className="font-body text-sm tracking-widest text-muted-foreground uppercase mb-3">
            Career Journey
          </p>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight">
            Experience
          </h2>
        </div>

        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ExperienceItemProps {
  exp: {
    role: string;
    company: string;
    period: string;
    highlights: string[];
  };
  index: number;
}

const ExperienceItem = ({ exp, index }: ExperienceItemProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <article 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-8 border-t border-border last:border-b group hover-lift scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="grid md:grid-cols-[1fr_2fr] gap-4 md:gap-8">
        <div>
          <h3 className="font-display text-xl md:text-2xl mb-1 group-hover:text-primary transition-colors duration-300">{exp.role}</h3>
          <p className="font-body text-muted-foreground">{exp.company}</p>
          <p className="font-body text-sm text-muted-foreground mt-1">{exp.period}</p>
        </div>
        <ul className="space-y-2">
          {exp.highlights.map((highlight, i) => (
            <li key={i} className="font-body text-sm text-muted-foreground flex items-start gap-3 group/item">
              <span className="mt-1.5 w-2 h-2 bg-primary rounded-full shrink-0 transition-transform duration-300 group-hover/item:scale-125" />
              <span className="group-hover/item:text-foreground transition-colors duration-300">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default Experience;
