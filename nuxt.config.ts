// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  runtimeConfig: {
    public: {
      app_url: 'https://naimsolong.com',
    }
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  devtools: {
    enabled: false,
    timeline: {
      enabled: false
    }
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ]
})
