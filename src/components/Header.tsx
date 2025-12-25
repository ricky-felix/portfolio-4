import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <nav className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="font-display text-xl md:text-2xl tracking-tight">
          Ricky Felix
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-body text-sm tracking-wide link-underline text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://linktr.ee/rickyfelix25"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm tracking-wide px-4 py-2 bg-foreground text-background hover:bg-foreground/90 transition-colors"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-px bg-foreground transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`} />
            <span className={`block h-px bg-foreground transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-px bg-foreground transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border">
          <ul className="container py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-body text-lg text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://linktr.ee/rickyfelix25"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-body text-lg px-4 py-2 bg-foreground text-background"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
