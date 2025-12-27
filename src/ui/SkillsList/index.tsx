import { SkillIcon } from "@/ui";

import "@/ui/SkillsList/SkillsList.scss";

type Icons = {
  label: string;
  iconClass: string;
};

const skillicons: Icons[] = [
  { label: "Auth0", iconClass: "auth0" },
  { label: "Azure", iconClass: "azure" },
  { label: "Git", iconClass: "git" },
  { label: "Github", iconClass: "github" },
  { label: "Heroku", iconClass: "heroku" },
  { label: "Vercel", iconClass: "vercel" },
  { label: "Npmjs", iconClass: "npmjs" },

  { label: "HTML5", iconClass: "html" },
  { label: "CSS3", iconClass: "css3" },
  { label: "Sass", iconClass: "sass" },
  { label: "Less", iconClass: "less" },
  { label: "Tailwind", iconClass: "tailwind" },
  { label: "Javascript", iconClass: "javascript" },
  { label: "Typescript", iconClass: "typescript" },
  { label: "Reactjs", iconClass: "reactjs" },
  { label: "Nextjs", iconClass: "nextjs" },
  { label: "Vitejs", iconClass: "vitejs" },
  { label: "Materialui", iconClass: "materialui" },
  { label: "Radixui", iconClass: "radixui" },
  { label: "Redux", iconClass: "redux" },
  { label: "Jest", iconClass: "jest" },

  { label: "Nodejs", iconClass: "nodejs" },
  { label: "Nestjs", iconClass: "nestjs" },
  { label: "Java", iconClass: "java" },
  { label: "Graphql", iconClass: "graphql" },
  { label: "Mysql", iconClass: "mysql" },
  { label: "Postgresql", iconClass: "postgresql" },
  { label: "Prisma", iconClass: "prisma" },
  { label: "JSON", iconClass: "json" },
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
  return icons.map(({ label, iconClass }) => (
    <SkillIcon key={label} label={label} iconClass={iconClass} />
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
