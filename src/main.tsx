import { createRoot } from "react-dom/client";

import { App } from "@/components";

import "@/styles/main.scss";

const root = createRoot(document.querySelector<HTMLDivElement>("#app")!);
root.render(<App />);
