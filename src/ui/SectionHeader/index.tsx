import "@/ui/SectionHeader/SectionHeader.scss";

interface SectionHeaderProps {
  title: string;
  description?: string;
}

const SectionHeader = ({ title, description }: SectionHeaderProps) => {
  return (
    <div className="sectionHeader">
      <h3 className="sectionHeader__title">{title}</h3>
      {description && <p className="sectionHeader__text">{description}</p>}
    </div>
  );
};

export default SectionHeader;
