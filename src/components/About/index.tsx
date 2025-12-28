import { SectionHeader } from "@/ui";
import { generateParagraphs } from "@/utils";

import "@/components/About/About.scss";

// Text Content
const AboutText = {
  title: "About Me",
  paragraphs: [
    "Hello there! I am Matthew Simpson, a full stack developer based in Vancouver, BC, Canada. After a lifetime of sales and management experience I transitioned to full stack development in 2022.",
    "Since then I have dived... dove? diven? Jumped head first into project both personal and professional, learning new technologies and skills along the way. Exctly the kind of thing that you have ready on a million other portfolio sites. It's a cliché, but the thing about clichés is that they come up all the time.",
    "In my spare time I am also a Rotten Tomatoes approved film and television critic and a lifelong trekkie.",
  ],
};

const About = () => {
  return (
    <div className="about">
      <img
        className="about__image"
        src="/images/me.jpg"
        alt="Profile Picture"
      />
      <SectionHeader title={AboutText.title} />

      {generateParagraphs({ paragraphs: AboutText.paragraphs })}
    </div>
  );
};

export default About;
