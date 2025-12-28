import { ProjectsList, SectionHeader } from "@/ui";

import "@/components/Projects/Projects.scss";

const ProjectsText = {
  title: "Projects",
  // description:
  //   "This is a list of projects I have worked on both personally and professoinally which range from the very silly to the very serious.",
};

const Projects = () => {
  return (
    <div className="projects">
      <SectionHeader
        title={ProjectsText.title}
        // description={ProjectsText.description}
      />

      <ProjectsList />
    </div>
  );
};

export default Projects;
