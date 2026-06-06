import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/web-video-company-report/20260612-ai-collab-report-pic/",
  server: {
    port: 5180,
    fs: { allow: [".."] },
  },
});
