import { type Icons } from "@/types";
import { generateLinks } from "@/utils";

import "@/ui/LinksList/LinksList.scss";

// Define the array of icons with their respective details
const linkicons: Icons[] = [
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

/**
 * Links component that renders a list of links.
 * @returns
 */
const LinksList = () => {
  return (
    <div className="links">
      <ul className="links__list">{generateLinks({ icons: linkicons })}</ul>
    </div>
  );
};

export default LinksList;
