import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: "public",
  base: "./",
  build: {
    sourcemap: true,
  },
  plugins: [react(), svgr()],
});
