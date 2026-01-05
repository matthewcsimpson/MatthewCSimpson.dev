import { SectionHeader } from "@/components";
import { generateParagraphs } from "@/utils";

import "@/components/AboutSection/AboutSection.scss";

// Text Content
const AboutText = {
  title: "About Me",
  paragraphs: [
    "Hello there! I am Matthew Simpson, a full-stack developer based in Vancouver, BC, Canada.",
    "After a long career in sales and management, I returned to school in the late 2010s, ultimately completing a Computer Science Certificate in 2020 (and continuing toward the diploma and degree) at BCIT and a Diploma in Web & Software Development from BrainStation in 2022.",
    "Since then, I have jumped headfirst into projects both personal and professional, learning new technologies and skills along the way. Recently, I have been working with Skyrocket Digital as a full-stack developer primarily leading development on a NextJS platform for their major client, Ocean Wise (see more below).",
    "In my spare time, I am also a Rotten Tomatoes-approved film and television critic, and my writing has appeared in a variety of publications. I’m a lifelong Trekkie, and I’m also that guy who can (usually) tell you the name of the actor in that movie you liked.",
  ],
};

const AboutSection = () => {
  return (
    <section className="about" id="about">
      <img
        className="about__image"
        src="/images/me.jpg"
        alt="Profile Picture"
      />
      <SectionHeader title={AboutText.title} />

      {generateParagraphs({ paragraphs: AboutText.paragraphs })}
    </section>
  );
};

export default AboutSection;
