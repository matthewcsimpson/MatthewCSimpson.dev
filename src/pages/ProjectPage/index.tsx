import { Link, useParams } from "react-router-dom";

import { Container, TagList } from "@/components";
import { projectsData } from "@/data";

import "@/pages/ProjectPage/ProjectPage.scss";

const ProjectPage = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectsData.find(({ id }) => id === projectId);

  return (
    <Container
      rightChildren={
        project ? (
          <div className="ProjectPage">
            <h1 className="ProjectPage__title">{project.title}</h1>
            {project.group && (
              <p className="ProjectPage__group">Created with {project.group}</p>
            )}
            <div className="ProjectPage__media">
              <img
                className="ProjectPage__image"
                src={project.imageSrc}
                alt={`${project.title} preview`}
              />
            </div>
            <p className="ProjectPage__description">
              {project.longDescription ?? project.description}
            </p>
            <TagList tags={project.tags} />
            <div className="ProjectPage__links">
              {project.liveLink && (
                <a
                  className="ProjectPage__link"
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Live
                </a>
              )}
              {project.githubLink && (
                <a
                  className="ProjectPage__link"
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub
                </a>
              )}
            </div>
          </div>
        ) : (
          <div className="ProjectPage ProjectPage--missing">
            <p className="ProjectPage__message">Project not found.</p>
            <Link className="ProjectPage__back" to="/">
              Back to projects
            </Link>
          </div>
        )
      }
    />
  );
};

export default ProjectPage;
