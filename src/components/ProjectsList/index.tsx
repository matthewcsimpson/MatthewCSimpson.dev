import { projectsData } from "@/data";
import { generateProjects } from "@/utils";

import "@/components/ProjectsList/ProjectsList.scss";

const ProjectsList = () => {
  return <div className="projectslist">{generateProjects(projectsData)}</div>;
};

export default ProjectsList;
