import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    // Vite 8 minifies CSS with Lightning CSS, which rewrites media queries to
    // range syntax (`width>=48rem`) for its default modern targets. Older
    // Safari (<16.4) and Chrome (<104) ignore that syntax, so keep the
    // `min-width` form.
    cssTarget: ["safari14", "chrome90"],
  },
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
});
