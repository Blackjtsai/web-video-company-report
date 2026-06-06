import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/web-video-company-report/20260612-tai-builder-share/",
  server: {
    port: 5182,
    fs: { allow: [".."] },
  },
});
