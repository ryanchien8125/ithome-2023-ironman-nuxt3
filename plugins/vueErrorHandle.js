export default defineNuxtPlugin((nuxtApp) => {
  // nuxtApp.vueApp.config.errorHandler = (error) => {
  //   console.error('[由 vueErrorHandle 插件所捕獲的錯誤]', error)
  // }

  nuxtApp.vueApp.config.errorHandler = (error) => {
    console.error('[由 vueErrorHandle 插件所捕獲的錯誤]', error)
  }

  nuxtApp.hooks.hook('vue:error', (error) => {
    console.error('[由 Nuxt 的 vue:error hook 所記錄到的錯誤]', error)
  })
})
