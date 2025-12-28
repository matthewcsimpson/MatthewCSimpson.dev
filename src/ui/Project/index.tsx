import type { GithubType, TagType } from "@/types";
import { generateTags } from "@/utils";

import "@/ui/Project/Project.scss";

interface ProjectProps {
  title: string;
  group: string;
  imageSrc: string;
  description: string;
  tags: TagType[];
  liveLink?: string;
  githubLink?: string;
  githubType?: GithubType;
}

const Project = ({
  title,
  group,
  imageSrc,
  description,
  tags,
}: // liveLink,
// githubLink,
// githubType,
ProjectProps) => {
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
        <div className="project__tags">{generateTags(tags)}</div>
      </div>
    </>
  );
};

export default Project;
