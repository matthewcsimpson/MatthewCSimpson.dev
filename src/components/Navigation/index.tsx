import { Link, useParams } from "react-router-dom";

import "@/components/Navigation/Navigation.scss";

const Navigation = () => {
  const { projectId } = useParams<{ projectId: string }>();

  return (
    <nav>
      <ul className="navigation">
        <li className="navigation__item">
          {!!projectId && (
            <>
              <Link to="/" className="navigation__link">
                &#8592; Back
              </Link>
              <p>Matthew Simpson</p>
            </>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
