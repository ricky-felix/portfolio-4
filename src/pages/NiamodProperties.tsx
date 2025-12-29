import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NiamodProperties = () => {
	return (
		<div className="min-h-screen bg-background">
			<Header />

			<main className="pt-24">
				{/* Hero Section */}
				<section className="py-12 md:py-20">
					<div className="container">
						<Link
							to="/"
							className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
						>
							<ArrowLeft className="w-4 h-4" />
							Back to home
						</Link>

						<div className="max-w-4xl">
							<p className="font-body text-sm tracking-widest text-primary uppercase mb-3">
								USYD Interface Design — IDEA9105
							</p>
							<h1 className="font-display text-5xl md:text-7xl tracking-tight mb-6">
								Niamod Properties
							</h1>
							<p className="font-body text-xl text-muted-foreground leading-relaxed mb-8">
								A speculative virtual tour solution for remotely viewing properties, developed for Niamod Real Estate. Recognized as the highest-marked project in the cohort and presented to the client.
							</p>

							<div className="flex flex-wrap gap-3 mb-8">
								<span className="font-body text-sm px-3 py-1.5 bg-primary text-primary-foreground">
									UI/UX Design
								</span>
								<span className="font-body text-sm px-3 py-1.5 bg-muted text-muted-foreground">
									Figma
								</span>
								<span className="font-body text-sm px-3 py-1.5 bg-muted text-muted-foreground">
									Miro
								</span>
								<span className="font-body text-sm px-3 py-1.5 bg-muted text-muted-foreground">
									Double Diamond
								</span>
								<span className="font-body text-sm px-3 py-1.5 bg-muted text-muted-foreground">
									User Research
								</span>
							</div>

							<div className="flex flex-wrap gap-4">
								<a
									href="https://pitch.com/v/rickyportfolio-z84zqu"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 font-body text-sm px-6 py-3 bg-foreground text-background hover:bg-primary transition-colors"
								>
									Open Full Presentation
									<ExternalLink className="w-4 h-4" />
								</a>
								<a
									href="https://www.figma.com/design/jXriDgs8GsiQTWpm6OiMlB/Final-Assignment?node-id=4-51666&t=LZv7bwrPiXEr00hG-1"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 font-body text-sm px-6 py-3 border border-foreground hover:bg-muted transition-colors"
								>
									View Figma Demo
									<ExternalLink className="w-4 h-4" />
								</a>
							</div>
						</div>
					</div>
				</section>

				{/* Main Image */}
				<section className="pb-16 md:pb-24">
					<div className="container">
						<div className="aspect-video bg-muted overflow-hidden">
							<img
								src="https://rickyfelix025.vercel.app/home/Interface_Design.webp"
								alt="Niamod Properties"
								className="w-full h-full object-cover"
							/>
						</div>
					</div>
				</section>

				{/* Introduction */}
				<section className="py-16 md:py-24 bg-muted">
					<div className="container">
						<div className="max-w-3xl mx-auto">
							<h2 className="font-display text-3xl md:text-4xl mb-8">
								Introduction
							</h2>
							<div className="space-y-4 font-body text-lg text-muted-foreground leading-relaxed">
								<p>
									Before the pandemic, the real estate industry heavily relied on face-to-face business models. Since then, it has learned to adapt to a new reality where consumers are more tech-savvy and have grown accustomed to the conveniences that a digitally connected world has to offer.
								</p>
								<p>
									During and after the pandemic, the real estate industry was forced to adapt to consumer behavior shifts. Users have become more tech-savvy and desire more virtual interaction through pre-recorded videos or footage for properties, reducing the need for in-person inspections.
								</p>
								<p>
									Niamod, a real estate business, engaged us to develop a speculative concept for what the user experience of a virtual tour solution for remotely viewing properties may look like from the renter/buyer's perspective. Based on our research, we recommended a technology platform that the application would be linked with.
								</p>
								<p className="font-semibold">
									Our challenge: "How might we enable property buyers to remotely attend and inspect properties so that they can find a property quickly and easily?"
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Challenge & Solution */}
				<section className="py-16 md:py-24">
					<div className="container">
						<div className="grid md:grid-cols-2 gap-12 md:gap-16 max-w-5xl mx-auto">
							<div>
								<h2 className="font-display text-3xl md:text-4xl mb-6 text-secondary">
									Challenge
								</h2>
								<div className="space-y-4 font-body text-muted-foreground leading-relaxed">
									<p>
										Our initial assumption was that "The main point is that buyers find inspecting properties in person to be time-consuming." However, through research we needed to:
									</p>
									<ol className="space-y-2 pl-6 list-decimal">
										<li>Understand the various user profiles in the buyer population to choose a suitable user focus for our solution</li>
										<li>Understand the types of virtual tours being offered and the level of adaptation with mainstream buyers</li>
										<li>Identify why existing virtual tour solutions weren't meeting user needs effectively</li>
									</ol>
								</div>
							</div>
							<div>
								<h2 className="font-display text-3xl md:text-4xl mb-6 text-primary">
									Solution
								</h2>
								<div className="space-y-4 font-body text-muted-foreground leading-relaxed">
									<p>
										We followed the Double Diamond design process to develop a comprehensive virtual tour solution that addresses real user needs. Through user research, we identified three distinct user profiles and focused on creating an experience tailored to their specific pain points.
									</p>
									<p>
										The final solution included interactive 360° tours, contextual property information overlays, and seamless integration with emerging technologies like AR/VR, making remote property inspection as effective as in-person visits.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Design Thinking Process Header */}
				<section className="py-16 md:py-24 bg-muted">
					<div className="container">
						<div className="max-w-3xl mx-auto text-center">
							<h2 className="font-display text-3xl md:text-4xl mb-6">
								Design Thinking Process
							</h2>
							<p className="font-body text-lg text-muted-foreground leading-relaxed">
								To address this challenge, we applied the Double Diamond framework to ensure thorough research and iterative design.
							</p>
						</div>
					</div>
				</section>

				{/* Double Diamond Framework */}
				<section className="py-16 md:py-24">
					<div className="container">
						<div className="max-w-3xl mx-auto">
							<h2 className="font-display text-3xl md:text-4xl mb-8">
								Double Diamond Framework
							</h2>
							<div className="space-y-6">
								<p className="font-body text-lg text-muted-foreground leading-relaxed">
									Our project followed the Double Diamond design thinking process, which allowed us to first diverge to explore the problem space, then converge to define the core issues, diverge again to ideate solutions, and finally converge to deliver the final design.
								</p>

								<div className="mt-8">
									<div className="bg-muted overflow-hidden rounded-lg">
										<img
											src="../projects/interface-design/Double Diamond.png"
											alt="Double Diamond design process framework"
											className="w-full h-auto"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* 1. Research */}
				<section className="py-16 md:py-24 bg-muted">
					<div className="container">
						<div className="max-w-3xl mx-auto">
							<h2 className="font-display text-3xl md:text-4xl mb-8">
								1. Research
							</h2>
							<div className="space-y-6">
								<p className="font-body text-lg text-muted-foreground leading-relaxed">
									During this process, our group gathered user insights, analyzed industry competitors, and conducted background research to understand our audience along with the technologies we could use to enhance Niamod's agency. We conducted competitor analysis to identify opportunities for improvement.
								</p>

								<div className="space-y-6 mt-8">
									<div>
										<h3 className="font-body text-xl font-semibold mb-4">Technology Findings:</h3>
										<div className="bg-background overflow-hidden rounded-lg">
											<img
												src="../projects/interface-design/technology-findings.png"
												alt="Technology research and findings"
												className="w-full h-auto"
											/>
										</div>
									</div>

									<div>
										<h3 className="font-body text-xl font-semibold mb-4">Industry Trends:</h3>
										<div className="bg-background overflow-hidden rounded-lg">
											<img
												src="../projects/interface-design/trend-findings.png"
												alt="Real estate industry trend analysis"
												className="w-full h-auto"
											/>
										</div>
									</div>

									<div>
										<h3 className="font-body text-xl font-semibold mb-4">Competitor Analysis:</h3>
										<div className="bg-background overflow-hidden rounded-lg">
											<img
												src="../projects/interface-design/competitor-insights.png"
												alt="Competitor insights and analysis"
												className="w-full h-auto"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* 2. User Profiles */}
				<section className="py-16 md:py-24">
					<div className="container">
						<div className="max-w-3xl mx-auto">
							<h2 className="font-display text-3xl md:text-4xl mb-8">
								2. User Profiles
							</h2>
							<div className="space-y-6">
								<p className="font-body text-lg text-muted-foreground leading-relaxed">
									Through conducting 5 user interviews and online ethnographies, we identified 3 distinct user profiles representing different segments of the property-seeking market. Each profile had unique needs and pain points that informed our design decisions.
								</p>

								<div className="space-y-6 mt-8">
									<div className="bg-muted overflow-hidden rounded-lg">
										<img
											src="../projects/interface-design/user-research.png"
											alt="User research synthesis"
											className="w-full h-auto"
										/>
									</div>
									<div className="bg-muted overflow-hidden rounded-lg">
										<img
											src="../projects/interface-design/ellen-user-needs.png"
											alt="User persona and needs analysis"
											className="w-full h-auto"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* 3. Ideations */}
				<section className="py-16 md:py-24 bg-muted">
					<div className="container">
						<div className="max-w-3xl mx-auto">
							<h2 className="font-display text-3xl md:text-4xl mb-8">
								3. Ideations
							</h2>
							<div className="space-y-6">
								<p className="font-body text-lg text-muted-foreground leading-relaxed">
									Before ideating, our group created Jobs to be Done (JTBD) frameworks and separated tasks among team members (group of three). We then ideated 3 times total—from wireframing to lo-fidelity and finally high-fidelity designs.
								</p>

								<div className="space-y-6 mt-8">
									<div>
										<h3 className="font-body text-xl font-semibold mb-4">Jobs to be Done:</h3>
										<div className="bg-background overflow-hidden rounded-lg">
											<img
												src="../projects/interface-design/JTDB.png"
												alt="Jobs to be Done framework"
												className="w-full h-auto"
											/>
										</div>
									</div>

									<div>
										<h3 className="font-body text-xl font-semibold mb-4">Design Approach:</h3>
										<div className="bg-background overflow-hidden rounded-lg">
											<img
												src="../projects/interface-design/design-approach.png"
												alt="Design approach and methodology"
												className="w-full h-auto"
											/>
										</div>
									</div>

									<div>
										<h3 className="font-body text-xl font-semibold mb-4">Feature Development:</h3>
										<div className="bg-background overflow-hidden rounded-lg">
											<img
												src="../projects/interface-design/ricky-feature.png"
												alt="Feature ideation and development"
												className="w-full h-auto"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* 4. Final Result & Recognition */}
				<section className="py-16 md:py-24">
					<div className="container">
						<div className="max-w-3xl mx-auto">
							<h2 className="font-display text-3xl md:text-4xl mb-8">
								4. Final Result & Recognition
							</h2>
							<div className="space-y-6">
								<p className="font-body text-lg text-muted-foreground leading-relaxed">
									As our team received the highest mark in the cohort, we were invited to present our project to Niamod Real Estate & Properties. Our presentation included a comprehensive design system that could be implemented across their platform.
								</p>

								<div className="space-y-6 mt-8">
									<div>
										<h3 className="font-body text-xl font-semibold mb-4">Design System:</h3>
										<div className="bg-muted overflow-hidden rounded-lg">
											<img
												src="../projects/interface-design/niamod-design-system.png"
												alt="Niamod design system components"
												className="w-full h-auto"
											/>
										</div>
									</div>

									<div>
										<h3 className="font-body text-xl font-semibold mb-4">Client Presentation:</h3>
										<div className="bg-muted overflow-hidden rounded-lg">
											<img
												src="../projects/interface-design/presentation.jpeg"
												alt="Presentation to Niamod Real Estate"
												className="w-full h-auto"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Key Process Steps */}
				<section className="py-16 md:py-24 bg-muted">
					<div className="container">
						<div className="max-w-3xl mx-auto">
							<h2 className="font-display text-3xl md:text-4xl mb-10">
								Key Process Steps
							</h2>
							<ol className="space-y-6">
								<li className="flex gap-4">
									<span className="font-display text-2xl text-primary shrink-0 w-8">
										01
									</span>
									<div className="pt-1">
										<h3 className="font-body font-semibold mb-2">Comprehensive Market Research</h3>
										<p className="font-body text-muted-foreground leading-relaxed">
											Analyzed emerging technologies, industry trends, and competitor solutions to identify opportunities in the virtual tour space
										</p>
									</div>
								</li>
								<li className="flex gap-4">
									<span className="font-display text-2xl text-primary shrink-0 w-8">
										02
									</span>
									<div className="pt-1">
										<h3 className="font-body font-semibold mb-2">User Research & Persona Development</h3>
										<p className="font-body text-muted-foreground leading-relaxed">
											Conducted 5 user interviews and online ethnographies to identify 3 distinct user profiles with unique needs
										</p>
									</div>
								</li>
								<li className="flex gap-4">
									<span className="font-display text-2xl text-primary shrink-0 w-8">
										03
									</span>
									<div className="pt-1">
										<h3 className="font-body font-semibold mb-2">Jobs to be Done Framework</h3>
										<p className="font-body text-muted-foreground leading-relaxed">
											Mapped out user jobs and separated design tasks across team members for efficient collaboration
										</p>
									</div>
								</li>
								<li className="flex gap-4">
									<span className="font-display text-2xl text-primary shrink-0 w-8">
										04
									</span>
									<div className="pt-1">
										<h3 className="font-body font-semibold mb-2">Iterative Design Process</h3>
										<p className="font-body text-muted-foreground leading-relaxed">
											Progressed through wireframing, lo-fidelity, and high-fidelity prototypes with continuous refinement
										</p>
									</div>
								</li>
								<li className="flex gap-4">
									<span className="font-display text-2xl text-primary shrink-0 w-8">
										05
									</span>
									<div className="pt-1">
										<h3 className="font-body font-semibold mb-2">Comprehensive Design System</h3>
										<p className="font-body text-muted-foreground leading-relaxed">
											Created a scalable design system with reusable components for consistent implementation
										</p>
									</div>
								</li>
								<li className="flex gap-4">
									<span className="font-display text-2xl text-primary shrink-0 w-8">
										06
									</span>
									<div className="pt-1">
										<h3 className="font-body font-semibold mb-2">Client Presentation & Validation</h3>
										<p className="font-body text-muted-foreground leading-relaxed">
											Presented the final solution to Niamod Real Estate after receiving the highest mark in the cohort
										</p>
									</div>
								</li>
							</ol>
						</div>
					</div>
				</section>

				{/* Outcome */}
				<section className="py-16 md:py-24">
					<div className="container">
						<div className="max-w-3xl mx-auto">
							<h2 className="font-display text-3xl md:text-4xl mb-8">
								Outcome
							</h2>
							<div className="space-y-6">
								<p className="font-body text-lg text-muted-foreground leading-relaxed">
									The project received the highest mark in the Interface Design course (IDEA9105) and was selected for presentation to Niamod Real Estate & Properties. Our comprehensive solution demonstrated how emerging technologies could transform the property viewing experience, making remote inspections as effective as in-person visits.
								</p>

								<div className="mt-8 p-6 bg-muted rounded-lg">
									<h3 className="font-body text-lg font-semibold mb-4">Additional Resources:</h3>
									<div className="space-y-3 font-body text-muted-foreground">
										<p>
											<span className="font-semibold">Figma Demo:</span>{" "}
											<a
												href="https://www.figma.com/design/jXriDgs8GsiQTWpm6OiMlB/Final-Assignment?node-id=4-51666&t=LZv7bwrPiXEr00hG-1"
												target="_blank"
												rel="noopener noreferrer"
												className="text-primary hover:underline"
											>
												Available here
											</a>
										</p>
										<p>
											<span className="font-semibold">Full Presentation:</span>{" "}
											<a
												href="https://pitch.com/v/rickyportfolio-z84zqu"
												target="_blank"
												rel="noopener noreferrer"
												className="text-primary hover:underline"
											>
												Including research findings and design system
											</a>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Navigation */}
				<section className="py-16 md:py-24 border-t border-border">
					<div className="container">
						<div className="text-center">
							<p className="font-body text-sm text-muted-foreground mb-4">
								Want to see more?
							</p>
							<Link
								to="/#work"
								className="font-display text-2xl md:text-3xl link-underline"
							>
								View all projects
							</Link>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
};

export default NiamodProperties;
