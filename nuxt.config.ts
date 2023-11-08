// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    footer: {
      social: {
        linkedin: 'https://www.linkedin.com/in/amirul-naim-mohd-solong/',
        twitter: 'https://twitter.com/naimsolong',
        github: 'https://github.com/naimsolong',
      }
    }
  },
  app: {
    baseURL: '/', // baseURL: '/<repository>/'
    buildAssetsDir: 'assets', // don't use "_" at the begining of the folder name to avoids nojkill conflict
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ]
})
