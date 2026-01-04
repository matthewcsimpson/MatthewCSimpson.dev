import { ResumeEducation, ResumeExperience, SectionHeader } from "@/components";

import "@/components/ResumeSection/ResumeSection.scss";

import { Resume } from "@/data";

const ResumeSection = () => {
  return (
    <div className="resumeSection">
      <SectionHeader title="resume" />
      <div className="resumeSection__cta">
        <a
          className="resumeSection__button resumeSection__button--resume"
          href="/resume/MatthewSimpsonResume.pdf"
          download
        >
          &darr; Download Resume
        </a>
        <a
          className="resumeSection__button resumeSection__button--linkedin"
          href="https://www.linkedin.com/in/matthewcsimpson/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            className="resumeSection__buttonIcon"
            src="/icons/external-link.svg"
            alt=""
          />{" "}
          View LinkedIn
        </a>
      </div>
      <ResumeExperience experience={Resume.workExperience} />
      <ResumeEducation education={Resume.education} />
    </div>
  );
};

export default ResumeSection;
