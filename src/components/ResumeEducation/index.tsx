import type { EducationItem } from "@/types";

import "@/components/ResumeEducation/ResumeEducation.scss";

interface ResumeEducationProps {
  education: EducationItem[];
}

const ResumeEducation = ({ education }: ResumeEducationProps) => {
  return (
    <div className="ResumeEducation__content">
      <h3 className="ResumeEducation__title">Education</h3>
      {education.map((edu: EducationItem, index) => (
        <div key={index} className="ResumeEducation__item">
          <h4 className="ResumeEducation__institution">{edu.institution}</h4>
          <p className="ResumeEducation__degree">
            {edu.credential} &mdash; {edu.field}
          </p>
          <p className="ResumeEducation__date">{edu.endDate}</p>
        </div>
      ))}
    </div>
  );
};

export default ResumeEducation;
