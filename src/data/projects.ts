export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl: string;
  caseStudy: {
    overview: string;
    challenge: string;
    solution: string;
    process: string[];
    outcome: string;
    gallery: string[];
  };
}

export const projects: Project[] = [
  {
    id: "kipi-conference",
    title: "KIPI Conference",
    category: "Project Lead at PPIA",
    year: "2022",
    description: "Led team to create a conference website for Indonesian academics sharing PhD research.",
    tags: ["Figma", "Webflow", "Project Manager"],
    image: "https://rickyfelix025.vercel.app/home/KIPI_PPIA.png",
    demoUrl: "https://symposium-ppid.webflow.io/",
    caseStudy: {
      overview: "KIPI (Konferensi Ilmiah Pelajar Indonesia) is an annual academic conference organized by PPIA (Perhimpunan Pelajar Indonesia Australia) that brings together Indonesian PhD students and researchers to share their latest research findings.",
      challenge: "The conference needed a professional digital presence that could effectively communicate the event's academic credibility while being accessible to a diverse audience of researchers, students, and industry professionals across different time zones.",
      solution: "I led a cross-functional team to design and develop a responsive conference website using Figma for design and Webflow for development. The site featured a clear information architecture, speaker profiles, abstract submission system, and registration flow.",
      process: [
        "Conducted stakeholder interviews to understand requirements and constraints",
        "Created user personas for different attendee types (researchers, students, sponsors)",
        "Developed wireframes and high-fidelity prototypes in Figma",
        "Built the responsive website in Webflow with CMS integration",
        "Coordinated with the organizing committee for content and testing"
      ],
      outcome: "The website successfully supported the conference with over 200 registrations. The clear navigation and professional design contributed to positive feedback from attendees and sponsors.",
      gallery: [
        "https://rickyfelix025.vercel.app/home/KIPI_PPIA.png"
      ]
    }
  },
  {
    id: "give-a-gift",
    title: "Give a Gift",
    category: "USYD Mobile Computing",
    year: "2023",
    description: "Gift gifting solution for long-distance relationships. Featured as one of the best UX solutions.",
    tags: ["UI/UX", "Figma", "Android Studio", "Firebase"],
    image: "https://rickyfelix025.vercel.app/home/Give_a_Gift.webp",
    demoUrl: "https://github.com/rickyfelix19/give-a-gift-copy",
    caseStudy: {
      overview: "Give a Gift is a mobile application designed to help people in long-distance relationships maintain meaningful connections through thoughtful gift-giving experiences.",
      challenge: "Long-distance relationships often struggle with maintaining emotional connection. Traditional gift-giving becomes complicated by distance, timing, and the inability to share in-person experiences. Users needed a way to send meaningful gifts that felt personal despite the physical separation.",
      solution: "We developed an Android application that allows users to schedule and send virtual and physical gifts with personalized messages, create shared wishlists, and track special occasions. The app integrates with local delivery services to facilitate gift delivery across different locations.",
      process: [
        "Conducted user research with 15 individuals in long-distance relationships",
        "Created empathy maps and journey maps to understand pain points",
        "Designed low-fidelity wireframes and conducted usability testing",
        "Developed high-fidelity prototypes in Figma",
        "Built the Android app using Kotlin and Firebase for real-time features",
        "Iterated based on user feedback from beta testing"
      ],
      outcome: "The project was recognized as one of the best UX solutions in the Mobile Computing course. User testing showed a 85% satisfaction rate with the gift scheduling and delivery tracking features.",
      gallery: [
        "https://rickyfelix025.vercel.app/home/Give_a_Gift.webp"
      ]
    }
  },
  {
    id: "bottled-moments",
    title: "Bottled Moments",
    category: "USYD IDEA Studio",
    year: "2023",
    description: "Digital experience connecting people to lakes by sending memories and gifts. Presented at mapMIMA.",
    tags: ["Tailwind CSS", "p5.js", "Resolume", "Figma"],
    image: "https://rickyfelix025.vercel.app/home/Bottled_Moments.webp",
    demoUrl: "https://github.com/rickyfelix19/bottled-moments",
    caseStudy: {
      overview: "Bottled Moments is an interactive digital installation that creates a connection between people and natural water bodies by allowing them to send virtual 'bottles' containing memories, messages, and digital gifts to specific lakes around the world.",
      challenge: "In an increasingly digital world, people are becoming disconnected from natural environments. The project aimed to create a meaningful digital experience that would encourage reflection on our relationship with water bodies and the memories we associate with them.",
      solution: "We created an immersive web experience using p5.js for interactive visuals and Resolume for projection mapping. Users can write messages, attach digital memorabilia, and 'cast' them into virtual representations of real lakes. Other users can discover and open these bottles, creating a global network of shared experiences.",
      process: [
        "Researched the cultural significance of message-in-a-bottle traditions",
        "Prototyped interactive particle systems in p5.js",
        "Designed the user interface for message creation and discovery",
        "Integrated with Resolume for large-scale projection installations",
        "Conducted user testing at USYD campus events",
        "Presented the final installation at mapMIMA exhibition"
      ],
      outcome: "The project was selected for presentation at mapMIMA, an exhibition showcasing innovative media arts. The installation received positive feedback for its poetic approach to digital connection and environmental awareness.",
      gallery: [
        "https://rickyfelix025.vercel.app/home/Bottled_Moments.webp"
      ]
    }
  },
  {
    id: "niamod-properties",
    title: "Niamod Properties",
    category: "USYD Interface Design",
    year: "2023",
    description: "House tour interface redesign for Domain Real Estates. Received best solution recognition.",
    tags: ["Design Thinking", "Figma", "Miro"],
    image: "https://rickyfelix025.vercel.app/home/Interface_Design.webp",
    demoUrl: "https://www.figma.com/design/5N7gi9s7N7sToU9dwhGRrh/Niamod-Properties---Website",
    caseStudy: {
      overview: "Niamod Properties is a conceptual redesign of Domain's property viewing experience, focusing on improving the virtual house tour interface to provide a more immersive and informative property exploration experience.",
      challenge: "Existing property listing websites often provide static images and basic floor plans, making it difficult for prospective buyers to truly understand a property's layout, dimensions, and livability. Virtual tours exist but are often clunky and don't provide contextual information.",
      solution: "We redesigned the virtual tour experience with an intuitive navigation system, contextual information overlays, and interactive floor plans that sync with the 3D view. Users can annotate properties, compare rooms, and save specific viewpoints for later reference.",
      process: [
        "Analyzed competitor property platforms and identified UX gaps",
        "Conducted interviews with real estate agents and property seekers",
        "Created user journey maps in Miro",
        "Developed design system and component library in Figma",
        "Built interactive prototype with micro-interactions",
        "Conducted A/B testing with 20 participants"
      ],
      outcome: "The redesign was recognized as the best solution in the Interface Design course. User testing showed a 40% reduction in time needed to understand property layouts compared to traditional listing pages.",
      gallery: [
        "https://rickyfelix025.vercel.app/home/Interface_Design.webp"
      ]
    }
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};
