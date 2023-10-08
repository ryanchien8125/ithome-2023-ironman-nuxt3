<template>
  <div class="flex flex-col items-center bg-white">
    <p class="my-8 text-4xl font-semibold text-rose-500">{{ $router.currentRoute.value.href }}</p>
    <h1 class="text-6xl font-medium text-blue-500">
      {{ $t('about') }}
    </h1>
  </div>
</template>
