// https://nuxt.com/docs/api/configuration/nuxt-config
// import { resolve } from "path";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  //* Meta general approach
  // app: {
  //   head: {
  //     title: "Nuxt starter",
  //     meta: [
  //       {
  //         name: "description",
  //         content: "This is my app description",
  //       },
  //     ],
  //   },
  // },

  alias: {
    // "@": resolve(__dirname, "/"),
    assets: "/<rootDir>/assets",
  },

  css: ["~/assets/main.scss"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxt/content", "@pinia/nuxt"],

  // Rendering mode:ß
  ssr: false,
  // ssr: true,
  // ? OR
  // routeRules: {
  //   "/profile": { ssr: true },
  // },
});
