import type { TagType } from "@/types";

import { generateTags } from "@/utils";

import "@/components/TagList/TagList.scss";

const TagList = ({ tags }: { tags: TagType[] }) => {
  return <div className="tagList">{generateTags(tags)}</div>;
};

export default TagList;
