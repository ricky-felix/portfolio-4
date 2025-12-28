import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { getProjectById } from "@/data/projects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CaseStudy = () => {
  const { id } = useParams<{ id: string }>();
  const project = getProjectById(id || "");

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl mb-4">Project not found</h1>
          <Link to="/#work" className="text-primary hover:underline">
            Back to work
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="container">
            <Link 
              to="/#work" 
              className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to work
            </Link>
            
            <div className="max-w-4xl">
              <p className="font-body text-sm tracking-widest text-primary uppercase mb-3">
                {project.category} — {project.year}
              </p>
              <h1 className="font-display text-5xl md:text-7xl tracking-tight mb-6">
                {project.title}
              </h1>
              <p className="font-body text-xl text-muted-foreground leading-relaxed mb-8">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {project.tags.map((tag, i) => (
                  <span 
                    key={tag} 
                    className={`font-body text-sm px-3 py-1.5 ${
                      i === 0 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a 
                href={project.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body text-sm px-6 py-3 bg-foreground text-background hover:bg-primary transition-colors"
              >
                View Live Project
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Main Image */}
        <section className="pb-16 md:pb-24">
          <div className="container">
            <div className="aspect-video bg-muted overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl mb-8">Overview</h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                {project.caseStudy.overview}
              </p>
            </div>
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 max-w-5xl mx-auto">
              <div>
                <h2 className="font-display text-3xl md:text-4xl mb-6 text-secondary">Challenge</h2>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {project.caseStudy.challenge}
                </p>
              </div>
              <div>
                <h2 className="font-display text-3xl md:text-4xl mb-6 text-primary">Solution</h2>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {project.caseStudy.solution}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl mb-10">Process</h2>
              <ol className="space-y-6">
                {project.caseStudy.process.map((step, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="font-display text-2xl text-primary shrink-0 w-8">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="font-body text-muted-foreground leading-relaxed pt-1">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Outcome */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl mb-8">Outcome</h2>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                {project.caseStudy.outcome}
              </p>
            </div>
          </div>
        </section>

        {/* Gallery */}
        {project.caseStudy.gallery.length > 1 && (
          <section className="py-16 md:py-24 bg-muted">
            <div className="container">
              <h2 className="font-display text-3xl md:text-4xl mb-10 text-center">Gallery</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {project.caseStudy.gallery.map((image, index) => (
                  <div key={index} className="aspect-video bg-background overflow-hidden">
                    <img 
                      src={image} 
                      alt={`${project.title} gallery ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Navigation */}
        <section className="py-16 md:py-24 border-t border-border">
          <div className="container">
            <div className="text-center">
              <p className="font-body text-sm text-muted-foreground mb-4">Want to see more?</p>
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

export default CaseStudy;
