import { createRoot } from "react-dom/client";
import { MainPage } from "@/pages";

import "@/styles/main.scss";

const root = createRoot(document.querySelector<HTMLDivElement>("#app")!);
root.render(<MainPage />);
