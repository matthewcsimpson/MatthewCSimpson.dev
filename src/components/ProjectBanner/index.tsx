import { ProjectLinks, TagList } from "@/components";
import type { ProjectLink, TagType } from "@/types";

import "@/components/ProjectBanner/ProjectBanner.scss";

interface ProjectBannerProps {
  description?: string;
  links: ProjectLink[];
  name?: string;
  tags: TagType[];
}

const ProjectBanner = ({
  description,
  links,
  name,
  tags,
}: ProjectBannerProps) => {
  return (
    <div className="projectBanner">
      <div className="projectBanner__text">
        <h1 className="projectBanner__name">{name}</h1>
        <p className="projectBanner__description">{description}</p>
        <TagList tags={tags} align="left" />
      </div>
      <ProjectLinks links={links} />
    </div>
  );
};

export default ProjectBanner;
