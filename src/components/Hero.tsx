const Hero = () => {
	return (
		<section className="min-h-screen flex items-center pt-20">
			<div className="container">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Left Content */}
					<div>
						<span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm text-sm font-medium text-slate-600 border border-slate-100 mb-6">
							<span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
							Open to new opportunities
						</span>

						<div>
							<p
								className="font-body text-sm tracking-widest text-muted-foreground uppercase mb-6 opacity-0 animate-fade-up"
								style={{ animationDelay: "0.1s" }}
							>
								UI/UX Engineer with a product mindset
							</p>
							<h1
								className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight mb-8 opacity-0 animate-fade-up"
								style={{ animationDelay: "0.2s" }}
							>
								Hi, my name is
								<br />
								<em className="italic text-primary hover:text-secondary transition-colors duration-500 cursor-default">
									Ricky Felix
								</em>
							</h1>
							<p
								className="font-body text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed opacity-0 animate-fade-up"
								style={{ animationDelay: "0.3s" }}
							>
								UI/UX designer with product management and frontend development
								experience. I bridge the gap between design, product, and
								development. Creating thoughtful digital experiences backed by
								research and delivered with precision—from writing PRDs,
								designing high-fidelity prototypes, to shipping code in React.js
								and conducting usability testing.
							</p>
							<div
								className="mt-12 flex flex-wrap items-center gap-6 opacity-0 animate-fade-up"
								style={{ animationDelay: "0.4s" }}
							>
								<a
									href="#work"
									className="inline-flex items-center gap-3 font-body text-sm tracking-wide group hover:text-primary transition-colors duration-300"
								>
									<span className="link-underline">View featured projects</span>
									<svg
										className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={1.5}
											d="M17 8l4 4m0 0l-4 4m4-4H3"
										/>
									</svg>
								</a>
								<div className="flex items-center gap-4">
									<a
										href="https://github.com/rickyfelix19"
										target="_blank"
										rel="noopener noreferrer"
										className="p-2 text-muted-foreground hover:text-foreground hover:scale-110 transition-all duration-300"
										aria-label="GitHub"
									>
										<svg
											className="w-5 h-5"
											fill="currentColor"
											viewBox="0 0 24 24"
										>
											<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
										</svg>
									</a>
									<a
										href="https://linkedin.com/in/ricky-felix"
										target="_blank"
										rel="noopener noreferrer"
										className="p-2 text-muted-foreground hover:text-foreground hover:scale-110 transition-all duration-300"
										aria-label="LinkedIn"
									>
										<svg
											className="w-5 h-5"
											fill="currentColor"
											viewBox="0 0 24 24"
										>
											<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
										</svg>
									</a>
									<a
										href="mailto:rickyy.felixx@icloud.com"
										className="p-2 text-muted-foreground hover:text-foreground hover:scale-110 transition-all duration-300"
										aria-label="Email"
									>
										<svg
											className="w-5 h-5"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={1.5}
												d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
											/>
										</svg>
									</a>
								</div>
							</div>
						</div>
					</div>

					{/* Right Visual Element */}
					<div className="relative hidden lg:flex items-center justify-center min-h-[600px]">
						{/* Animated gradient orbs - positioned behind everything */}
						<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
							<div className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
							<div
								className="absolute w-80 h-80 bg-secondary/15 rounded-full blur-3xl animate-pulse-slow"
								style={{ animationDelay: "2s" }}
							></div>
						</div>

						{/* Main content wrapper */}
						<div className="relative">
							{/* Profile image container */}
							<div
								className="relative z-20 w-96 h-96 opacity-0 animate-fade-up"
								style={{ animationDelay: "0.5s" }}
							>
								<div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm border border-slate-200 shadow-2xl">
									<img
										src="./Ricky-Felix-Picture.jpg"
										alt="Ricky Felix"
										className="w-full h-full object-cover"
									/>
								</div>
							</div>

							{/* Floating geometric shapes - positioned around the image */}
							<div className="absolute inset-0 pointer-events-none">
								{/* Top left square */}
								<div
									className="absolute -top-8 -left-8 w-20 h-20 border-2 border-primary/40 rounded-lg rotate-12 animate-float-delayed"
									style={{ animationDelay: "0.8s" }}
								></div>

								{/* Top right circle */}
								<div
									className="absolute -top-6 -right-10 w-16 h-16 border-2 border-secondary/40 rounded-full animate-float-delayed"
									style={{ animationDelay: "1.1s" }}
								></div>

								{/* Middle left triangle */}
								<div
									className="absolute top-1/3 -left-12 w-14 h-14 border-2 border-primary/30 rotate-45 animate-float-delayed"
									style={{ animationDelay: "1.4s" }}
								></div>

								{/* Middle right filled square */}
								<div
									className="absolute top-1/2 -right-8 w-12 h-12 bg-secondary/10 backdrop-blur-sm rounded-lg -rotate-12 animate-float-delayed"
									style={{ animationDelay: "1.7s" }}
								></div>

								{/* Bottom left circle */}
								<div
									className="absolute -bottom-10 -left-6 w-18 h-18 border-2 border-secondary/35 rounded-full animate-float-delayed"
									style={{ animationDelay: "2s" }}
								></div>

								{/* Bottom right small square */}
								<div
									className="absolute -bottom-4 -right-12 w-16 h-16 bg-primary/10 backdrop-blur-sm rounded-lg rotate-45 animate-float-delayed"
									style={{ animationDelay: "2.3s" }}
								></div>

								{/* Extra accent dot top */}
								<div
									className="absolute top-1/4 right-1/4 w-3 h-3 bg-primary rounded-full opacity-0 animate-fade-in"
									style={{ animationDelay: "2.6s" }}
								></div>

								{/* Extra accent dot bottom */}
								<div
									className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-secondary rounded-full opacity-0 animate-fade-in"
									style={{ animationDelay: "2.9s" }}
								></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
