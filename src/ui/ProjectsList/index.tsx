import { projectsData } from "@/data";
import { generateProjects } from "@/utils";

import "@/ui/ProjectsList/ProjectsList.scss";

const ProjectsList = () => {
  return <div className="projectslist">{generateProjects(projectsData)}</div>;
};

export default ProjectsList;
