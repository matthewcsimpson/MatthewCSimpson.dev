import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import type { ProjectData } from "@/types";
import { Footer } from "@/components";

import "@/components/ProjectDetails/ProjectDetails.scss";

type ProjectDetailsProps = Pick<
  ProjectData,
  "title" | "description" | "longDescription" | "imageSrc"
>;

const ProjectDetails = ({
  title,
  description,
  longDescription,
  imageSrc,
}: ProjectDetailsProps) => {
  const contentSections =
    longDescription && longDescription.length > 0
      ? longDescription
      : [description];

  return (
    <section className="projectDetails" aria-labelledby="project-content">
      <div className="projectDetails__section">
        <h2 id="project-content" className="projectDetails__title">
          Project Overview
        </h2>
      </div>
      <div className="projectDetails__section">
        <img src={imageSrc} alt={title} className="projectDetails__image" />
        {contentSections.map((section, index) => (
          <div className="projectDetails__mdwrapper" key={index}>
            <Markdown remarkPlugins={[remarkGfm]}>{section}</Markdown>
          </div>
        ))}
      </div>

      <Footer />
    </section>
  );
};

export default ProjectDetails;
