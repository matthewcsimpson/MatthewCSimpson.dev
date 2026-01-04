import { ProjectLinks } from "@/components";
import type { ProjectLink } from "@/types";

import "@/components/ProjectBanner/ProjectBanner.scss";

interface ProjectBannerProps {
  description?: string;
  links: ProjectLink[];
  name?: string;
}

const ProjectBanner = ({ description, links, name }: ProjectBannerProps) => {
  return (
    <div className="ProjectBanner">
      <div className="ProjectBanner__text">
        <h1 className="ProjectBanner__name">{name}</h1>
        <p className="ProjectBanner__description">{description}</p>
      </div>
      <ProjectLinks links={links} />
    </div>
  );
};

export default ProjectBanner;
