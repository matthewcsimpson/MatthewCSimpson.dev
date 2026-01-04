import { generateLinkText } from "@/utils/generators";

import { type ProjectLink } from "@/types";

import "@/components/ProjectLinks/ProjectLinks.scss";

interface ProjectLinksProps {
  links: ProjectLink[];
}

const ProjectLinks = ({ links }: ProjectLinksProps) => {
  return (
    <div className="ProjectLinks" aria-label="Project Links">
      <ul className="ProjectLinks__list">
        {links.map((link) => (
          <li
            key={`${link.type}-${link.link}`}
            className={`ProjectLinks__listItem ProjectLinks__listItem--${link.type}`}
          >
            {generateLinkText(link)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectLinks;
