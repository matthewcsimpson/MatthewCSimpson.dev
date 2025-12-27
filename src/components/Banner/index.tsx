import { LinksList } from "@/ui";

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
          <h1 className="banner__name">Matthew Simpson</h1>
          <h2 className="banner__title">Full Stack Developer</h2>
          <p className="banner__tagline">
            I am rather tall and I make things for the web.
          </p>
        </div>
        <LinksList />
      </div>
    </>
  );
};
export default Banner;
