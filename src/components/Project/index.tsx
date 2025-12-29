import { useEffect, useState } from "react";

import type { ProjectData } from "@/types";
import { ProjectDetailsModal, TagList } from "@/components";

import "@/components/Project/Project.scss";

const Project = ({
  id,
  title,
  description,
  group,
  imageSrc,
  tags,
}: ProjectData) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal((prev) => !prev);
  };

  useEffect(() => {
    if (!showModal) return;

    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [showModal]);

  return (
    <>
      <div
        className="project"
        onClick={handleOpenModal}
        role="button"
        tabIndex={0}
      >
        <h4 className="project__title">
          {group ? "I worked on" : "I made"}{" "}
          <span className="project__title--highlight">{title}</span>
        </h4>
        {group && (
          <h4 className="project__title project__title--group">
            with <span className="project__title--highlight">{group}</span>
          </h4>
        )}
        <p className="project__description">{description}</p>
        <div className="project__imagecontainer">
          <img className="project__image" src={imageSrc} alt={title} />
        </div>
        <TagList tags={tags} />
        <div
          className="project__overlay"
          aria-label={`View more about ${title}`}
        >
          <h2 className="project__overlay-text">
            Would You Like To Know More?
          </h2>
        </div>
      </div>
      {showModal && (
        <ProjectDetailsModal
          id={id}
          show={showModal}
          onClose={handleOpenModal}
        />
      )}
    </>
  );
};

export default Project;
