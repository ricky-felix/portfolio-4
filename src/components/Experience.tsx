import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const experiences = [
	{
		role: "Self Employed UI/UX Engineer",
		company: "Titik Jalin",
		period: "Sept 2025 – Present",
		tag: "FREELANCE",
		description:
			"A solo freelancing project focused on UI/UX design and frontend development for small businesses, startups, and non-profits. I handle everything from user research and design to development and deployment.",
		metrics: [
			{ label: "3 projects to showcase" },
			{ label: "Built using React.js, Relume UI, and Supabase" },
			{ label: "Client-focused web solutions" },
			{ label: "www.titikjalin.space" },
		],
	},
	{
		role: "Product Manager",
		company: "Topremit",
		period: "Apr 2025 – Jun 2025 [3 months]",
		tag: "FINTECH",
		description:
			"Led product strategy for a fintech platform, driving user experience improvements through data-driven decision making and cross-functional collaboration.",
		metrics: [
			{ label: "25% fewer tickets" },
			{ label: "40% less defects" },
			{ label: "3 releases" },
			{ label: "www.topremit.com" },
		],
	},
	{
		role: "UI/UX Developer",
		company: "InterPan",
		period: "Aug 2024 – Mar 2025 [8 months]",
		tag: "TRADING PLATFORM",
		description:
			"Designed and developed responsive UI components, establishing design-to-development workflows that improved team velocity.",
		metrics: [
			{ label: "30% faster handoffs" },
			{ label: "3 team members" },
			{ label: "UI system" },
			{ label: "https://fxinterpan.com/" },
		],
	},
	{
		role: "Web Designer / Developer",
		company: "All in IT Solutions",
		period: "Aug 2022 – Nov 2022 [4 months]",
		tag: "AGENCY",
		description:
			"Delivered client-focused web solutions, combining design thinking with technical implementation to meet business objectives.",
		metrics: [
			{ label: "Full redesign" },
			{ label: "WordPress" },
			{ label: "Brand assets" },
			{ label: "https://allinit.com.au/solutions/" },
		],
	},
	{
		role: "Director of IT (Volunteer)",
		company: "PPIA Australia",
		period: "Jul 2021 – Aug 2022 [14 months]",
		tag: "NON-PROFIT",
		description:
			"Led cross-functional volunteer team to redesign and develop a student networking platform serving thousands of Indonesian students.",
		metrics: [
			{ label: "40% more engagement" },
			{ label: "20-person team" },
			{ label: "Frontend with React.js and Figma" },
			{ label: "https://www.ppi-australia.org/en" },
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
					className={`mb-12 md:mb-16 scroll-hidden ${
						headerVisible ? "scroll-visible" : ""
					}`}
				>
					<p className="font-body text-sm tracking-widest text-muted-foreground uppercase mb-3">
						Career Journey
					</p>
					<h2 className="font-display text-4xl md:text-5xl tracking-tight">
						Experience (~2 years)
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
		tag: string;
		description: string;
		metrics: { label: string }[];
	};
	index: number;
}

const ExperienceItem = ({ exp, index }: ExperienceItemProps) => {
	const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
	const number = (index + 1).toString().padStart(2, "0");

	return (
		<article
			ref={ref as React.RefObject<HTMLElement>}
			className={`relative py-12 md:py-16 border-t border-border last:border-b group hover-lift scroll-hidden ${
				isVisible ? "scroll-visible" : ""
			}`}
			style={{ transitionDelay: `${index * 100}ms` }}
		>
			{/* Large background number */}
			<div className="experience-number absolute top-8 right-4 md:right-8 text-[150px] md:text-[200px] font-display font-bold leading-none pointer-events-none select-none">
				{number}
			</div>

			<div className="relative z-10 px-4 md:px-8 pr-24 md:pr-32">
				{/* Tag and Role and Period */}
				<div className="mb-4">
					<span className="inline-block px-3 py-1 bg-slate-800 text-white text-xs font-medium tracking-wider rounded mb-4">
						{exp.tag}
					</span>
					<span className="text-muted-foreground mx-2">•</span>
					<span className="text-muted-foreground">{exp.role}</span>
					<span className="text-muted-foreground mx-2">•</span>
					<span className="text-muted-foreground">{exp.period}</span>
				</div>

				{/* Company Name */}
				<h3 className="font-display text-3xl md:text-4xl mb-4 group-hover:text-primary transition-colors duration-300">
					{exp.company}
				</h3>

				{/* Description */}
				<p className="font-body text-muted-foreground max-w-lg mb-6">
					{exp.description}
				</p>

				{/* Metrics */}
				<div className="flex flex-wrap gap-4 mb-4">
					{exp.metrics.map((metric, i) => (
						<span
							key={i}
							className="px-3 py-1.5 bg-slate-50 text-slate-700 text-sm font-medium rounded border border-slate-200"
						>
							{metric.label}
						</span>
					))}
				</div>
			</div>
		</article>
	);
};

export default Experience;
