import { ResumeEducation, ResumeExperience, SectionHeader } from "@/components";

import "@/components/ResumeSection/ResumeSection.scss";

import { Resume } from "@/data";

const ResumeSection = () => {
  return (
    <div className="ResumeSection">
      <SectionHeader title="resume" />
      <div className="ResumeSection__cta">
        <a
          className="ResumeSection__button ResumeSection__button--resume"
          href="/resume/MatthewSimpsonResume.pdf"
          download
        >
          &darr; Download Resume
        </a>
        <a
          className="ResumeSection__button ResumeSection__button--linkedin"
          href="https://www.linkedin.com/in/matthewcsimpson/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            className="ResumeSection__buttonicon"
            src="/icons/external-link.svg"
            alt="External link icon"
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
