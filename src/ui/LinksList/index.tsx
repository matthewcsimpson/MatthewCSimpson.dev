import { linkicons } from "@/data";
import { generateLinks } from "@/utils";

import "@/ui/LinksList/LinksList.scss";

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
