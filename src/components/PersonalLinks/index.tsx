import { PersonalLinkList } from "@/data";
import { generatePersonalLinks } from "@/utils";

import "@/components/PersonalLinks/PersonalLinks.scss";

/**
 * Links component that renders a list of links.
 * @returns
 */
const PersonalLinks = () => {
  return (
    <div className="personalLinks">
      <ul className="personalLinks__list">
        {generatePersonalLinks({ icons: PersonalLinkList })}
      </ul>
    </div>
  );
};

export default PersonalLinks;
