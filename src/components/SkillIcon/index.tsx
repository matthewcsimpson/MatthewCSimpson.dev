import "@/components/SkillIcon/SkillIcon.scss";

interface SkillIconProps {
  label: string;
  text?: string;
  iconClass: string;
}

const SkillIcon = ({ label, iconClass }: SkillIconProps) => {
  return (
    <li className="skillicon">
      <img
        className="skillicon__icon"
        src={`/icons/${iconClass.replace(/\s+/g, "").toLowerCase()}.svg`}
        alt={`${iconClass} icon`}
      />
      <p className="skillicon__label">{label}</p>
      {/* <ToolTip title={label} text={text} show={showToolTip} /> */}
    </li>
  );
};

export default SkillIcon;
