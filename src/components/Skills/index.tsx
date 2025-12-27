import { SkillsList } from "@/ui";

import "@/components/Skills/Skills.scss";

const Skills = () => {
  return (
    <div className="skills">
      <h3 className="skills__title">Skills</h3>
      <p className="skills__text">
        Here is a shameless and non-exclusive array of icons highlighting tools
        and technology that I have experience with.
      </p>

      <SkillsList />
    </div>
  );
};

export default Skills;
