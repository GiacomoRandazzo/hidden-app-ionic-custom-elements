import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: "./assets/",
  build: {
    outDir: "./public/",
  },
});
