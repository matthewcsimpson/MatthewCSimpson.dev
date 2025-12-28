export type Icons = {
  label: string;
  iconClass: string;
  text?: string;
  link?: string;
};

export type TagType = {
  name: string;
  type: "language" | "framework" | "default";
};

export type ProjectData = {
  title: string;
  group: string;
  imageSrc: string;
  description: string;
  tags: TagType[];
};
