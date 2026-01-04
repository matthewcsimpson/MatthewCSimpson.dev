import "@/components/SkillIcon/SkillIcon.scss";

interface SkillIconProps {
  label: string;
  text?: string;
  iconClass: string;
}

const SkillIcon = ({ label, iconClass }: SkillIconProps) => {
  return (
    <li className="skillIcon">
      <img
        className="skillIcon__icon"
        src={`/icons/${iconClass.replace(/\s+/g, "").toLowerCase()}.svg`}
        alt={`${iconClass} icon`}
      />
      <p className="skillIcon__label">{label}</p>
      {/* <ToolTip title={label} text={text} show={showToolTip} /> */}
    </li>
  );
};

export default SkillIcon;
