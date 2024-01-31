import { defineConfig } from "vite";
import { createResolver } from "@nuxt/kit";
import { nodePolyfills } from "@bangjelkoski/vite-plugin-node-polyfills";

const buildSourceMap = process.env.BUILD_SOURCEMAP !== "false";
const { resolve } = createResolver(import.meta.url);

export default defineConfig({
  define: {
    "process.env": JSON.stringify({}),
    "process.env.DEBUG": JSON.stringify(process.env.DEBUG),
  },
  plugins: [nodePolyfills({ protocolImports: true })],

  build: {
    sourcemap: buildSourceMap,
  },

  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: [".."],
    },
  },

  optimizeDeps: {
    exclude: ["fsevents"],
    include: [],
  },
}) as any;

export const vitePlugins = [{ src: resolve("./buffer.ts"), ssr: false }];
