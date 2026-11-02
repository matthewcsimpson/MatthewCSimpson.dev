import { lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { MainPage } from "@/pages";
import { initAnalytics } from "@/utils";

import "@/styles/main.scss";

// Loaded on demand so react-markdown/remark-gfm stay out of the entry chunk.
const ProjectPage = lazy(() => import("@/pages/ProjectPage"));

initAnalytics();

const root = createRoot(document.querySelector<HTMLDivElement>("#app")!);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route
        path="/project/:projectId"
        element={
          <Suspense fallback={null}>
            <ProjectPage />
          </Suspense>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);
