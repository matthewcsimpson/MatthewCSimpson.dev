import type { ProjectData } from "@/types";
import { Footer, ProjectLinks, TagList } from "@/components";

import "@/components/ProjectDetails/ProjectDetails.scss";

type ProjectDetailsProps = Pick<
  ProjectData,
  "title" | "description" | "longDescription" | "imageSrc" | "links" | "tags"
>;

const ProjectDetails = ({
  title,
  description,
  longDescription,
  imageSrc,
  links,
  tags,
}: ProjectDetailsProps) => {
  const paragraphs = longDescription ?? [description];

  return (
    <section className="projectDetails" aria-labelledby="project-content">
      <header className="projectDetails__header">
        <h2 id="project-content" className="projectDetails__title">
          Project Overview
        </h2>
      </header>
      <div className="projectDetails__media">
        <img src={imageSrc} alt={title} className="projectDetails__image" />
      </div>
      <article className="projectDetails__body">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="projectDetails__paragraph">
            {paragraph}
          </p>
        ))}
      </article>
      <h3 id="technologies" className="projectDetails__sectionHeading">
        Technologies Used
      </h3>
      <TagList tags={tags} />
      <h3 id="technologies" className="projectDetails__sectionHeading">
        Links
      </h3>
      <ProjectLinks links={links} />
      <Footer />
    </section>
  );
};

export default ProjectDetails;
