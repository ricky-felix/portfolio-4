import { Palette, Code, Layers, Target } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const expertiseItems = [
	{
		icon: Palette,
		title: "Design Thinking, UI Design, & UX Research",
		description:
			"Crafting intuitive interfaces through user-centered design methodologies and research.",
	},
	{
		icon: Code,
		title: "Frontend Programming (React.js)",
		description:
			"Building functional prototypes quickly to validate ideas and iterate fast.",
	},
	{
		icon: Layers,
		title: "Design Systems",
		description:
			"Creating scalable component libraries that ensure consistency across products.",
	},
	{
		icon: Target,
		title: "Product Management",
		description:
			"Driving product strategy, PRD(s), and cross-functional collaboration.",
	},
];

const Expertise = () => {
	const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
	const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({
		threshold: 0.1,
	});

	return (
		<section id="expertise" className="py-20 md:py-32 bg-muted/30">
			<div className="container px-6 md:px-8">
				<div className="max-w-6xl mx-auto">
					<div
						ref={headerRef as React.RefObject<HTMLDivElement>}
						className={`scroll-hidden ${headerVisible ? "scroll-visible" : ""}`}
					>
						<p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
							What I Do
						</p>
						<h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
							Areas of Expertise
						</h2>
						<p className="text-muted-foreground text-lg max-w-2xl mb-12">
							Combining design thinking with technical execution to deliver
							exceptional digital experiences.
						</p>
					</div>

					<div
						ref={gridRef as React.RefObject<HTMLDivElement>}
						className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
					>
						{expertiseItems.map((item, index) => (
							<div
								key={item.title}
								className={`group bg-card border border-border rounded-2xl p-6 hover-lift glow-on-hover scroll-hidden ${
									gridVisible ? "scroll-visible" : ""
								}`}
								style={{ transitionDelay: `${index * 100}ms` }}
							>
								<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
									<item.icon className="w-6 h-6 text-primary transition-transform duration-300 group-hover:rotate-6" />
								</div>
								<h3 className="font-display font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors duration-300">
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
