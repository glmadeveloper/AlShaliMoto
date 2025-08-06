// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  generate: {
    routes: "/",
  },
  runtimeConfig: {
    public: {
      BASE_URL: "",
      IMAGE_BASE_URL: "",
    },
  },
  app: {
    baseURL: "/",
    head: {
      title: "Al Shalii Moto",
      link: [{ rel: "icon", type: "image/png", href: "./favicon.png" }],
    },
  },
  css: [
    "~/assets/css/main.scss",
    "~/assets/css/bootstrap.min.css",
    "~/assets/css/theme.css",
    "~/assets/css/objectivity.css",
    "~/assets/css/responsive.css",
  ],
  plugins: [
    "~/plugins/i18n.js",
    "~/plugins/pinia.js",
    "~/plugins/animexyz.client.js",
  ],
});
