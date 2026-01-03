import { Link, useLocation } from "react-router-dom";

import "@/components/Navigation/Navigation.scss";

const navLinks = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "resume", label: "Resume" },
];

const Navigation = () => {
  const location = useLocation();

  console.log("location.pathname:", location.pathname);

  const pathCheck = location.pathname === "/";
  console.log("pathCheck:", pathCheck);

  return (
    <nav aria-label="Site Sections">
      <ul className="navigation">
        {!pathCheck && (
          <li className="navigation__item">
            <Link to="/" className="navigation__link">{`<Back`}</Link>{" "}
          </li>
        )}
        {navLinks.map(({ id, label }) => (
          <li key={id} className="navigation__item">
            <Link
              className="navigation__link"
              to={{ pathname: "/", hash: `#${id}` }}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
