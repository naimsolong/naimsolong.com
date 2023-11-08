// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/', // baseURL: '/<repository>/'
    buildAssetsDir: 'build', // don't use "_" at the begining of the folder name to avoids nojkill conflict
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ]
})
