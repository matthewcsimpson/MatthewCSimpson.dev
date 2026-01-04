import { ResumeEducation, ResumeExperience, SectionHeader } from "@/components";

import "@/components/ResumeSection/ResumeSection.scss";

import { Resume } from "@/data";

const ResumeSection = () => {
  return (
    <div className="ResumeSection">
      <SectionHeader title="resume" />
      <ResumeExperience experience={Resume.workExperience} />
      <ResumeEducation education={Resume.education} />
    </div>
  );
};

export default ResumeSection;
