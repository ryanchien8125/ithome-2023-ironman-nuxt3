<template>
  <div class="flex w-full justify-center px-6 lg:px-0">
    <div v-if="pending">
      <Icon class="h-6 w-6 text-gray-500" name="eos-icons:loading" />
    </div>
    <template v-else>
      <div v-if="error" class="my-4">
        <span class="text-gray-500">發生了一點錯誤，請稍後再嘗試</span>
        <p class="my-2 text-rose-500">{{ error }}</p>
      </div>
      <div v-else-if="article" class="mb-8 flex w-full flex-col justify-center md:max-w-3xl">
        <div class="mt-4 flex justify-center">
          <img :src="cover" />
        </div>
        <div class="my-2 flex flex-col justify-between sm:my-0 sm:flex-row sm:items-center">
          <time class="my-2 text-sm text-gray-400">
            {{ new Date((1697385600 - article.id * 60 * 60 * 24) * 1000).toLocaleString() }}
          </time>
        </div>
        <h1 class="break-words text-4xl font-semibold text-gray-700">{{ article.title }}</h1>
        <div class="mt-6 break-words">
          {{ article.body }}
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
const route = useRoute()

const {
  pending,
  data: article,
  error
} = await useFetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)

useHead({
  title: article.value.title
})

const description = article.value.body.replace(/\n/g, ' ').substring(0, 300)
const cover = computed(() => `https://picsum.photos/id/${article.value.id}/600/400`)
const { origin } = useRequestURL()
const { baseURL } = useRuntimeConfig().app

useSeoMeta({
  description,
  ogTitle: article.value.title,
  ogDescription: description,
  ogImage: cover,
  ogUrl: () => `${origin}${baseURL}/articles/${article.value.id}`,
  twitterTitle: article.value.title,
  twitterDescription: description,
  twitterImage: cover,
  twitterUrl: () => `${origin}${baseURL}/articles/${article.value.id}`,
  twitterCard: 'summary_large_image'
})
</script>
