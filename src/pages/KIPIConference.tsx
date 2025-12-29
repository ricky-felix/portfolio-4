import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const KIPIConference = () => {
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
								PPIA Department of IT — 2022
							</p>
							<h1 className="font-display text-5xl md:text-7xl tracking-tight mb-6">
								KIPI 2022
							</h1>
							<p className="font-body text-xl text-muted-foreground leading-relaxed mb-8">
								Developed with the team at PPIA Department of IT for about 3 months to create the "Road to SI" website, hosting three major milestones: KIPI, Career Fest, and Symposium International XIV.
							</p>

							<div className="flex flex-wrap gap-3 mb-8">
								<span className="font-body text-sm px-3 py-1.5 bg-primary text-primary-foreground">
									Figma
								</span>
								<span className="font-body text-sm px-3 py-1.5 bg-muted text-muted-foreground">
									Webflow
								</span>
								<span className="font-body text-sm px-3 py-1.5 bg-muted text-muted-foreground">
									Project Lead
								</span>
								<span className="font-body text-sm px-3 py-1.5 bg-muted text-muted-foreground">
									Design Thinking
								</span>
							</div>

							<a
								href="https://pitch.com/v/rickyportfolio-n7u8ra"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 font-body text-sm px-6 py-3 bg-foreground text-background hover:bg-primary transition-colors"
							>
								Open Full Presentation
								<ExternalLink className="w-4 h-4" />
							</a>
						</div>
					</div>
				</section>

				{/* Main Image */}
				<section className="pb-16 md:pb-24">
					<div className="container">
						<div className="aspect-video bg-muted overflow-hidden">
							<img
								src="https://rickyfelix025.vercel.app/home/KIPI_PPIA.png"
								alt="KIPI Conference"
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
									KIPI is a hybrid international symposium event organized by PPIA (Indonesian Students' Association of Australia). The following project showcases one milestone out of three (KIPI 2022, a PPIA bi-annual event). However, the tools and design thinking process remain the same.
								</p>
								<p>
									Annually, PPI DUNIA organizes an international symposium and in 2022, PPI-Australia was selected to be the host and organizer of SI XIV. Perhimpunan Pelajar Indonesia Australia (PPIA) or Indonesian Students' Association of Australia worked for approximately one year to create and organize multiple events named "Road to SI."
								</p>
								<p className="font-semibold">Our events/milestones are as follows:</p>
								<ol className="list-decimal list-inside space-y-2 pl-4">
									<li>KIPI</li>
									<li>Career Fest</li>
									<li>Symposium International XIV</li>
								</ol>
								<p>
									I was assigned to lead the project to create the "Road to SI" website.
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
								<p className="font-body text-muted-foreground leading-relaxed">
									Create a professional website for three major academic events (KIPI, Career Fest, and Symposium International XIV) that would serve Indonesian students and researchers across Australia. The site needed to maintain academic credibility while being accessible and engaging, handle multiple event registrations, and reflect PPIA's organizational excellence.
								</p>
							</div>
							<div>
								<h2 className="font-display text-3xl md:text-4xl mb-6 text-primary">
									Solution
								</h2>
								<p className="font-body text-muted-foreground leading-relaxed">
									Led a cross-functional team through the Stanford design thinking process over 3 months. We created an onboarding process for new team members, involved stakeholders at every stage, and iteratively designed and built the "Road to SI" website using Figma and Webflow, incorporating continuous feedback to ensure the final product met both user needs and organizational standards.
								</p>
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
								Our team followed the Stanford design thinking process as our main framework.
							</p>
						</div>
					</div>
				</section>

				{/* 1. Empathize */}
				<section className="py-16 md:py-24">
					<div className="container">
						<div className="max-w-3xl mx-auto">
							<h2 className="font-display text-3xl md:text-4xl mb-8">
								1. Empathize
							</h2>
							<div className="space-y-6">
								<p className="font-body text-lg text-muted-foreground leading-relaxed">
									As our team grew larger due to handling multiple projects, we started recruiting more people and therefore created an onboarding process. We also included our stakeholders in our process to gather requirements and ensure everyone was well-informed at each step from the beginning until the end.
								</p>

								<div className="space-y-6 mt-8">
									<div className="bg-background overflow-hidden rounded-lg">
										<img
											src="../projects/kipi-2022/Stakeholders.jpg"
											alt="Stakeholder collaboration process"
											className="w-full h-auto"
										/>
									</div>
									<div className="bg-background overflow-hidden rounded-lg">
										<img
											src="../projects/kipi-2022/KIPI Brief.png"
											alt="KIPI project brief"
											className="w-full h-auto"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* 2. Define */}
				<section className="py-16 md:py-24 bg-muted">
					<div className="container">
						<div className="max-w-3xl mx-auto">
							<h2 className="font-display text-3xl md:text-4xl mb-8">
								2. Define
							</h2>
							<div className="space-y-6">
								<p className="font-body text-lg text-muted-foreground leading-relaxed">
									As we continued down our process, we started conceptualizing our ideas into architectures and user journeys before creating our lo-fidelity and high-fidelity designs from Figma to Webflow.
								</p>

								<div className="space-y-6 mt-8">
									<div className="bg-muted overflow-hidden rounded-lg">
										<img
											src="../projects/kipi-2022/Architecture.png"
											alt="Information architecture diagram"
											className="w-full h-auto"
										/>
									</div>
									<div className="bg-muted overflow-hidden rounded-lg">
										<img
											src="../projects/kipi-2022/Comparison.png"
											alt="Design comparison analysis"
											className="w-full h-auto"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* 3. Ideations */}
				<section className="py-16 md:py-24">
					<div className="container">
						<div className="max-w-3xl mx-auto">
							<h2 className="font-display text-3xl md:text-4xl mb-8">
								3. Ideations
							</h2>
							<div className="space-y-6">
								<p className="font-body text-lg text-muted-foreground leading-relaxed">
									In total, our group ideated six times:
								</p>

								<ol className="space-y-4 font-body text-muted-foreground leading-relaxed pl-4">
									<li className="flex gap-3">
										<span className="shrink-0">1)</span>
										<span>We started by creating our lo-fidelity. Each one of us designed our own version of the page</span>
									</li>
									<li className="flex gap-3">
										<span className="shrink-0">2)</span>
										<span>We then went through internal discussion with ourselves to see which one we should use and improve upon</span>
									</li>
									<li className="flex gap-3">
										<span className="shrink-0">3)</span>
										<span>We selected "our final piece" and added contemporary colors to the page</span>
									</li>
									<li className="flex gap-3">
										<span className="shrink-0">4)</span>
										<span>We submitted the result to our stakeholders and received feedback that the color palette didn't match with the overall theme of the conference and it made it seem "unprofessional and childish" as it looked similar to children's toy color palette</span>
									</li>
									<li className="flex gap-3">
										<span className="shrink-0">5)</span>
										<span>Receiving the feedback, we continued by creating a Mid-Fidelity of our product</span>
									</li>
								</ol>

								<div className="mt-8">
									<div className="bg-background overflow-hidden rounded-lg">
										<img
											src="../projects/kipi-2022/Lo Fidelity.png"
											alt="Lo-fidelity wireframes"
											className="w-full h-auto"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* 4. Final Version */}
				<section className="py-16 md:py-24 bg-muted">
					<div className="container">
						<div className="max-w-3xl mx-auto">
							<h2 className="font-display text-3xl md:text-4xl mb-8">
								4. Final Version
							</h2>
							<div className="space-y-6">
								<p className="font-body text-lg text-muted-foreground leading-relaxed">
									Approaching the deadline, we conducted a final usability testing with random users to improve upon our website, and the final result of the website is as seen as follows:
								</p>

								<div className="space-y-6 mt-8">
									<div className="bg-muted overflow-hidden rounded-lg">
										<img
											src="../projects/kipi-2022/Final.png"
											alt="Final website design"
											className="w-full h-auto"
										/>
									</div>
									<div className="bg-muted overflow-hidden rounded-lg">
										<img
											src="../projects/kipi-2022/Congrats.png"
											alt="Project completion celebration"
											className="w-full h-auto"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Process Overview */}
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
										<h3 className="font-body font-semibold mb-2">Team Expansion & Stakeholder Alignment</h3>
										<p className="font-body text-muted-foreground leading-relaxed">
											Created onboarding process for new team members and established regular stakeholder communication to gather requirements
										</p>
									</div>
								</li>
								<li className="flex gap-4">
									<span className="font-display text-2xl text-primary shrink-0 w-8">
										02
									</span>
									<div className="pt-1">
										<h3 className="font-body font-semibold mb-2">Information Architecture & User Journeys</h3>
										<p className="font-body text-muted-foreground leading-relaxed">
											Mapped out site architecture and user flows for three distinct event experiences
										</p>
									</div>
								</li>
								<li className="flex gap-4">
									<span className="font-display text-2xl text-primary shrink-0 w-8">
										03
									</span>
									<div className="pt-1">
										<h3 className="font-body font-semibold mb-2">Iterative Design & Feedback</h3>
										<p className="font-body text-muted-foreground leading-relaxed">
											Six rounds of ideation from lo-fidelity to high-fidelity, incorporating stakeholder feedback on color palette and professionalism
										</p>
									</div>
								</li>
								<li className="flex gap-4">
									<span className="font-display text-2xl text-primary shrink-0 w-8">
										04
									</span>
									<div className="pt-1">
										<h3 className="font-body font-semibold mb-2">Usability Testing & Refinement</h3>
										<p className="font-body text-muted-foreground leading-relaxed">
											Conducted final usability testing with target users before launch
										</p>
									</div>
								</li>
								<li className="flex gap-4">
									<span className="font-display text-2xl text-primary shrink-0 w-8">
										05
									</span>
									<div className="pt-1">
										<h3 className="font-body font-semibold mb-2">Agile Development & Deployment</h3>
										<p className="font-body text-muted-foreground leading-relaxed">
											Managed development sprints using Trello for all three event milestones
										</p>
									</div>
								</li>
							</ol>
						</div>
					</div>
				</section>

				{/* After KIPI 2022 */}
				<section className="py-16 md:py-24">
					<div className="container">
						<div className="max-w-3xl mx-auto">
							<h2 className="font-display text-3xl md:text-4xl mb-8">
								After KIPI 2022
							</h2>
							<div className="space-y-6">
								<p className="font-body text-lg text-muted-foreground leading-relaxed">
									After KIPI 2022, as previously stated there were two more events that we needed to finalize (Career Fest and Symposium International). Both of them overall followed the same design thinking process. We maximized our time and effort by using Trello to do our agile sprint.
								</p>

								<div className="mt-8">
									<div className="bg-background overflow-hidden rounded-lg">
										<img
											src="../projects/kipi-2022/Trello.png"
											alt="Trello board for project management"
											className="w-full h-auto"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Outcome */}
				<section className="py-16 md:py-24 bg-muted">
					<div className="container">
						<div className="max-w-3xl mx-auto">
							<h2 className="font-display text-3xl md:text-4xl mb-8">
								Outcome
							</h2>
							<div className="space-y-6">
								<p className="font-body text-lg text-muted-foreground leading-relaxed">
									Successfully delivered the "Road to SI" website that hosted three major academic events over the course of a year. The iterative design process and stakeholder collaboration resulted in a professional platform that effectively served the Indonesian student and research community across Australia, maintaining PPIA's reputation for organizational excellence.
								</p>
								<div className="grid md:grid-cols-3 gap-6 mt-8">
									<div className="text-center p-6 bg-background rounded-lg">
										<div className="font-display text-4xl text-primary mb-2">3</div>
										<div className="font-body text-sm text-muted-foreground">Major Events Hosted</div>
									</div>
									<div className="text-center p-6 bg-background rounded-lg">
										<div className="font-display text-4xl text-primary mb-2">6</div>
										<div className="font-body text-sm text-muted-foreground">Design Iterations</div>
									</div>
									<div className="text-center p-6 bg-background rounded-lg">
										<div className="font-display text-4xl text-primary mb-2">3</div>
										<div className="font-body text-sm text-muted-foreground">Months of Development</div>
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

export default KIPIConference;
