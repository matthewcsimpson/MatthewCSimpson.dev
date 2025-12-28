import type { TagType } from "@/types";
import { generateTags } from "@/utils";

import "@/ui/Project/Project.scss";

interface ProjectProps {
  title: string;
  group: string;
  imageSrc: string;
  description: string;
  tags: TagType[];
}

const Project = ({
  title,
  group,
  imageSrc,
  description,
  tags,
}: ProjectProps) => {
  return (
    <>
      <div className="project">
        <h4 className="project__title">{title}</h4>
        <div className="project__imagecontainer">
          <img className="project__image" src={imageSrc} alt={title} />
        </div>
        <h5 className="project__group">{group}</h5>
        <p className="project__description">{description}</p>
        <div className="project__tags">{generateTags(tags)}</div>
      </div>
    </>
  );
};

export default Project;
