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
    [projectId]
  );

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const { title, description, longDescription, imageSrc, links, tags } =
    project;

  return (
    <Container
      leftChildren={<ProjectBanner name={title} description={description} />}
      rightChildren={
        <ProjectDetails
          title={title}
          description={description}
          longDescription={longDescription}
          imageSrc={imageSrc}
          links={links}
          tags={tags}
        />
      }
    />
  );
};

export default ProjectPage;
