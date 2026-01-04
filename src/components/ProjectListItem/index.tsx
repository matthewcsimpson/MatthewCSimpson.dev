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
    <Link className="ProjectListItem" to={`/project/${id}`}>
      <h4 className="ProjectListItem__title" id={id}>
        {group ? "I worked on" : "I made"}{" "}
        <span className="ProjectListItem__title--highlight">{title}</span>
      </h4>
      {group && (
        <h4 className="ProjectListItem__title ProjectListItem__title--group">
          with{" "}
          <span className="ProjectListItem__title--highlight">{group}</span>
        </h4>
      )}
      <p className="ProjectListItem__description">{description}</p>
      <div className="ProjectListItem__imagecontainer">
        <img className="ProjectListItem__image" src={imageSrc} alt={title} />
        <div
          className="ProjectListItem__overlay"
          aria-label={`View more about ${title}`}
        >
          <h2 className="ProjectListItem__overlay-text">
            Would You Like To Know More?
          </h2>
        </div>
      </div>
      <TagList tags={tags} />
    </Link>
  );
};

export default ProjectListItem;
