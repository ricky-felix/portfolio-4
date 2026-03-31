const Footer = () => {
	const socialLinks = [
		// { label: "LinkedIn", href: "https://linkedin.com/in/ricky-felix" },
		// { label: "GitHub", href: "https://github.com/rickyfelix19" },
		// { label: "Linktree", href: "https://linktr.ee/rickyfelix25" },
	];

	return (
		<footer className="py-8 border-t border-border">
			<div className="container">
				<div className="flex flex-col items-center justify-center gap-6 text-center">
					<ul className="flex items-center gap-6">
						{socialLinks.map((link) => (
							<li key={link.label}>
								<a
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
									className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
								>
									{link.label}
								</a>
							</li>
						))}
					</ul>

					<p className="font-body text-sm text-muted-foreground">
						2026 Ricky Felix - Design with Intention.
					</p>
					<p className="font-body text-sm text-muted-foreground">
						This website is continuously being improved. Built with React and
						Tailwind CSS. <br />
						Old website versions can be found{" "}
						<a
							href="https://rickyfelix025.vercel.app/"
							target="_blank"
							rel="noopener noreferrer"
							className="underline hover:text-foreground transition-colors"
						>
							here
						</a>
						.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
