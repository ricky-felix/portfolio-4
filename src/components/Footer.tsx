const Footer = () => {
  const socialLinks = [
    { label: "LinkedIn", href: "#" },
    { label: "Dribbble", href: "#" },
    { label: "Twitter", href: "#" },
  ];

  return (
    <footer className="py-8 border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-body text-sm text-muted-foreground">
            © 2024 Studio. All rights reserved.
          </p>
          
          <ul className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
