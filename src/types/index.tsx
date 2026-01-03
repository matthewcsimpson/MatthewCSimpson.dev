export type Icons = {
  label: string;
  iconClass: string;
  text?: string;
  link?: string;
};

export const TAG_TYPES = {
  LANGUAGE: "language",
  FRAMEWORK: "framework",
  OWNER: "owner",
  DEFAULT: "default",
} as const;

type TagKind = (typeof TAG_TYPES)[keyof typeof TAG_TYPES];

export type TagType = {
  name: string;
  type: TagKind;
};

export type TagsType = {
  [key: string]: TagType;
};

export const LINK_TYPES = {
  REPOSITORY: "repository",
  CASE_STUDY: "case-study",
  LIVE: "live",
} as const;

export type ProjectLinkKind = (typeof LINK_TYPES)[keyof typeof LINK_TYPES];

export type ProjectLink = {
  type: ProjectLinkKind;
  text: string;
  link: string;
};

export type ProjectData = {
  id: string;
  title: string;
  description: string;
  longDescription?: string[];
  group: string;
  imageSrc: string;
  links: ProjectLink[];
  tags: TagType[];
};
