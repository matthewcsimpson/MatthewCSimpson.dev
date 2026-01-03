import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { MainPage, ProjectPage } from "@/pages";
import { initAnalytics } from "@/utils";

import "@/styles/main.scss";

initAnalytics();

const root = createRoot(document.querySelector<HTMLDivElement>("#app")!);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/projects/:projectId" element={<ProjectPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);
