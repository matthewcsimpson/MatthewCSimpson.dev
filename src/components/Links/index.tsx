import "@/components/Links/Links.scss";

const Links = () => {
  return (
    <div className="links">
      <ul className="links__list">
        <li className="links__listItem">
          <a className="links__link" aria-label="GitHub">
            <span
              className="links__icon links__icon--github"
              aria-hidden="true"
            />
          </a>
        </li>
        <li className="links__listItem">
          <a className="links__link" aria-label="LinkedIn">
            <span
              className="links__icon links__icon--linkedin"
              aria-hidden="true"
            />
          </a>
        </li>
        <li className="links__listItem">
          <a className="links__link" aria-label="CodePen">
            <span
              className="links__icon links__icon--codepen"
              aria-hidden="true"
            />
          </a>
        </li>
        <li className="links__listItem">
          <a className="links__link" aria-label="Medium">
            <span
              className="links__icon links__icon--medium"
              aria-hidden="true"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Links;
