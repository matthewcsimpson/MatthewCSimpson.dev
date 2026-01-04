import { type WorkExperienceItem } from "@/types";

import "@/components/ResumeExperience/ResumeExperience.scss";

interface ResumeExperienceProps {
  experience: WorkExperienceItem[];
}

const ResumeExperience = ({ experience }: ResumeExperienceProps) => {
  return (
    <div className="ResumeExperience__content">
      <h3 className="ResumeExperience__sectiontitle">Work Experience</h3>
      {experience.map((work: WorkExperienceItem, index) => (
        <div key={index} className="ResumeExperience__item">
          <p
            className="ResumeExperience__company"
            id={work.company.replace(/\s+/g, "-").toLowerCase()}
          >
            {work.company} &mdash;{" "}
            <span className="ResumeExperience__location">{work.location}</span>
          </p>
          <div className="ResumeExperience__positions">
            {work.positions.map((position, positionIndex) => (
              <p key={positionIndex} className="ResumeExperience__title">
                {position.title},{" "}
                <span className="ResumeExperience__dates">
                  {position.startDate} &mdash; {position.endDate}
                </span>
              </p>
            ))}
          </div>

          <ul className="ResumeExperience__description-list">
            {work.description.map((desc, descIndex) => (
              <li
                key={descIndex}
                className="ResumeExperience__description-item"
              >
                {desc}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ResumeExperience;
