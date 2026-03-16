import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

const dirname =
  typeof __dirname !== "undefined"
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    copyPublicDir: false,
    emptyOutDir: true,
    lib: {
      entry: path.resolve(dirname, "./src/index.ts"),
      name: "functional",
      fileName: (format) => `index.${format}.js`,
    },
    outDir: "lib",
    sourcemap: true,
  },
  plugins: [
    dts({
      rollupTypes: true,
      outDir: "lib",
    }),
  ],
});
