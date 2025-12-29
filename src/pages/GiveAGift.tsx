import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GiveAGift = () => {
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
								USYD Mobile Computing — COMP5216
							</p>
							<h1 className="font-display text-5xl md:text-7xl tracking-tight mb-6">
								Give a Gift
							</h1>
							<p className="font-body text-xl text-muted-foreground leading-relaxed mb-8">
								A cost and time-efficient solution for passing on gifts to senders and receivers with more diverse options for items. Featured as one of the best UX solutions in the cohort.
							</p>

							<div className="flex flex-wrap gap-3 mb-8">
								<span className="font-body text-sm px-3 py-1.5 bg-primary text-primary-foreground">
									UI/UX Design
								</span>
								<span className="font-body text-sm px-3 py-1.5 bg-muted text-muted-foreground">
									Figma
								</span>
								<span className="font-body text-sm px-3 py-1.5 bg-muted text-muted-foreground">
									Zeplin
								</span>
								<span className="font-body text-sm px-3 py-1.5 bg-muted text-muted-foreground">
									Android Studio
								</span>
								<span className="font-body text-sm px-3 py-1.5 bg-muted text-muted-foreground">
									Usability Testing
								</span>
							</div>

							<div className="flex flex-wrap gap-4">
								<a
									href="https://pitch.com/v/rickyportfolio-6fk9ku"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 font-body text-sm px-6 py-3 bg-foreground text-background hover:bg-primary transition-colors"
								>
									Open Full Presentation
									<ExternalLink className="w-4 h-4" />
								</a>
								<a
									href="https://github.com/rickyfelix19/give-a-gift-copy"
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
								src="https://rickyfelix025.vercel.app/home/Give_a_Gift.webp"
								alt="Give a Gift"
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
									When people want to show how much they appreciate or care for someone, they would like to send a perfect present. People send presents using parcel post services if they cannot give them in person. Regardless of the types of gifts - from just a handwritten letter to big tangible objects like furniture - sending them takes a lot of time and effort.
								</p>
								<p>
									People are spending more time in their office to meet a deadline or to get their promotion. And sometimes they sacrifice their relationship and connections with loved ones. We want to let people still connect with one another even when they are busy with their schedule.
								</p>
								<p className="font-semibold">
									A cost and time-efficient solution for passing on the gift to senders and receivers with more diverse options for items.
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
									<p className="font-semibold">The Sender Problem:</p>
									<ul className="space-y-2 pl-6 list-disc">
										<li>Time-consuming gift purchasing process (online or offline)</li>
										<li>Extra effort to obtain receiver's personal information</li>
										<li>Additional time needed for post office visits</li>
										<li>Tracking parcels until delivery</li>
									</ul>
									<p className="font-semibold mt-4">The Recipient Problem:</p>
									<ul className="space-y-2 pl-6 list-disc">
										<li>Privacy concerns sharing personal information</li>
										<li>Effort required to track incoming parcels</li>
										<li>Time spent traveling to pick-up locations</li>
									</ul>
								</div>
							</div>
							<div>
								<h2 className="font-display text-3xl md:text-4xl mb-6 text-primary">
									Solution
								</h2>
								<div className="space-y-4 font-body text-muted-foreground leading-relaxed">
									<p>
										Designed and developed a mobile application that streamlines gift-giving by allowing users to order, schedule, and send gifts without requiring recipient addresses. The app connects senders with local stores, enabling receivers to pick up gifts at nearby locations with just a notification.
									</p>
									<p>
										The dual-sided platform serves both individual customers and business partners, creating an ecosystem that makes gift-giving as simple as sending a message.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Background Research */}
				<section className="py-16 md:py-24 bg-muted">
					<div className="container">
						<div className="max-w-3xl mx-auto">
							<h2 className="font-display text-3xl md:text-4xl mb-8">
								Background Research
							</h2>
							<div className="space-y-6">
								<div>
									<h3 className="font-body text-xl font-semibold mb-4">Market Insights:</h3>
									<ul className="space-y-3 font-body text-muted-foreground leading-relaxed pl-6 list-disc">
										<li>80% increase in global searches for "Online Gift" in 2020 compared to 2019, yet 90% of final purchases still occur in physical stores</li>
										<li>89% of buyers research online before making in-store purchase decisions</li>
										<li>Australia Gift Card and Incentive Card Market projected to grow from $5,446.5M (2021) to $8,504.5M by 2026</li>
									</ul>
								</div>

								<div>
									<h3 className="font-body text-xl font-semibold mb-4">Competitive Analysis:</h3>
									<p className="font-body text-muted-foreground leading-relaxed mb-3">
										We analyzed existing solutions to identify gaps in the market:
									</p>
									<ol className="space-y-2 font-body text-muted-foreground leading-relaxed pl-6 list-decimal">
										<li>Amazon - E-commerce giant with delivery logistics</li>
										<li>Prezee - Digital gift card platform</li>
										<li>Uber - On-demand delivery service</li>
										<li>GiftsApp - Gift recommendation application</li>
										<li>Gifticon - Mobile gifting solution</li>
									</ol>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Design Process Header */}
				<section className="py-16 md:py-24">
					<div className="container">
						<div className="max-w-3xl mx-auto text-center">
							<h2 className="font-display text-3xl md:text-4xl mb-6">
								Design Process
							</h2>
							<p className="font-body text-lg text-muted-foreground leading-relaxed">
								Following a user-centered design approach, we iterated through multiple phases of sketching, prototyping, and testing to create an intuitive gift-giving experience.
							</p>
						</div>
					</div>
				</section>

				{/* 1. Initial Rough Sketch */}
				<section className="py-16 md:py-24 bg-muted">
					<div className="container">
						<div className="max-w-3xl mx-auto">
							<h2 className="font-display text-3xl md:text-4xl mb-8">
								1. Initial Rough Sketch
							</h2>
							<div className="space-y-6">
								<p className="font-body text-lg text-muted-foreground leading-relaxed">
									As I joined the group late, our group created an initial sketch of the application in which I changed to Lo-Fidelity (and eventually High-Fidelity of the application).
								</p>

								<div className="mt-8">
									<div className="bg-background overflow-hidden rounded-lg">
										<img
											src="../projects/mobile-comp/Lo Fidelity.png"
											alt="Lo-fidelity wireframes"
											className="w-full h-auto"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* 2. Design */}
				<section className="py-16 md:py-24 bg-muted">
					<div className="container">
						<div className="max-w-3xl mx-auto">
							<h2 className="font-display text-3xl md:text-4xl mb-8">
								2. Design
							</h2>
							<div className="space-y-6">
								<p className="font-body text-lg text-muted-foreground leading-relaxed">
									After sketching and doing a quick informal interview, I then implemented our design. Our group did a final internal critique to evaluate what design we should change. We mainly discussed how to improve our final product by removing any pain points by making sure we comply with the 10 Usability Heuristics Guideline.
								</p>

								<ol className="space-y-2 font-body text-muted-foreground leading-relaxed pl-6 list-decimal">
									<li>Recognition rather than recall (to find users)</li>
									<li>Using informal feedback to improve our overall design</li>
									<li>Use available Lottie and annotated onboarding screens to make it easier for our users to understand our app functionality before using it</li>
								</ol>

								<div className="space-y-6 mt-8">
									<div className="bg-muted overflow-hidden rounded-lg">
										<img
											src="../projects/mobile-comp/Profile page changes.png"
											alt="Profile page design changes"
											className="w-full h-auto"
										/>
									</div>
									<div className="bg-muted overflow-hidden rounded-lg">
										<img
											src="../projects/mobile-comp/Onboarding.png"
											alt="Onboarding screens"
											className="w-full h-auto"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* 3. Handover to Developer */}
				<section className="py-16 md:py-24">
					<div className="container">
						<div className="max-w-3xl mx-auto">
							<h2 className="font-display text-3xl md:text-4xl mb-8">
								3. Handover to Developer (using Zeplin)
							</h2>
							<div className="space-y-6">
								<p className="font-body text-lg text-muted-foreground leading-relaxed">
									At this stage, I started finalizing our design and began to integrate it onto Zeplin to handover to the developers to begin coding. The final part of the application is separated into two parts:
								</p>

								<ol className="space-y-2 font-body text-muted-foreground leading-relaxed pl-6 list-decimal">
									<li>The Client Side</li>
									<li>The Business Side</li>
								</ol>

								<p className="font-body text-lg text-muted-foreground leading-relaxed">
									As a result of such implementation, our group was marked as one of the highest and one of many groups that was presented to the cohort as one of the best UX solutions within our class.
								</p>

								<blockquote className="border-l-4 border-primary pl-6 italic font-body text-muted-foreground">
									<p className="mb-2">
										"Some groups do really well and this is another project that many assessors like especially the idea they found. It is a very good development on the application"
									</p>
									<footer className="font-semibold not-italic">— Dr Kanchana (Subject Coordinator)</footer>
								</blockquote>

								<div className="space-y-6 mt-8">
									<div className="bg-background overflow-hidden rounded-lg">
										<img
											src="../projects/mobile-comp/Zeplin.png"
											alt="Zeplin handover screens"
											className="w-full h-auto"
										/>
									</div>
									<div className="bg-background overflow-hidden rounded-lg">
										<img
											src="../projects/mobile-comp/Client.png"
											alt="Client-side application"
											className="w-full h-auto"
										/>
									</div>
									<div className="bg-background overflow-hidden rounded-lg">
										<img
											src="../projects/mobile-comp/Business.png"
											alt="Business-side application"
											className="w-full h-auto"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* 4. Final Result */}
				<section className="py-16 md:py-24 bg-muted">
					<div className="container">
						<div className="max-w-3xl mx-auto">
							<h2 className="font-display text-3xl md:text-4xl mb-8">
								4. Final Result
							</h2>
							<div className="space-y-6">
								<p className="font-body text-lg text-muted-foreground leading-relaxed">
									Due to achieving high marks, our group project was presented to the whole cohort.
								</p>

								<div className="mt-8">
									<div className="bg-muted overflow-hidden rounded-lg">
										<img
											src="../projects/mobile-comp/Presentation.png"
											alt="Final presentation to cohort"
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
										<h3 className="font-body font-semibold mb-2">Market & User Research</h3>
										<p className="font-body text-muted-foreground leading-relaxed">
											Analyzed gift-giving pain points and market trends to identify opportunities for innovation
										</p>
									</div>
								</li>
								<li className="flex gap-4">
									<span className="font-display text-2xl text-primary shrink-0 w-8">
										02
									</span>
									<div className="pt-1">
										<h3 className="font-body font-semibold mb-2">Lo-Fidelity Wireframing</h3>
										<p className="font-body text-muted-foreground leading-relaxed">
											Created initial sketches and wireframes to explore different interaction patterns
										</p>
									</div>
								</li>
								<li className="flex gap-4">
									<span className="font-display text-2xl text-primary shrink-0 w-8">
										03
									</span>
									<div className="pt-1">
										<h3 className="font-body font-semibold mb-2">Usability Heuristics Compliance</h3>
										<p className="font-body text-muted-foreground leading-relaxed">
											Applied Nielsen's 10 Usability Heuristics including recognition rather than recall and informal feedback integration
										</p>
									</div>
								</li>
								<li className="flex gap-4">
									<span className="font-display text-2xl text-primary shrink-0 w-8">
										04
									</span>
									<div className="pt-1">
										<h3 className="font-body font-semibold mb-2">High-Fidelity Prototyping</h3>
										<p className="font-body text-muted-foreground leading-relaxed">
											Designed detailed mockups with Lottie animations and annotated onboarding screens
										</p>
									</div>
								</li>
								<li className="flex gap-4">
									<span className="font-display text-2xl text-primary shrink-0 w-8">
										05
									</span>
									<div className="pt-1">
										<h3 className="font-body font-semibold mb-2">Developer Handover via Zeplin</h3>
										<p className="font-body text-muted-foreground leading-relaxed">
											Created comprehensive design specifications for both client-side and business-side applications
										</p>
									</div>
								</li>
								<li className="flex gap-4">
									<span className="font-display text-2xl text-primary shrink-0 w-8">
										06
									</span>
									<div className="pt-1">
										<h3 className="font-body font-semibold mb-2">Implementation & Testing</h3>
										<p className="font-body text-muted-foreground leading-relaxed">
											Developed dual-platform Android application and conducted usability testing with target users
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
									The project was recognized as one of the best UX solutions in the Mobile Computing course (COMP5216). Our team successfully delivered both client-side and business-side applications with a comprehensive design system, usability testing validation, and developer handover documentation through Zeplin.
								</p>

								<div className="mt-8 p-6 bg-background rounded-lg">
									<h3 className="font-body text-lg font-semibold mb-4">Additional Resources:</h3>
									<div className="space-y-3 font-body text-muted-foreground">
										<p>
											<span className="font-semibold">Presentation video:</span>{" "}
											<a
												href="https://drive.google.com/file/d/11ebV2Xbhvc4fHa1o3UPt9t69tD9xOaaA/view?usp=sharing"
												target="_blank"
												rel="noopener noreferrer"
												className="text-primary hover:underline"
											>
												Available here
											</a>
										</p>
										<p>
											<span className="font-semibold">Zeplin Scenes:</span>{" "}
											<a
												href="https://scene.zeplin.io/project/63553e0832581916c8df356a"
												target="_blank"
												rel="noopener noreferrer"
												className="text-primary hover:underline"
											>
												Available here
											</a>
										</p>
										<p>
											<span className="font-semibold">Zeplin Flows:</span>{" "}
											<a
												href="https://zpl.io/5EMerK3"
												target="_blank"
												rel="noopener noreferrer"
												className="text-primary hover:underline"
											>
												Available here
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

export default GiveAGift;
