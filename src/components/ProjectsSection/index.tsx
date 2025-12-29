import ProjectsList from "@/components/ProjectsList";
import SectionHeader from "@/components/SectionHeader";

import "@/components/ProjectsSection/ProjectsSection.scss";

const ProjectsText = {
  title: "Projects",
  // description:
  //   "This is a list of projects I have worked on both personally and professoinally which range from the very silly to the very serious.",
};

const ProjectsSection = () => {
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

export default ProjectsSection;
