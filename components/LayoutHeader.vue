<template>
  <header class="flex w-full justify-center">
    <nav class="flex w-full max-w-7xl items-center justify-between px-6 py-2">
      <div>
        <NuxtLink
          :to="{
            name: 'index'
          }"
        >
          <div class="flex items-center justify-between">
            <div class="mr-3">
              <Icon class="h-12 w-12" name="logos:nuxt-icon" />
            </div>
            <div class="hidden h-6 text-2xl font-semibold text-gray-700 sm:block">
              Nuxt 3 實戰筆記
            </div>
          </div>
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>
