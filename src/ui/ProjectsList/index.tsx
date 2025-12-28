import { type ProjectData } from "@/types";
import { generateProjects } from "@/utils/generators";

import "@/ui/ProjectsList/ProjectsList.scss";

const projectsData: ProjectData[] = [
  {
    title: "Whale Report Administration",
    group: "Skyrocket Digital",
    imageSrc: "/images/whale-admin-home.png",
    description: "The Whale Report Administration is a web application.",
    tags: ["HTML", "TypeScript", "CSS3", "Sass", "React", "NextJS", "Azure"],
  },
  {
    title: "Code4rena",
    group: "Stack Five",
    imageSrc: "/images/code4rena-home.png",
    description: "This is the first project.",
    tags: ["HTML", "TypeScript", "CSS3", "NextJS", "Sass", "Vercel"],
  },
  {
    title: "York1",
    group: "Stack Five",
    imageSrc: "/images/york1-desktop-home.png",
    description: "This is the second project.",
    tags: ["HTML", "JavaScript", "CSS3", "Sass"],
  },
];

const ProjectsList = () => {
  return <div className="projectslist">{generateProjects(projectsData)}</div>;
};

export default ProjectsList;
