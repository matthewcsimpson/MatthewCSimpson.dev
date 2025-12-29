import {
  About,
  Banner,
  Container,
  Footer,
  Projects,
  Resume,
  Skills,
} from "@/components";

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
          <About />
          <Projects />
          <Skills />
          <Resume />
          <Footer />
        </>
      }
    />
  );
};

export default MainPage;
