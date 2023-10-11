<template>
  <button
    type="button"
    class="inline-flex items-center rounded-md border border-transparent bg-orange-100 px-6 py-3 text-xl font-medium text-orange-700 hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
    @click="onClick"
  >
    OOPS!
  </button>
</template>

<script setup>
const onClick = () => {
  throw new Error('由 OopsButton 元件，拋出的一個錯誤！')
}
</script>
