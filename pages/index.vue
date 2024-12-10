<template>
  <article class="prose dark:prose-invert mx-auto">
    <h1 class="mb-2">Привет 👋, меня зовут Даниил </h1>
    <div class="mb-4">
      <div class="mb-2">Я создаю веб-приложения и веб-сайты</div>
      <div class="flex gap-2">
        <span class="tool">Vue</span>
        <span class="tool">Nuxt</span>
        <span class="tool">Supabase</span>
      </div>
    </div>
    <div
      class="not-prose grid grid-cols-2 md:grid-cols-3 md:gap-4 rounded-2xl p-2 bg-gray-50 max-w-md dark:bg-gray-800 dark:text-white">
      <SocialLinks />
    </div>
    <h2>Избранные проекты</h2>
    <ProjectList :repos="repos" />
  </article>
</template>

<script setup>
useSeoMeta({
  title: 'Главная',
  ogTitle: 'Главная',
  ogDescription: 'danvitu - Vue / Nuxt',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
})
useHead({
  htmlAttrs: {
    lang: 'ru'
  },
})
const { repos } = useFavProjects()
</script>

<style scoped>
strong {
  color: #00DC82
}

.tool {
  @apply border px-2 rounded-xl text-[#00DC82]
}
</style>