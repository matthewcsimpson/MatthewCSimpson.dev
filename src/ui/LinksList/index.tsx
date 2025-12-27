import { LinkIcon } from "@/ui";

import "@/ui/LinksList/LinksList.scss";

// Define the Icon type
type Icon = {
  label: string;
  iconClass: string;
  link: string;
};

// Define the array of icons with their respective details
const linkicons: Icon[] = [
  {
    label: "GitHub",
    iconClass: "github",
    link: "https://github.com/matthewcsimpson",
  },
  {
    label: "LinkedIn",
    iconClass: "linkedin",
    link: "https://www.linkedin.com/in/matthewcsimpson/",
  },
  {
    label: "CodePen",
    iconClass: "codepen",
    link: "https://codepen.io/matthewcsimpson",
  },
  {
    label: "DEV.to",
    iconClass: "devto",
    link: "https://dev.to/smatthew",
  },
  {
    label: "Medium",
    iconClass: "medium",
    link: "https://medium.com/@mcsimpson",
  },
];

interface LinkGeneratorProps {
  icons: Icon[];
}

/**
 * Generates a list of LinkIcon components based on the provided icons.
 * @param icons - An array of icon objects containing label, iconClass, and link.
 * @returns
 */
const linkGenerator = ({ icons }: LinkGeneratorProps) => {
  return icons.map(({ label, iconClass, link }) => (
    <LinkIcon key={label} label={label} iconClass={iconClass} link={link} />
  ));
};

/**
 * Links component that renders a list of links.
 * @returns
 */
const LinksList = () => {
  return (
    <div className="links">
      <ul className="links__list">{linkGenerator({ icons: linkicons })}</ul>
    </div>
  );
};

export default LinksList;
