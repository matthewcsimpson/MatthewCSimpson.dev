import type { ProjectData } from "@/types";
import { Footer, TagList } from "@/components";

import "@/components/ProjectDetails/ProjectDetails.scss";

type ProjectDetailsProps = Pick<
  ProjectData,
  "title" | "description" | "longDescription" | "imageSrc" | "tags"
>;

const ProjectDetails = ({
  title,
  description,
  longDescription,
  imageSrc,
  tags,
}: ProjectDetailsProps) => {
  const paragraphs = longDescription ?? [description];

  return (
    <section className="projectDetails" aria-labelledby="project-content">
      <div className="projectDetails__section">
        <h2 id="project-content" className="projectDetails__title">
          Project Overview
        </h2>
      </div>
      <div className="projectDetails__section">
        <img src={imageSrc} alt={title} className="projectDetails__image" />
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="projectDetails__paragraph">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="projectDetails__section">
        <h3 id="technologies" className="projectDetails__sectionHeading">
          Technologies Used
        </h3>
        <TagList tags={tags} />
      </div>

      <Footer />
    </section>
  );
};

export default ProjectDetails;
