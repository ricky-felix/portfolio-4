import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "KIPI Conference",
    category: "Project Lead at PPIA",
    year: "2022",
    description: "Led team to create a conference website for Indonesian academics sharing PhD research.",
    tags: ["Figma", "Webflow", "Project Manager"],
    image: "https://rickyfelix025.vercel.app/home/KIPI_PPIA.png",
    demoUrl: "https://symposium-ppid.webflow.io/",
  },
  {
    title: "Give a Gift",
    category: "USYD Mobile Computing",
    year: "2023",
    description: "Gift gifting solution for long-distance relationships. Featured as one of the best UX solutions.",
    tags: ["UI/UX", "Figma", "Android Studio", "Firebase"],
    image: "https://rickyfelix025.vercel.app/home/Give_a_Gift.webp",
    demoUrl: "https://github.com/rickyfelix19/give-a-gift-copy",
  },
  {
    title: "Bottled Moments",
    category: "USYD IDEA Studio",
    year: "2023",
    description: "Digital experience connecting people to lakes by sending memories and gifts. Presented at mapMIMA.",
    tags: ["Tailwind CSS", "p5.js", "Resolume", "Figma"],
    image: "https://rickyfelix025.vercel.app/home/Bottled_Moments.webp",
    demoUrl: "https://github.com/rickyfelix19/bottled-moments",
  },
  {
    title: "Niamod Properties",
    category: "USYD Interface Design",
    year: "2023",
    description: "House tour interface redesign for Domain Real Estates. Received best solution recognition.",
    tags: ["Design Thinking", "Figma", "Miro"],
    image: "https://rickyfelix025.vercel.app/home/Interface_Design.webp",
    demoUrl: "https://www.figma.com/design/5N7gi9s7N7sToU9dwhGRrh/Niamod-Properties---Website",
  },
];

const Work = () => {
  return (
    <section id="work" className="py-24 md:py-32">
      <div className="container">
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <div>
            <p className="font-body text-sm tracking-widest text-muted-foreground uppercase mb-3">
              Featured Projects
            </p>
            <h2 className="font-display text-4xl md:text-5xl tracking-tight">
              Selected work
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
