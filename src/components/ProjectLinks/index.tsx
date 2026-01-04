import { generateLinkText } from "@/utils/generators";

import { type ProjectLink } from "@/types";

import "@/components/ProjectLinks/ProjectLinks.scss";

interface ProjectLinksProps {
  links: ProjectLink[];
}

const ProjectLinks = ({ links }: ProjectLinksProps) => {
  return (
    <div className="projectLinks" aria-label="Project Links">
      <ul className="projectLinks__list">
        {links.map((link) => (
          <li
            key={`${link.type}-${link.link}`}
            className={`projectLinks__listItem projectLinks__listItem--${link.type}`}
          >
            {generateLinkText(link)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectLinks;
