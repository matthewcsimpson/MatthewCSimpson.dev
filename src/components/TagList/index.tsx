import type { TagType } from "@/types";

import { generateTags } from "@/utils";

import "@/components/TagList/TagList.scss";

interface TagListProps {
  tags: TagType[];
  align?: "center" | "left";
}

const TagList = ({ tags, align }: TagListProps) => {
  return (
    <div className={`tagList tagList--${align}`}>{generateTags(tags)}</div>
  );
};

export default TagList;
