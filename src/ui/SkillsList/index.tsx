import { SkillIcon } from "@/ui";

import "@/ui/SkillsList/SkillsList.scss";

type Icons = {
  label: string;
  text?: string;
  iconClass: string;
};

const skillicons: Icons[] = [
  { label: "HTML5", iconClass: "html", text: "" },
  { label: "CSS3", iconClass: "css3", text: "" },
  { label: "Sass", iconClass: "sass", text: "" },
  { label: "Less", iconClass: "less", text: "" },
  { label: "Tailwind", iconClass: "tailwind", text: "" },
  { label: "Javascript", iconClass: "javascript", text: "" },
  { label: "Typescript", iconClass: "typescript", text: "" },
  { label: "Reactjs", iconClass: "reactjs", text: "" },
  { label: "Nextjs", iconClass: "nextjs", text: "" },
  { label: "Vitejs", iconClass: "vitejs", text: "" },
  { label: "Materialui", iconClass: "materialui", text: "" },
  { label: "Radixui", iconClass: "radixui", text: "" },
  { label: "Redux", iconClass: "redux", text: "" },
  { label: "Jest", iconClass: "jest", text: "" },

  { label: "Nodejs", iconClass: "nodejs", text: "" },
  { label: "Nestjs", iconClass: "nestjs", text: "" },
  { label: "Java", iconClass: "java", text: "" },
  { label: "Graphql", iconClass: "graphql", text: "" },
  { label: "Mysql", iconClass: "mysql", text: "" },
  { label: "Postgresql", iconClass: "postgresql", text: "" },
  { label: "Prisma", iconClass: "prisma", text: "" },
  { label: "JSON", iconClass: "json", text: "" },

  { label: "Auth0", iconClass: "auth0", text: "" },
  { label: "Azure", iconClass: "azure", text: "" },
  { label: "Git", iconClass: "git", text: "" },
  { label: "Github", iconClass: "github", text: "" },
  { label: "Heroku", iconClass: "heroku", text: "" },
  { label: "Vercel", iconClass: "vercel", text: "" },
  { label: "Npmjs", iconClass: "npmjs", text: "" },
];

interface SkillGeneratorProps {
  icons: Icons[];
}

/**
 * Generates a list of LinkIcon components based on the provided icons.
 * @param icons - An array of icon objects containing label, iconClass, and link.
 * @returns
 */
const skillGenerator = ({ icons }: SkillGeneratorProps) => {
  return icons.map(({ label, text, iconClass }) => (
    <SkillIcon key={label} text={text} label={label} iconClass={iconClass} />
  ));
};

/**
 * SkillsList component that renders a list of skills.
 * @returns
 */
const SkillsList = () => {
  return (
    <div className="skillslist">
      <ul className="skillslist__list">
        {skillGenerator({ icons: skillicons })}
      </ul>
    </div>
  );
};

export default SkillsList;
