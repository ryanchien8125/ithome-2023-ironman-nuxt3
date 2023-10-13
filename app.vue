<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  titleTemplate: (title) => (title ? `${title} - Nuxt 3 實戰筆記` : 'Nuxt 3 實戰筆記'),
  htmlAttrs: {
    lang: 'zh-TW'
  },
  link: [
    {
      rel: 'icon',
      href: '/favicon.ico'
    }
  ]
})

const { origin } = useRequestURL()
const { baseURL } = useRuntimeConfig().app

const seoMeta = {
  title: 'Nuxt 3 實戰筆記',
  description: '歡迎來到使用 Nuxt 3 開發的部落格網站',
  image: 'https://i.imgur.com/AVNujNC.png',
  url: `${origin}${baseURL}`
}

useSeoMeta({
  description: seoMeta.description,
  ogTitle: seoMeta.title,
  ogDescription: seoMeta.description,
  ogImage: seoMeta.image,
  ogUrl: seoMeta.url,
  twitterTitle: seoMeta.title,
  twitterDescription: seoMeta.description,
  twitterImage: seoMeta.image,
  twitterUrl: seoMeta.url,
  twitterCard: 'summary_large_image'
})
</script>
