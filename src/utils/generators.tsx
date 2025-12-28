import { LinkIcon, Project, SkillIcon } from "@/ui";
import { type Icons, type ProjectData } from "@/types";

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
 * @param paragraphs
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
 *
 * @param projects
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

export { generateLinks, generateParagraphs, generateProjects, generateSkills };
