import { default as vite, vitePlugins } from "./nuxt-config/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite,
  plugins: vitePlugins,
  devtools: { enabled: true },
});
