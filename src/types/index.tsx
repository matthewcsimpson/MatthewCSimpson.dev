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
  DOWNLOAD: "download",
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

export type EducationItem = {
  institution: string;
  credential: string;
  field: string;
  endDate: string;
  location: string;
};

export type WorkExperiencePosition = {
  title: string;
  startDate: string;
  endDate: string;
};

export type WorkExperienceItem = {
  positions: WorkExperiencePosition[];
  company: string;
  location: string;
  description: string[];
};

export type ResumeData = {
  education: EducationItem[];
  workExperience: WorkExperienceItem[];
};
