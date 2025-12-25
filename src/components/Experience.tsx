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
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="container">
        <div className="mb-12 md:mb-16">
          <p className="font-body text-sm tracking-widest text-muted-foreground uppercase mb-3">
            Career Journey
          </p>
          <h2 className="font-display text-4xl md:text-5xl tracking-tight">
            Experience
          </h2>
        </div>

        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <article 
              key={index}
              className="py-8 border-t border-border last:border-b group"
            >
              <div className="grid md:grid-cols-[1fr_2fr] gap-4 md:gap-8">
                <div>
                  <h3 className="font-display text-xl md:text-2xl mb-1">{exp.role}</h3>
                  <p className="font-body text-muted-foreground">{exp.company}</p>
                  <p className="font-body text-sm text-muted-foreground mt-1">{exp.period}</p>
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-foreground mt-1.5 w-1 h-1 bg-foreground rounded-full shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
