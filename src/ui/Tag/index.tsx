import type { TagType } from "@/types";

import "@/ui/Tag/Tag.scss";

interface TagProps {
  text: string;
  type: TagType["type"];
}

const Tag = ({ text, type }: TagProps) => {
  return (
    <span className={`tag tag--${type}`}>
      {type !== "owner" && (
        <img
          className="tag__icon"
          src={`/icons/${text.toLowerCase()}.svg`}
          alt={`${type} icon`}
        />
      )}
      {text}
    </span>
  );
};

export default Tag;
