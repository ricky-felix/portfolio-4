import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BottledMoments = () => {
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
								USYD IDEA 9102 — IDEA Studio
							</p>
							<h1 className="font-display text-5xl md:text-7xl tracking-tight mb-6">
								Bottled Moments
							</h1>
							<p className="font-body text-xl text-muted-foreground leading-relaxed mb-8">
								An interactive media architecture installation for mapMIMA cultural venue, designed to enhance visitor experience through digital storytelling and environmental connection.
							</p>

							<div className="flex flex-wrap gap-3 mb-8">
								<span className="font-body text-sm px-3 py-1.5 bg-primary text-primary-foreground">
									UI/UX Design
								</span>
								<span className="font-body text-sm px-3 py-1.5 bg-muted text-muted-foreground">
									Tailwind CSS
								</span>
								<span className="font-body text-sm px-3 py-1.5 bg-muted text-muted-foreground">
									p5.js
								</span>
								<span className="font-body text-sm px-3 py-1.5 bg-muted text-muted-foreground">
									Resolume
								</span>
								<span className="font-body text-sm px-3 py-1.5 bg-muted text-muted-foreground">
									Figma
								</span>
								<span className="font-body text-sm px-3 py-1.5 bg-muted text-muted-foreground">
									Triple Diamond
								</span>
							</div>

							<div className="flex flex-wrap gap-4">
								<a
									href="https://pitch.com/v/rickyportofolio-cs8r6m"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 font-body text-sm px-6 py-3 bg-foreground text-background hover:bg-primary transition-colors"
								>
									Open Full Presentation
									<ExternalLink className="w-4 h-4" />
								</a>
								<a
									href="https://github.com/rickyfelix19/bottled-moments"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 font-body text-sm px-6 py-3 border border-foreground hover:bg-muted transition-colors"
								>
									View GitHub
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
								src="https://rickyfelix025.vercel.app/home/Bottled_Moments.webp"
								alt="Bottled Moments"
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
									The thematic focus is Experience and Product Design of Media Architecture. Groups developed design work with the goal of designing the visitor experience of a real-world cultural venue. The studio was supported by Lake Macquarie City Council in New South Wales, with the Multi-Arts Pavilion, mapMIMA, as the target location.
								</p>
								<p>
									In 2018, Lake Macquarie City collaborated with University of Newcastle to design a new venue in Speers Point Park as a significant cultural and arts space—now known as mapMIMA.
								</p>
								<p>
									mapMIMA was conceived by architect student Samantha Bailey from University of Newcastle and launched in October 2021. The building was designed to be a beacon in the Lake Macquarie area and establish the region as a major cultural destination with the potential to attract national and international artists and exhibitions.
								</p>
								<p className="font-semibold">Since its launch, the area hosts various attractions:</p>
								<ol className="list-decimal list-inside space-y-2 pl-4">
									<li>Local Music Performance</li>
									<li>Art workshops for children</li>
									<li>Public and tourist attractions</li>
									<li>Food night market and social hangouts</li>
								</ol>
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
									Design an engaging visitor experience for mapMIMA, a cultural venue in Lake Macquarie, that would enhance the venue's role as a cultural beacon while attracting diverse audiences—from local families to national and international artists. The installation needed to create meaningful connections between visitors and the lakeside environment while respecting the venue's architectural significance.
								</p>
							</div>
							<div>
								<h2 className="font-display text-3xl md:text-4xl mb-6 text-primary">
									Solution
								</h2>
								<p className="font-body text-muted-foreground leading-relaxed">
									Developed "Bottled Moments," an interactive media architecture installation combining mobile application design with Resolume projection mapping. Users can capture and share digital "moments" related to lakes and water bodies, creating a poetic connection between the digital and natural worlds. The installation was localized for the Lake Macquarie community while adopting a scalable design system for future implementations.
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
								As our project was separated into two parts, we implemented the Triple Diamond approach to ensure thorough ideation and validation.
							</p>
						</div>
					</div>
				</section>

				{/* Triple Diamond Framework */}
				<section className="py-16 md:py-24 bg-muted">
					<div className="container">
						<div className="max-w-3xl mx-auto">
							<h2 className="font-display text-3xl md:text-4xl mb-8">
								Triple Diamond Framework
							</h2>
							<div className="space-y-6">
								<p className="font-body text-lg text-muted-foreground leading-relaxed">
									Our project evolved from the traditional Double Diamond to Triple Diamond approach, allowing for deeper exploration and multiple validation cycles.
								</p>

								<div className="space-y-6 mt-8">
									<div className="bg-background overflow-hidden rounded-lg">
										<img
											src="../projects/idea-studio/Double Diamond.png"
											alt="Double Diamond process"
											className="w-full h-auto"
										/>
									</div>
									<div className="bg-background overflow-hidden rounded-lg">
										<img
											src="../projects/idea-studio/Triple Diamond.png"
											alt="Triple Diamond process"
											className="w-full h-auto"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* 1. Background Research */}
				<section className="py-16 md:py-24">
					<div className="container">
						<div className="max-w-3xl mx-auto">
							<h2 className="font-display text-3xl md:text-4xl mb-8">
								1. Background Research
							</h2>
							<div className="space-y-6">
								<div className="space-y-4 font-body text-lg text-muted-foreground leading-relaxed">
									<p>
										Since its initial launch, mapMIMA has been used to create various attractions for the general public, including:
									</p>
									<ol className="list-decimal list-inside space-y-2 pl-4">
										<li>Local Music Performance</li>
										<li>Art workshops for children</li>
										<li>Public and potential tourist attractions</li>
										<li>Food night market and social hangouts</li>
									</ol>
								</div>

								<div className="mt-8">
									<div className="bg-muted overflow-hidden rounded-lg">
										<img
											src="../projects/idea-studio/mapMima attraction.png"
											alt="mapMIMA attractions and activities"
											className="w-full h-auto"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* 2. Research Triangulation */}
				<section className="py-16 md:py-24 bg-muted">
					<div className="container">
						<div className="max-w-3xl mx-auto">
							<h2 className="font-display text-3xl md:text-4xl mb-8">
								2. Research Triangulation
							</h2>
							<div className="space-y-6">
								<p className="font-body text-lg text-muted-foreground leading-relaxed">
									Our group initialized hypotheses before conducting research on the users who visit mapMIMA. We then conducted research through onsite observation, data analytics, and surveys to understand the area better.
								</p>

								<div className="space-y-6 mt-8">
									<div className="bg-background overflow-hidden rounded-lg">
										<img
											src="../projects/idea-studio/brainstorm.png"
											alt="Initial brainstorming session"
											className="w-full h-auto"
										/>
									</div>
									<div className="bg-background overflow-hidden rounded-lg">
										<img
											src="../projects/idea-studio/data analytics.png"
											alt="Data analytics and research findings"
											className="w-full h-auto"
										/>
									</div>
									<div className="bg-background overflow-hidden rounded-lg">
										<img
											src="../projects/idea-studio/target users.png"
											alt="Target user identification"
											className="w-full h-auto"
										/>
									</div>
									<div className="bg-background overflow-hidden rounded-lg">
										<img
											src="../projects/idea-studio/Persona.png"
											alt="Proto persona development"
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
									Our group proceeded to the next stage by ideating concepts to create Bottled Moments, exploring various interaction models and user experiences.
								</p>

								<div className="mt-8">
									<div className="bg-muted overflow-hidden rounded-lg">
										<img
											src="../projects/idea-studio/Ideation Process.png"
											alt="Ideation process and concept development"
											className="w-full h-auto"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* 4. Double Diamond (1st Assignment) */}
				<section className="py-16 md:py-24 bg-muted">
					<div className="container">
						<div className="max-w-3xl mx-auto">
							<h2 className="font-display text-3xl md:text-4xl mb-8">
								4. Double Diamond (1st Assignment Submitted)
							</h2>
							<div className="space-y-6">
								<p className="font-body text-lg text-muted-foreground leading-relaxed">
									As a result of our research and ideation, we created Bottled Moments—an interactive installation that bridges digital and physical experiences.
								</p>

								<div className="mt-8">
									<div className="bg-background overflow-hidden rounded-lg">
										<img
											src="../projects/idea-studio/Bottled Moments.png"
											alt="Bottled Moments concept"
											className="w-full h-auto"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* 5. Final Diamond (Iterations) */}
				<section className="py-16 md:py-24">
					<div className="container">
						<div className="max-w-3xl mx-auto">
							<h2 className="font-display text-3xl md:text-4xl mb-8">
								5. Final Diamond (Iterations of Improvements)
							</h2>
							<div className="space-y-6">
								<p className="font-body text-lg text-muted-foreground leading-relaxed">
									To reach the best potential of our application, we refined the design based on localization of the product and adopted a design system specifically tailored for our users.
								</p>

								<div className="space-y-6 mt-8">
									<div className="bg-muted overflow-hidden rounded-lg">
										<img
											src="../projects/idea-studio/Artifact Research.png"
											alt="Artifact research and analysis"
											className="w-full h-auto"
										/>
									</div>
									<div className="bg-muted overflow-hidden rounded-lg">
										<img
											src="../projects/idea-studio/Adopt Design System.png"
											alt="Design system adoption"
											className="w-full h-auto"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* 6. Final Result */}
				<section className="py-16 md:py-24 bg-muted">
					<div className="container">
						<div className="max-w-3xl mx-auto">
							<h2 className="font-display text-3xl md:text-4xl mb-8">
								6. Final Result
							</h2>
							<div className="space-y-6">
								<p className="font-body text-lg text-muted-foreground leading-relaxed">
									We submitted the final version of our application, combining the mobile experience with Resolume projection mapping for an immersive installation at mapMIMA.
								</p>

								<div className="space-y-6 mt-8">
									<div className="bg-background overflow-hidden rounded-lg">
										<img
											src="../projects/idea-studio/Bottled Moments app.png"
											alt="Bottled Moments mobile application"
											className="w-full h-auto"
										/>
									</div>
									<div className="bg-background overflow-hidden rounded-lg">
										<img
											src="../projects/idea-studio/Resolume app.png"
											alt="Resolume projection mapping setup"
											className="w-full h-auto"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Key Process Steps */}
				<section className="py-16 md:py-24">
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
										<h3 className="font-body font-semibold mb-2">Background Research & Venue Analysis</h3>
										<p className="font-body text-muted-foreground leading-relaxed">
											Studied mapMIMA's cultural significance, its role in the Lake Macquarie community, and existing visitor attractions
										</p>
									</div>
								</li>
								<li className="flex gap-4">
									<span className="font-display text-2xl text-primary shrink-0 w-8">
										02
									</span>
									<div className="pt-1">
										<h3 className="font-body font-semibold mb-2">Research Triangulation</h3>
										<p className="font-body text-muted-foreground leading-relaxed">
											Conducted onsite observation, data analytics, and surveys to develop proto-personas and identify target users
										</p>
									</div>
								</li>
								<li className="flex gap-4">
									<span className="font-display text-2xl text-primary shrink-0 w-8">
										03
									</span>
									<div className="pt-1">
										<h3 className="font-body font-semibold mb-2">Concept Ideation & Triple Diamond Framework</h3>
										<p className="font-body text-muted-foreground leading-relaxed">
											Applied Triple Diamond methodology to explore multiple concepts and validation cycles for "Bottled Moments"
										</p>
									</div>
								</li>
								<li className="flex gap-4">
									<span className="font-display text-2xl text-primary shrink-0 w-8">
										04
									</span>
									<div className="pt-1">
										<h3 className="font-body font-semibold mb-2">Localization & Design System Adoption</h3>
										<p className="font-body text-muted-foreground leading-relaxed">
											Refined the design based on artifact research and adopted a scalable design system tailored for the venue and users
										</p>
									</div>
								</li>
								<li className="flex gap-4">
									<span className="font-display text-2xl text-primary shrink-0 w-8">
										05
									</span>
									<div className="pt-1">
										<h3 className="font-body font-semibold mb-2">Dual-Platform Development</h3>
										<p className="font-body text-muted-foreground leading-relaxed">
											Built mobile application using Tailwind CSS and p5.js, integrated with Resolume for projection mapping
										</p>
									</div>
								</li>
								<li className="flex gap-4">
									<span className="font-display text-2xl text-primary shrink-0 w-8">
										06
									</span>
									<div className="pt-1">
										<h3 className="font-body font-semibold mb-2">Installation & Presentation</h3>
										<p className="font-body text-muted-foreground leading-relaxed">
											Finalized and presented the comprehensive media architecture experience for mapMIMA cultural venue
										</p>
									</div>
								</li>
							</ol>
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
									The project was successfully developed and presented as part of the IDEA Studio course. Our team created a comprehensive media architecture experience combining mobile interaction with large-scale projection mapping, demonstrating how digital installations can enhance cultural venue experiences and create meaningful connections between visitors and their environment.
								</p>

								<div className="mt-8 p-6 bg-background rounded-lg">
									<h3 className="font-body text-lg font-semibold mb-4">Additional Resources:</h3>
									<div className="space-y-3 font-body text-muted-foreground">
										<p>
											<span className="font-semibold">Demo Video:</span>{" "}
											<a
												href="https://drive.google.com/file/d/1Sfhon25CuOQAvmYoDRndlSHwcfzuQN65/view"
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
												href="https://pitch.com/v/rickyportofolio-cs8r6m"
												target="_blank"
												rel="noopener noreferrer"
												className="text-primary hover:underline"
											>
												Including MVP, Success Outcome, and more
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

export default BottledMoments;
