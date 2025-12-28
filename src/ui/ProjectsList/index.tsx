import { type ProjectData } from "@/types";
import { generateProjects } from "@/utils";

import "@/ui/ProjectsList/ProjectsList.scss";

const projectsData: ProjectData[] = [
  {
    title: "Whale Report Administration",
    group: "Skyrocket Digital",
    imageSrc: "/images/whale-admin-home.png",
    description: "The Whale Report Administration is a web application.",
    tags: [
      { name: "HTML", type: "language" },
      { name: "TypeScript", type: "language" },
      { name: "CSS3", type: "language" },
      { name: "Sass", type: "framework" },
      { name: "React", type: "framework" },
      { name: "NextJS", type: "framework" },
      { name: "Azure", type: "default" },
    ],
  },
  {
    title: "Code4rena",
    group: "Stack Five",
    imageSrc: "/images/code4rena-home.png",
    description: "This is the first project.",
    tags: [
      { name: "HTML", type: "language" },
      { name: "TypeScript", type: "language" },
      { name: "CSS3", type: "language" },
      { name: "NextJS", type: "framework" },
      { name: "Sass", type: "framework" },
      { name: "Vercel", type: "default" },
    ],
  },
  {
    title: "York1",
    group: "Stack Five",
    imageSrc: "/images/york1-desktop-home.png",
    description: "This is the second project.",
    tags: [
      { name: "HTML", type: "language" },
      { name: "JavaScript", type: "language" },
      { name: "CSS3", type: "language" },
      { name: "Sass", type: "framework" },
    ],
  },
];

const ProjectsList = () => {
  return <div className="projectslist">{generateProjects(projectsData)}</div>;
};

export default ProjectsList;
