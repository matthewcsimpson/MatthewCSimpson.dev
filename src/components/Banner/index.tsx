import { Links } from "@/components";

import "@/components/banner/Banner.scss";

/**
 * Banner component that displays the user's name, title, tagline, and links.
 * @returns
 */
const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="banner__text">
          <h1>Matthew Simpson</h1>
          <h2>Full Stack Developer</h2>
          <p>I make things for the web</p>
        </div>
        <Links />
      </div>
    </>
  );
};
export default Banner;
