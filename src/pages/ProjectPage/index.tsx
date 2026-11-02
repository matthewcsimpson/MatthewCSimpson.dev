import { useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";

import { Container } from "@/components";
// Imported directly (not via the barrel) so react-markdown stays in this
// lazily loaded route's chunk.
import ProjectBanner from "@/components/ProjectBanner";
import ProjectDetails from "@/components/ProjectDetails";
import { projectsData } from "@/data";

import "@/pages/ProjectPage/ProjectPage.scss";

type ProjectPageParams = {
  projectId?: string;
};

const ProjectPage = () => {
  const { projectId } = useParams<ProjectPageParams>();

  const project = useMemo(
    () => projectsData.find((proj) => proj.id === projectId),
    [projectId],
  );

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const { title, description, longDescription, imageSrc, links, tags } =
    project;

  return (
    <Container
      leftChildren={
        <ProjectBanner
          name={title}
          links={links}
          description={description}
          tags={tags}
        />
      }
      rightChildren={
        <ProjectDetails
          title={title}
          description={description}
          longDescription={longDescription}
          imageSrc={imageSrc}
        />
      }
    />
  );
};

export default ProjectPage;
