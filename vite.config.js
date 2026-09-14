import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// BASE_PATH is set by the GitHub Pages workflow to "/website-public/".
// Serving from a custom domain or a user/org page? Leave it unset.
const base = process.env.BASE_PATH || "/";

export default defineConfig({
  base,
  plugins: [react()],
  build: {
    outDir: "dist",
    // Keep images as separate files rather than inlining them as data URIs.
    assetsInlineLimit: 0,
  },
});
