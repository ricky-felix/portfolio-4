const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-3xl">
          <p className="font-body text-sm tracking-widest text-muted-foreground uppercase mb-3">
            Get in touch
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl tracking-tight mb-8">
            Let's create something{" "}
            <em className="italic text-secondary">meaningful</em> together
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-12 max-w-xl">
            I'm currently open to new opportunities. If you have a project or role 
            you'd like to discuss, I'd love to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="mailto:rickyy.felixx@icloud.com"
              className="inline-flex items-center gap-3 font-body text-lg group"
            >
              <span className="link-underline">rickyy.felixx@icloud.com</span>
              <svg 
                className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/ricky-felix"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-body text-lg group text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="link-underline">LinkedIn</span>
              <svg 
                className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
