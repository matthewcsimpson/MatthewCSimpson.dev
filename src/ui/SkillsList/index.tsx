import { skillicons } from "@/data";
import { generateSkills } from "@/utils";
import "@/ui/SkillsList/SkillsList.scss";

/**
 * SkillsList component that renders a list of skills.
 * @returns
 */
const SkillsList = () => {
  return (
    <div className="skillslist">
      <ul className="skillslist__list">
        {generateSkills({ icons: skillicons })}
      </ul>
    </div>
  );
};

export default SkillsList;
