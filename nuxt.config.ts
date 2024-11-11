// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["nuxt-applicationinsights", "@pinia/nuxt"],
  runtimeConfig: {
    public: {
      applicationinsights: {
        connectionString: "",
      },
    },
  },
});