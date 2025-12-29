import { useMemo } from "react";

import { projectsData } from "@/data";
import "@/components/ProjectDetailsModal/ProjectDetailsModal.scss";

interface ProjectDetailsModalProps {
  id: string;
  show: boolean;
  onClose: () => void;
}

const ProjectDetailsModal = ({
  id,
  show,
  onClose,
}: ProjectDetailsModalProps) => {
  const project = useMemo(
    () => projectsData.find((proj) => proj.id === id),
    [id]
  );

  return (
    <div className={`details ${show ? "details__show" : ""}`} onClick={onClose}>
      <div className="details__content">{project?.title} </div>
    </div>
  );
};

export default ProjectDetailsModal;
