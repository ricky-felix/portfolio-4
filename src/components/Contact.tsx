import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`max-w-4xl mx-auto text-center scroll-hidden ${isVisible ? 'scroll-visible' : ''}`}
        >
          <p className="font-body text-base md:text-lg tracking-widest text-muted-foreground uppercase mb-4">
            Get in touch
          </p>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight mb-10">
            Let's create something{" "}
            <em className="italic text-secondary">meaningful</em> together
          </h2>
          <p className="font-body text-xl md:text-2xl text-muted-foreground mb-16 max-w-2xl mx-auto">
            I'm currently open to new opportunities. If you have a project or role
            you'd like to discuss, I'd love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center flex-wrap">
            <a
              href="mailto:rickyy.felixx@icloud.com"
              className="inline-flex items-center gap-3 font-body text-xl md:text-2xl group icon-bounce"
            >
              <span className="link-underline">rickyy.felixx@icloud.com</span>
              <svg
                className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
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
              className="inline-flex items-center gap-3 font-body text-xl md:text-2xl group text-muted-foreground hover:text-foreground transition-colors icon-bounce"
            >
              <span className="link-underline">LinkedIn</span>
              <svg
                className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
            <a
              href="https://github.com/rickyfelix19"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-body text-xl md:text-2xl group text-muted-foreground hover:text-foreground transition-colors icon-bounce"
            >
              <span className="link-underline">GitHub</span>
              <svg
                className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
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
