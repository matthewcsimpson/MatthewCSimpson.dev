export type Icons = {
  label: string;
  iconClass: string;
  text?: string;
  link?: string;
};

type TagKind = "language" | "framework" | "owner" | "default";

export type TagType = {
  name: string;
  type: TagKind;
};

export type GithubType = "repository" | "case-study";

export type ProjectData = {
  id: string;
  title: string;
  description: string;
  longDescription?: string[];
  group: string;
  imageSrc: string;
  githubType: GithubType;
  githubLink: string;
  liveLink: string;
  tags: TagType[];
};
