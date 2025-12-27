import "@/ui/IconLink/iconLink.scss";

interface IconLinkProps {
  label: string;
  iconClass: string;
  link: string;
}

/**
 * IconLink component that renders a link with an icon.
 * @param label - The label for the icon link.
 * @param iconClass - The CSS class for the icon.
 * @param link - The URL the icon links to.
 * @returns
 */
const IconLink = ({ label, iconClass, link }: IconLinkProps) => {
  return (
    <li className="iconLink__listItem">
      <a
        className="iconLink__link"
        aria-label={label}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span
          className={`iconLink__icon iconLink__icon--${iconClass}`}
          aria-hidden="true"
        />
      </a>
    </li>
  );
};

export default IconLink;
