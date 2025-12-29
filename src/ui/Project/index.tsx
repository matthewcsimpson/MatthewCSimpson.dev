import { Link } from "react-router-dom";

import type { TagType } from "@/types";

import "@/ui/Project/Project.scss";
import TagList from "../TagList";

interface ProjectProps {
  id: string;
  title: string;
  group: string;
  imageSrc: string;
  description: string;
  tags: TagType[];
}

const Project = ({
  id,
  title,
  group,
  imageSrc,
  description,
  tags,
}: ProjectProps) => {
  return (
    <>
      <div className="project">
        <h4 className="project__title">
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
        </div>
        <TagList tags={tags} />
        <Link className="project__overlay" to={`/project/${id}`}>
          <h2 className="project__overlay-text">
            Would You Like To Know More?
          </h2>
        </Link>
      </div>
    </>
  );
};

export default Project;
