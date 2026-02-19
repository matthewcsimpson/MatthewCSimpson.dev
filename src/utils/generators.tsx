import { PersonalLink, ProjectListItem, SkillIcon, Tag } from "@/components";
import {
  LINK_TYPES,
  type Icons,
  type ProjectData,
  type ProjectLink,
  type TagType,
} from "@/types";

// Interfaces
interface GenerateLinksProps {
  icons: Icons[];
}

interface generateParagraphsProps {
  paragraphs: string[];
}

interface GenerateSkillsProps {
  icons: Icons[];
}

// Functions

/**
 * Generates a list of PersonalLink components based on the provided icons.
 * @param icons - An array of icon objects containing label, iconClass, and link.
 * @returns
 */
const generatePersonalLinks = ({ icons }: GenerateLinksProps) => {
  return icons.map(({ label, iconClass, link }) => (
    <PersonalLink key={label} label={label} iconClass={iconClass} link={link} />
  ));
};

/**
 * A function to generate paragraphs from an array of strings
 * @param paragraphs - An array of strings representing the paragraphs.
 * @returns
 */
const generateParagraphs = ({ paragraphs }: generateParagraphsProps) => {
  return paragraphs.map((paragraph, index) => (
    <p key={index} className="about__text">
      {paragraph}
    </p>
  ));
};

/**
 * Generates a list of Project components based on the provided projects.
 * @param projects - An array of project objects containing title, group, imageSrc, description, and tags.
 * @returns
 */
const generateProjects = (projects: ProjectData[]) => {
  return projects.map((project) => (
    <ProjectListItem key={project.id} {...project} />
  ));
};

/**
 * Generates a list of LinkIcon components based on the provided icons.
 * @param icons - An array of icon objects containing label, iconClass, and link.
 * @returns
 */
const generateSkills = ({ icons }: GenerateSkillsProps) => {
  return icons.map(({ label, iconClass }) => (
    <SkillIcon key={label} label={label} iconClass={iconClass} />
  ));
};

/**
 * Generates a list of Tag components based on the provided tags.
 * @param tags - An array of strings representing the tags.
 * @returns
 */
const generateTags = (tags: TagType[]) => {
  return (
    <>
      {tags.map((tag) => (
        <Tag type={tag.type} key={tag.name} text={tag.name} />
      ))}
    </>
  );
};

/**
 * Generates a link element based on the provided link object, handling both external and download links.
 * @param link - An object containing the type, text, and link URL for the project link.
 * @returns
 */
const generateLinkText = (link: ProjectLink) => {
  const isDownload = link.type === LINK_TYPES.DOWNLOAD;
  return (
    <a
      href={link.link}
      target={isDownload ? undefined : "_blank"}
      rel={isDownload ? undefined : "noopener noreferrer"}
      download={isDownload}
      className="projectLinks__link"
    >
      {link.text}
      <img
        src={`${isDownload ? "/icons/link-download.svg" : "/icons/link-external.svg"}`}
        alt={link.text}
        className="projectLinks__icon"
        aria-hidden="true"
      />
    </a>
  );
};

export {
  generateLinkText,
  generatePersonalLinks,
  generateParagraphs,
  generateProjects,
  generateSkills,
  generateTags,
};
