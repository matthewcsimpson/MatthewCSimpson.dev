import { Link } from "react-router-dom";

import type { ProjectData } from "@/types";
import { TagList } from "@/components";

import "@/components/Project/Project.scss";

const Project = ({
  id,
  title,
  description,
  group,
  imageSrc,
  tags,
}: ProjectData) => {
  return (
    <Link className="project" to={`/projects/${id}`}>
      <h4 className="project__title" id={id}>
        {group ? "I worked on" : "I made"}{" "}
        <span className="project__title--highlight">{title}</span>
      </h4>
      {group && (
        <h4 className="project__title project__title--group">
          with <span className="project__title--highlight">{group}</span>
        </h4>
      )}
      <p className="project__description">{description}</p>
      <div className="project__imagecontainer">
        <img className="project__image" src={imageSrc} alt={title} />
        <div
          className="project__overlay"
          aria-label={`View more about ${title}`}
        >
          <h2 className="project__overlay-text">
            Would You Like To Know More?
          </h2>
        </div>
      </div>
      <TagList tags={tags} />
    </Link>
  );
};

export default Project;
