import { SectionHeader } from "@/ui";

import "@/components/About/About.scss";

const about = () => {
  return (
    <div className="about">
      <img
        className="about__image"
        src="/images/me.jpg"
        alt="Profile Picture"
      />
      <SectionHeader title="About Me" />
      <p className="about__text">
        Hello there! I am Matthew Simpson, a full stack developer based in
        Vancouver, BC, Canada. After a lifetime of sales and management
        experience I transitioned to full stack development in 2022.
      </p>
      <p className="about__text">
        Since then I have dived... dove? diven? Jumped head first into project
        both personal and professional, learning new technologies and skills
        along the way. Exctly the kind of thing that you have ready on a million
        other portfolio sites. It's a cliché, but the thing about clichés is
        that they come up all the time.
      </p>
      <p className="about__text">
        In my spare time I am also a Rotten Tomatoes approved film and
        television critic and a lifelong trekkie.
      </p>
    </div>
  );
};

export default about;
