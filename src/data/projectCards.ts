export interface ProjectCard {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  image: string;
}

export const projectCards: ProjectCard[] = [
  {
    id: "kipi-conference",
    title: "KIPI Conference",
    category: "Project Lead at PPIA",
    year: "2022",
    description: "Led team to create a conference website for Indonesian academics sharing PhD research.",
    tags: ["Figma", "Webflow", "Project Manager"],
    image: "https://rickyfelix025.vercel.app/home/KIPI_PPIA.png",
  },
  {
    id: "give-a-gift",
    title: "Give a Gift",
    category: "USYD Mobile Computing",
    year: "2023",
    description: "Gift gifting solution for long-distance relationships. Featured as one of the best UX solutions.",
    tags: ["UI/UX", "Figma", "Android Studio", "Firebase"],
    image: "https://rickyfelix025.vercel.app/home/Give_a_Gift.webp",
  },
  {
    id: "bottled-moments",
    title: "Bottled Moments",
    category: "USYD IDEA Studio",
    year: "2023",
    description: "Digital experience connecting people to lakes by sending memories and gifts. Presented at mapMIMA.",
    tags: ["Tailwind CSS", "p5.js", "Resolume", "Figma"],
    image: "https://rickyfelix025.vercel.app/home/Bottled_Moments.webp",
  },
  {
    id: "niamod-properties",
    title: "Niamod Properties",
    category: "USYD Interface Design",
    year: "2023",
    description: "House tour interface redesign for Domain Real Estates. Received best solution recognition.",
    tags: ["Design Thinking", "Figma", "Miro"],
    image: "https://rickyfelix025.vercel.app/home/Interface_Design.webp",
  }
];
