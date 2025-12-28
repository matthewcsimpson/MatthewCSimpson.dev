import "@/ui/LinkIcon/LinkIcon.scss";

interface LinkIconProps {
  label: string;
  iconClass: string;
  link?: string;
}

/**
 * LinkIcon component that renders a link with an icon.
 * @param label - The label for the icon link.
 * @param iconClass - The CSS class for the icon.
 * @param link - The URL the icon links to.
 * @returns
 */
const LinkIcon = ({ label, iconClass, link }: LinkIconProps) => {
  return (
    <li className="LinkIcon__listItem">
      <a
        className="LinkIcon__link"
        aria-label={label}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span
          className={`LinkIcon__icon LinkIcon__icon--${iconClass}`}
          aria-hidden="true"
        />
      </a>
    </li>
  );
};

export default LinkIcon;
