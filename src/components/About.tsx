import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const About = () => {
	const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation();
	const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation();

	const skills = {
		"Product & UX": [
			"Design Thinking",
			"UI Design",
			"UX Research",
			"Personas",
			"User Flows",
			"Wireframing",
			"Usability Testing",
		],
		"Design Tools": [
			"Figma",
			"FigJam",
			"Balsamiq",
			"Miro",
			"Webflow",
			"Zeplin",
		],
		Programming: [
			"HTML/CSS/JS",
			"React.js",
			"Bootstrap",
			"Tailwind",
			"Git",
			"Next.js",
			"Vite"
		],
		Data: ["Data-Driven Decisions", "SQL"],
		AI: ["Prompt Engineering", "AI Tools Exploration"],
	};

	const education = [
		{
			degree: "Master of Interaction Design and Electronic Arts",
			school: "University of Sydney",
			period: "2022 – 2023",
		},
		{
			degree: "Bachelor of Science in IT",
			school: "University of Technology Sydney",
			period: "2019 – 2021",
		},
	];

	return (
		<section id="about" className="py-24 md:py-32 bg-muted">
			<div className="container">
				<div className="grid md:grid-cols-2 gap-12 md:gap-24">
					<div
						ref={leftRef as React.RefObject<HTMLDivElement>}
						className={`scroll-hidden-left ${
							leftVisible ? "scroll-visible-x" : ""
						}`}
					>
						<p className="font-body text-sm tracking-widest text-muted-foreground uppercase mb-3">
							About
						</p>
						<h2 className="font-display text-4xl md:text-5xl tracking-tight mb-8">
							Bridging product & design & technology
						</h2>
						<div className="space-y-6 font-body text-muted-foreground leading-relaxed">
							<p>
								I'm a passionate UI/UX developer and product manager with ~2
								years of experience building modern, seamless experiences in the
								digital age.
							</p>
							<p>
								My approach combines strategic product thinking with hands-on
								technical skills, allowing me to bridge the gap between design,
								engineering, and business objectives.
							</p>
							<p>
								I'm passionate about creating products that are not just
								visually appealing, but also accessible, performant, and
								grounded in real user needs.
							</p>
							<p>
								Currently learning more about AI and App Development for my
								hobbies anb freelancing while remaining open to new
								opportunities and collaborations.
							</p>
						</div>

						<div className="mt-12">
							<p className="font-body text-sm tracking-widest text-muted-foreground uppercase mb-4">
								Education
							</p>
							<div className="space-y-4">
								{education.map((edu, index) => (
									<div
										key={index}
										className="border-l-2 border-primary pl-4 hover:border-secondary transition-colors duration-300 hover:pl-6"
									>
										<h4 className="font-display text-lg">{edu.degree}</h4>
										<p className="font-body text-sm text-muted-foreground">
											{edu.school}
										</p>
										<p className="font-body text-xs text-muted-foreground">
											{edu.period}
										</p>
									</div>
								))}
							</div>
						</div>
					</div>

					<div
						ref={rightRef as React.RefObject<HTMLDivElement>}
						className={`scroll-hidden-right ${
							rightVisible ? "scroll-visible-x" : ""
						}`}
					>
						<p className="font-body text-sm tracking-widest text-muted-foreground uppercase mb-6">
							Skills & Expertise
						</p>
						<div className="space-y-8">
							{Object.entries(skills).map(
								([category, items], categoryIndex) => (
									<div key={category}>
										<h4 className="font-display text-lg mb-3">{category}</h4>
										<div className="flex flex-wrap gap-2">
											{items.map((skill, skillIndex) => (
												<span
													key={skill}
													className="font-body text-sm px-3 py-1.5 border border-border bg-background rounded-md hover:border-primary hover:text-primary hover:shadow-md transition-all duration-300 cursor-default hover:-translate-y-0.5"
													style={{
														transitionDelay: `${
															categoryIndex * 50 + skillIndex * 30
														}ms`,
													}}
												>
													{skill}
												</span>
											))}
										</div>
									</div>
								),
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
