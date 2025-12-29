import { Palette, Code, Layers, Target } from "lucide-react";

const expertiseItems = [
  {
    icon: Palette,
    title: "UI Design & UX Research",
    description: "Crafting intuitive interfaces through user-centered design methodologies and research.",
  },
  {
    icon: Code,
    title: "Rapid Prototyping (Frontend)",
    description: "Building functional prototypes quickly to validate ideas and iterate fast.",
  },
  {
    icon: Layers,
    title: "Design Systems",
    description: "Creating scalable component libraries that ensure consistency across products.",
  },
  {
    icon: Target,
    title: "Product Management",
    description: "Driving product strategy, roadmaps, and cross-functional collaboration.",
  },
];

const Expertise = () => {
  return (
    <section id="expertise" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4 animate-fade-in">
            What I Do
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Areas of Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mb-12 animate-fade-in">
            Combining design thinking with technical execution to deliver exceptional digital experiences.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseItems.map((item, index) => (
              <div
                key={item.title}
                className="group bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
