import type { EducationItem } from "@/types";

import "@/components/ResumeEducation/ResumeEducation.scss";

interface ResumeEducationProps {
  education: EducationItem[];
}

const ResumeEducation = ({ education }: ResumeEducationProps) => {
  return (
    <div className="resumeEducation__content">
      <h3 className="resumeEducation__title">Education</h3>
      {education.map((edu: EducationItem, index) => (
        <div key={index} className="resumeEducation__item">
          <h4 className="resumeEducation__institution">
            {edu.institution} &mdash;{" "}
            <span className="resumeEducation__location">{edu.location}</span>
          </h4>
          <p className="resumeEducation__degree">
            {edu.credential} &mdash; {edu.field}
          </p>
          <p className="resumeEducation__date">Completed: {edu.endDate}</p>
        </div>
      ))}
    </div>
  );
};

export default ResumeEducation;
