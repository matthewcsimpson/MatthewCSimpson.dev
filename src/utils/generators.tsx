import { LinkIcon, Project, SkillIcon, Tag } from "@/ui";
import { type Icons, type ProjectData, type TagType } from "@/types";

interface GenerateLinksProps {
  icons: Icons[];
}

interface generateParagraphsProps {
  paragraphs: string[];
}

interface GenerateSkillsProps {
  icons: Icons[];
}

/**
 * Generates a list of LinkIcon components based on the provided icons.
 * @param icons - An array of icon objects containing label, iconClass, and link.
 * @returns
 */
const generateLinks = ({ icons }: GenerateLinksProps) => {
  return icons.map(({ label, iconClass, link }) => (
    <LinkIcon key={label} label={label} iconClass={iconClass} link={link} />
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
  return projects.map(({ title, group, imageSrc, description, tags }) => (
    <Project
      key={`${title}-${group}`}
      title={title}
      group={group}
      imageSrc={imageSrc}
      description={description}
      tags={tags}
    />
  ));
};

/**
 * Generates a list of LinkIcon components based on the provided icons.
 * @param icons - An array of icon objects containing label, iconClass, and link.
 * @returns
 */
const generateSkills = ({ icons }: GenerateSkillsProps) => {
  return icons.map(({ label, text, iconClass }) => (
    <SkillIcon key={label} text={text} label={label} iconClass={iconClass} />
  ));
};

/**
 * Generates a list of Tag components based on the provided tags.
 * @param tags - An array of strings representing the tags.
 * @returns
 */
const generateTags = (tags: TagType[]) => {
  return tags.map((tag) => (
    <Tag type={tag.type} key={tag.name} text={tag.name} />
  ));
};

export {
  generateLinks,
  generateParagraphs,
  generateProjects,
  generateSkills,
  generateTags,
};
