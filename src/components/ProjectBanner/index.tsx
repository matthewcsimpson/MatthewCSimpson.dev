import "@/components/ProjectBanner/ProjectBanner.scss";

interface ProjectBannerProps {
  name?: string;
  description?: string;
}

const ProjectBanner = ({ name, description }: ProjectBannerProps) => {
  return (
    <div className="projectDetails">
      <div className="projectDetails__text">
        <h1 className="projectDetails__name">{name}</h1>
        <p className="projectDetails__description">{description}</p>
      </div>
    </div>
  );
};

export default ProjectBanner;
