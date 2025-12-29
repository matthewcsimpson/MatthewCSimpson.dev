import SectionHeader from "@/components/SectionHeader";
import SkillsList from "@/components/SkillsList";

import "@/components/SkillsSection/SkillsSection.scss";

const SkillsText = {
  title: "skills",
  description:
    "Here is a shameless and non-exhaustive list of technologies I have used before or at least am familiar with.",
};

const SkillsSection = () => {
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

export default SkillsSection;
