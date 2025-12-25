const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="container">
        <div className="max-w-4xl">
          <p className="font-body text-sm tracking-widest text-muted-foreground uppercase mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            UI/UX Designer
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Crafting digital experiences with{" "}
            <em className="italic">intention</em> and{" "}
            <em className="italic">clarity</em>
          </h1>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            I help brands create meaningful connections through thoughtful design, 
            focusing on user-centered solutions that are both beautiful and functional.
          </p>
          <div className="mt-12 opacity-0 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <a
              href="#work"
              className="inline-flex items-center gap-3 font-body text-sm tracking-wide group"
            >
              <span className="link-underline">View selected work</span>
              <svg 
                className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
