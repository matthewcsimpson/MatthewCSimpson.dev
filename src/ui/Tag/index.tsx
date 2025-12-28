import "@/ui/Tag/Tag.scss";

type TagType = "skill" | "tool" | "default";

interface TagProps {
  text: string;
  type: TagType;
}

const Tag = ({ text, type }: TagProps) => {
  return <span className={`tag tag--${type}`}>{text}</span>;
};

export default Tag;
