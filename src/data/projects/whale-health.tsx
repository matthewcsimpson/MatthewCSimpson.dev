export const whaleHealthProject = [
  `Ocean Wise is a major conservation non-profit that has multiple programs in place to help protect the world's oceans and the life that lives within them. Part of that work is monitoring the health of whale populations off the coast of British Columbia. Researchers fly drones over killer whales and humpback whales, and measure the animals in the resulting aerial photographs to track body condition, growth, and pregnancy over time.

Ocean Wise contracted [Skyrocket Digital](https://skyrocketdigital.com) to build the Whale Health platform, a tool that uses computer vision models to detect whales in drone images, place anatomical landmarks on each animal, and calculate health metrics from them. Researchers then review, correct, and verify those results before exporting them for statistical analysis.

I was the sole front end developer on the project and built the web application myself, working alongside the back end team who built the API, job queue, and model integration. Researchers use it to organize their work into projects and surveys, upload drone imagery with accompanying metadata, run the analysis workflow, and review every detection on an interactive canvas.

## Tech Stack

Next.js 16 (App Router), React 19, TypeScript, Turbopack, Tailwind CSS, Radix UI, Redux Toolkit, RTK Query, Fabric.js, Recharts, React Hook Form, Zod, Auth0, Sentry, Marker.io, Jest, Docker, Azure App Service, and more.

## Features

- **Projects & surveys:** projects group surveys by species, population, region, organization, and date range, with filtering, sorting, and archiving at both levels.
- **Image upload with metadata:** bulk drone image uploads with an optional CSV of flight, encounter, and image data. Every row is validated before upload, and every error is listed with the affected images highlighted.
- **Analysis workflow:** researchers queue records for analysis against a configured set of models and the interface polls the running jobs, updating records as their results arrive.
- **Detection canvas:** a zoomable, keyboard-driven canvas built on [Fabric.js](https://fabricjs.com/) that draws each detection's bounding box, landmarks, connection lines, and body outline over the source image. Researchers can drag landmarks to correct them, add or remove detections by hand, tag individual whales, and verify results, with a full audit history of every change.
- **Species-specific analysis:** killer whale eye-patch (EP Ratio) and pregnancy analysis, and humpback whale Body Area Index (BAI), each with its own landmarks and visuals.
- **Exports:** per-record, per-survey, and per-project CSV exports formatted for analysis in R.

## Challenges

The heart of the application is the detection canvas. It needed to render very high resolution drone imagery while keeping landmarks precise to the pixel, stay sharp and responsive when zoomed in for fine adjustments, and keep the canvas, the detections table, and the per-whale visuals in sync as a researcher moves between them. Each species and analysis type has its own set of landmarks and rules about what can be edited, so the canvas is driven by configuration rather than hard-coded for a single model.

The research team's methods also evolved during development, adding new analysis types, new filters, and stricter validation, and I worked closely with the researchers and the back end team to ship those changes quickly without disrupting surveys already in progress.

## Screenshots

1. Projects: all whale analysis projects, filterable by status, species and population, geographic area, organization, and date range.

![Projects](/images/whale-health-1-projects.png)

2. Project Surveys: each project contains surveys, with tabs to switch between surveys, every record in the project, and the project's model configuration.

![Project Surveys](/images/whale-health-2-project-surveys.png)

3. Survey Records: every image record with its detection types, verification state, and workflow status, selectable in bulk to start the analysis workflow or export results.

![Survey Records](/images/whale-health-3-survey-records.png)

4. Detection Canvas (EP Ratio): a killer whale detection with its four eye-patch landmarks, updated by a researcher.

![EP Ratio](/images/whale-health-4-record-ep-ratio.png)

5. Detection Canvas (Pregnancy): six killer whale body landmarks, with each landmark's coordinates listed and access to the audit history.

![Pregnancy](/images/whale-health-5-record-pregnancy.png)

6. Detection Canvas (Body Area Index): humpback whales analyzed using a segmented body outline in addition to landmarks.

![Body Area Index](/images/whale-health-6-record-bai.png)

7. Body Area Index Visuals: the calculated BAI and life stage, a width profile chart drawn from the body outline, and the measurements exported to CSV.

![Body Area Index Visuals](/images/whale-health-7-record-bai-visuals.png)
`,
];
