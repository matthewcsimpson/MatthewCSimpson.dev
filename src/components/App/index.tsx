import { About, Banner, Footer, Projects, Resume, Skills } from "@/components";

import "@/components/App/App.scss";

/**
 * App component that serves as the main container for the application.
 * @returns
 */
const App = () => {
  return (
    <div className="container">
      <div className="left">
        <Banner />
      </div>
      <div className="right">
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Footer />
      </div>
    </div>
  );
};

export default App;
