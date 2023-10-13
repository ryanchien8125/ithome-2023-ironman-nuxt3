// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon'],
  devtools: { enabled: true },
  nitro: {
    //preset: 'cloudflare' // 預設為 node-server
  }
})
