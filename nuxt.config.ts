// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  runtimeConfig: {
    public: {
      cloudflare_analytic_token: process.env.CLOUDFLARE_ANALYTIC_TOKEN,
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
  content: {
    highlight: {
      theme: 'github-light',
      langs: [
        'bash',
        'php',
        'javascript'
      ]
    }
  },
  devtools: {
    enabled: false,
    timeline: {
      enabled: false
    }
  },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', "@nuxt/image"]
})