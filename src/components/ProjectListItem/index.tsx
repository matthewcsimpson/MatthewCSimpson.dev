import { Link } from "react-router-dom";

import type { ProjectData } from "@/types";
import { TagList } from "@/components";

import "@/components/ProjectListItem/ProjectListItem.scss";

const ProjectListItem = ({
  id,
  title,
  description,
  group,
  imageSrc,
  tags,
}: ProjectData) => {
  return (
    <div className="ProjectListItem">
      <h4 className="ProjectListItem__title" id={id}>
        {group ? "I worked on" : "I made"}{" "}
        <Link
          to={`/project/${id}`}
          aria-label={`View more about ${title}`}
          className="ProjectListItem__title--highlight"
        >
          {title}
        </Link>
      </h4>
      {group && (
        <h4 className="ProjectListItem__title ProjectListItem__title--group">
          with{" "}
          <a
            href={`#${group.replace(/\s+/g, "-").toLowerCase()}`}
            className="ProjectListItem__title--highlight"
          >
            {group}
          </a>
        </h4>
      )}
      <p className="ProjectListItem__description">{description}</p>
      <div className="ProjectListItem__imagecontainer">
        <img className="ProjectListItem__image" src={imageSrc} alt={title} />
        <Link
          className="ProjectListItem__overlay"
          to={`/project/${id}`}
          aria-label={`View more about ${title}`}
        >
          <h2 className="ProjectListItem__overlay-text">
            Would You Like To Know More?
          </h2>
        </Link>
      </div>
      <TagList tags={tags} />
    </div>
  );
};

export default ProjectListItem;
