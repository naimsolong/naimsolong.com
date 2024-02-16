// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  runtimeConfig: {
    public: {
      posthog_key: process.env.POSTHOG_KEY,
      posthog_host: process.env.POSTHOG_HOST,
      app_url: 'https://naimsolong.com',
    }
  },
  app: {
    baseURL: '/', // baseURL: '/<repository>/'
    buildAssetsDir: 'build', // don't use "_" at the begining of the folder name to avoids nojkill conflict
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
