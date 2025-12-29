import "@/components/Navigation/Navigation.scss";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#resume", label: "Resume" },
];

const Navigation = () => {
  return (
    <nav aria-label="Site sections">
      <ul className="navigation">
        <li className="navigation__item navigation__item--brand">
          <span className="navigation__name">Matthew Simpson</span>
        </li>
        {navLinks.map(({ href, label }) => (
          <li key={href} className="navigation__item">
            <a className="navigation__link" href={href}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
