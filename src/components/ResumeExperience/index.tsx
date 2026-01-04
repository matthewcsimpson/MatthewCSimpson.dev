import { type WorkExperienceItem } from "@/types";

import "@/components/ResumeExperience/ResumeExperience.scss";

interface ResumeExperienceProps {
  experience: WorkExperienceItem[];
}

const ResumeExperience = ({ experience }: ResumeExperienceProps) => {
  return (
    <div className="resumeExperience__content">
      <h3 className="resumeExperience__sectionTitle">Work Experience</h3>
      {experience.map((work: WorkExperienceItem, index) => (
        <div key={index} className="resumeExperience__item">
          <p
            className="resumeExperience__company"
            id={work.company.replace(/\s+/g, "-").toLowerCase()}
          >
            {work.company} &mdash;{" "}
            <span className="resumeExperience__location">{work.location}</span>
          </p>
          <div className="resumeExperience__positions">
            {work.positions.map((position, positionIndex) => (
              <p key={positionIndex} className="resumeExperience__title">
                {position.title},{" "}
                <span className="resumeExperience__dates">
                  {position.startDate} &mdash; {position.endDate}
                </span>
              </p>
            ))}
          </div>

          <ul className="resumeExperience__descriptionList">
            {work.description.map((desc, descIndex) => (
              <li key={descIndex} className="resumeExperience__descriptionItem">
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
