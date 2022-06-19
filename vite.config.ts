import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "./webroot",
    target: "esnext",
    polyfillDynamicImport: false,
  },
});
