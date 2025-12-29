import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();

	const navItems = [
		{ label: "Work", href: "#work" },
		{ label: "Experience", href: "#experience" },
		{ label: "About", href: "#about" },
		{ label: "Contact", href: "#contact" },
	];

	const handleNavClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		href: string
	) => {
		e.preventDefault();
		setIsMenuOpen(false);

		// If we're not on the home page, navigate to home page with hash
		if (location.pathname !== "/") {
			navigate(`/${href}`);
		} else {
			// If we're on the home page, smooth scroll to the section
			const element = document.querySelector(href);
			if (element) {
				element.scrollIntoView({ behavior: "smooth", block: "start" });
			}
		}
	};

	return (
		<header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:py-6">
			<div className="container">
				<nav className="flex items-center justify-between bg-background/95 backdrop-blur-md border border-border/50 rounded-full px-4 md:px-6 h-14 md:h-16 shadow-lg shadow-black/5">
					<a
						href="/"
						onClick={(e) => {
							e.preventDefault();
							navigate("/");
						}}
						className="font-display text-lg md:text-xl tracking-tight hover:text-primary transition-colors"
					>
						Ricky Felix
					</a>

					{/* Desktop Navigation */}
					<ul className="hidden md:flex items-center gap-1">
						{navItems.map((item) => (
							<li key={item.label}>
								<a
									href={item.href}
									onClick={(e) => handleNavClick(e, item.href)}
									className="font-body text-sm tracking-wide px-4 py-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-300"
								>
									{item.label}
								</a>
							</li>
						))}
						<li>
							<a
								href="/Ricky_Felix-Resume-UIUX_Designer.pdf"
								target="_blank"
								rel="noopener noreferrer"
								className="font-body text-sm tracking-wide px-5 py-2.5 ml-2 bg-primary text-primary-foreground rounded-full hover:bg-secondary hover:text-secondary-foreground hover:scale-105 transition-all duration-300 shadow-sm"
							>
								Resume
							</a>
						</li>
					</ul>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="md:hidden p-2 hover:bg-muted rounded-full transition-colors"
						aria-label="Toggle menu"
					>
						<div className="w-5 flex flex-col gap-1.5">
							<span
								className={`block h-0.5 bg-foreground rounded-full transition-all duration-300 ${
									isMenuOpen ? "rotate-45 translate-y-2" : ""
								}`}
							/>
							<span
								className={`block h-0.5 bg-foreground rounded-full transition-all duration-300 ${
									isMenuOpen ? "opacity-0" : ""
								}`}
							/>
							<span
								className={`block h-0.5 bg-foreground rounded-full transition-all duration-300 ${
									isMenuOpen ? "-rotate-45 -translate-y-2" : ""
								}`}
							/>
						</div>
					</button>
				</nav>
			</div>

			{/* Mobile Menu */}
			<div
				className={`md:hidden overflow-hidden transition-all duration-300 ${
					isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
				}`}
			>
				<div className="container mt-4">
					<div className="bg-background/95 backdrop-blur-md border border-border/50 rounded-3xl shadow-lg shadow-black/5">
						<ul className="p-4 flex flex-col gap-2">
							{navItems.map((item) => (
								<li key={item.label}>
									<a
										href={item.href}
										onClick={(e) => handleNavClick(e, item.href)}
										className="block font-body text-base px-4 py-3 rounded-2xl text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-300"
									>
										{item.label}
									</a>
								</li>
							))}
							<li className="pt-2 border-t border-border/50 mt-2">
								<a
									href="/Ricky_Felix-Resume-UIUX_Designer.pdf"
									target="_blank"
									rel="noopener noreferrer"
									className="block text-center font-body text-base px-4 py-3 bg-primary text-primary-foreground rounded-2xl hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
								>
									Resume
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
