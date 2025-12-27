import { useState } from "react";

import { ToolTip } from "@/ui";

import "@/ui/SkillIcon/SkillIcon.scss";

interface SkillIconProps {
  label: string;
  text?: string;
  iconClass: string;
}

const SkillIcon = ({ label, text, iconClass }: SkillIconProps) => {
  const [showToolTip, setShowToolTip] = useState(false);

  const handleSetShowToolTip = () => {
    setShowToolTip((prev) => !prev);
  };

  return (
    <li
      className="skillicon"
      onMouseOver={handleSetShowToolTip}
      onMouseOut={handleSetShowToolTip}
    >
      <span
        className={`skillicon__icon skillicon__icon--${iconClass}`}
        aria-hidden="true"
      />
      <ToolTip title={label} text={text} show={showToolTip} />
    </li>
  );
};

export default SkillIcon;
