import { About, Banner, Projects, Resume } from "@/components";

import "@/components/App/App.scss";

const App = () => {
  return (
    <div className="container">
      <div className="left">
        <Banner />
      </div>
      <div className="right">
        <About />
        <Projects />
        <Resume />
      </div>
    </div>
  );
};

export default App;
