import "@/ui/SkillIcon/SkillIcon.scss";

interface SkillIconProps {
  label: string;
  iconClass: string;
}

const SkillIcon = ({ label, iconClass }: SkillIconProps) => {
  return (
    <li className="SkillIcon__listItem">
      <span
        className={`SkillIcon__icon SkillIcon__icon--${iconClass}`}
        aria-hidden="true"
      />
      <p className="SkillIcon__label">{label}</p>
    </li>
  );
};

export default SkillIcon;
