import { useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";

import { Container, ProjectBanner, ProjectDetails } from "@/components";
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
