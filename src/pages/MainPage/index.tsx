import {
  About,
  Banner,
  Container,
  Footer,
  ProjectsSection,
  ResumeSection,
  SkillsSection,
} from "@/components";

const mainSections = [
  { id: "about", label: "About", render: () => <About /> },
  { id: "projects", label: "Projects", render: () => <ProjectsSection /> },
  { id: "skills", label: "Skills", render: () => <SkillsSection /> },
  { id: "resume", label: "Resume", render: () => <ResumeSection /> },
];

/**
 * App component that serves as the main container for the application.
 * @returns
 */
const MainPage = () => {
  return (
    <Container
      leftChildren={<Banner />}
      rightChildren={
        <>
          {mainSections.map(({ id, render }) => (
            <section id={id} key={id} className="main-section">
              {render()}
            </section>
          ))}
          <Footer />
        </>
      }
    />
  );
};

export default MainPage;
