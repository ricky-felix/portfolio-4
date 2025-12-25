const About = () => {
  const skills = [
    "User Research",
    "Wireframing",
    "Prototyping",
    "Visual Design",
    "Design Systems",
    "Interaction Design",
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-secondary">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          <div>
            <p className="font-body text-sm tracking-widest text-muted-foreground uppercase mb-3">
              About
            </p>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-8">
              Creating with purpose
            </h2>
            <div className="space-y-6 font-body text-muted-foreground leading-relaxed">
              <p>
                With over 8 years of experience in digital design, I specialize in 
                creating intuitive user experiences that bridge the gap between 
                business objectives and user needs.
              </p>
              <p>
                My approach combines strategic thinking with meticulous attention 
                to detail, ensuring every project delivers measurable results 
                while maintaining aesthetic excellence.
              </p>
              <p>
                Currently based in Copenhagen, available for select projects 
                and collaborations worldwide.
              </p>
            </div>
          </div>

          <div>
            <p className="font-body text-sm tracking-widest text-muted-foreground uppercase mb-6">
              Expertise
            </p>
            <ul className="space-y-4">
              {skills.map((skill, index) => (
                <li 
                  key={skill}
                  className="font-display text-2xl md:text-3xl border-b border-border pb-4"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
