import { projectsData } from "@/data";
import { generateProjects } from "@/utils";

import "@/components/ProjectsList/ProjectsList.scss";

const ProjectsList = () => {
  return <div className="projectsList">{generateProjects(projectsData)}</div>;
};

export default ProjectsList;
