import { SectionHeader, SkillsList } from "@/ui";

import "@/components/Skills/Skills.scss";

const SkillsText = {
  title: "skills",
  description:
    "Here is a shameless and non-exhaustive list of technologies I am have used before or at least am familiar with.",
};

const Skills = () => {
  return (
    <div className="skills">
      <SectionHeader
        title={SkillsText.title}
        description={SkillsText.description}
      />

      <SkillsList />
    </div>
  );
};

export default Skills;
