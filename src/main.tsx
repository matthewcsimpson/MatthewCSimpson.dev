import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { MainPage, ProjectDetails } from "@/pages";

import "@/styles/main.scss";

const root = createRoot(document.querySelector<HTMLDivElement>("#app")!);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/project/:projectId" element={<ProjectDetails />} />
    </Routes>
  </BrowserRouter>
);
