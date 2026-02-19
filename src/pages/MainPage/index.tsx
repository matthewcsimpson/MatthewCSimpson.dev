import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import {
  About,
  Banner,
  Container,
  ContactSection,
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
  { id: "contact", label: "Contact", render: () => <ContactSection /> },
];

/**
 * App component that serves as the main container for the application.
 * @returns
 */
const MainPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const target = document.getElementById(location.hash.slice(1));
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [location.hash]);

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
