export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Responsive personal portfolio built with Next.js and Tailwind CSS",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubLink: "https://github.com/yourusername/portfolio",
    image: "/projects/portfolio.png"
  },
  // Add more projects here
];

export default projects;