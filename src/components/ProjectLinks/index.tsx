import { type ProjectLink } from "@/types";

import "@/components/ProjectLinks/ProjectLinks.scss";

interface ProjectLinksProps {
  links: ProjectLink[];
}

const generateLinkText = (link: ProjectLink) => {
  return (
    <a
      href={link.link}
      target="_blank"
      rel="noopener noreferrer"
      className="ProjectLinks__link"
    >
      {link.text}
      <img
        src={"/icons/external-link.svg"}
        alt=""
        className="ProjectLinks__icon"
        aria-hidden="true"
      />
    </a>
  );
};

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
