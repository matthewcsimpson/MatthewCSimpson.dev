import { Link, useParams } from "react-router-dom";

import { projectsData } from "@/data";
import TagList from "@/ui/TagList";

import "@/pages/ProjectDetails/ProjectDetails.scss";

const ProjectDetails = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectsData.find(({ id }) => id === projectId);

  return (
    <div className="container">
      <div className="left"></div>
      <div className="right">
        {project ? (
          <div className="projectdetails">
            <Link className="projectdetails__back" to="/">
              Back to projects
            </Link>
            <h1 className="projectdetails__title">{project.title}</h1>
            {project.group && (
              <p className="projectdetails__group">
                Created with {project.group}
              </p>
            )}
            <div className="projectdetails__media">
              <img
                className="projectdetails__image"
                src={project.imageSrc}
                alt={`${project.title} preview`}
              />
            </div>
            <p className="projectdetails__description">
              {project.longDescription ?? project.description}
            </p>
            <TagList tags={project.tags} />
            <div className="projectdetails__links">
              {project.liveLink && (
                <a
                  className="projectdetails__link"
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Live
                </a>
              )}
              {project.githubLink && (
                <a
                  className="projectdetails__link"
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
          <div className="projectdetails projectdetails--missing">
            <p className="projectdetails__message">Project not found.</p>
            <Link className="projectdetails__back" to="/">
              Back to projects
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
