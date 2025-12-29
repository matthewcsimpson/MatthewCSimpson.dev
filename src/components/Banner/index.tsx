import LinksList from "@/components/LinksList";

import "@/components/Banner/Banner.scss";

const BannerText = {
  name: "Matthew Simpson",
  title: "Full Stack Developer",
  tagline: "I am rather tall and I make things for the web.",
};

/**
 * Banner component that displays the user's name, title, tagline, and links.
 * @returns
 */
const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="banner__text">
          <h1 className="banner__name">{BannerText.name}</h1>
          <h2 className="banner__title">{BannerText.title}</h2>
          <p className="banner__tagline">{BannerText.tagline}</p>
        </div>
        <LinksList />
      </div>
    </>
  );
};
export default Banner;
