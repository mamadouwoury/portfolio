export interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  icon: string;
}

const skills: Skill[] = [
  { 
    name: "React", 
    level: "Advanced", 
    icon: "/icons/react.svg" 
  },
  { 
    name: "TypeScript", 
    level: "Intermediate", 
    icon: "/icons/typescript.svg" 
  },
  // Add more skills
];

export default skills;