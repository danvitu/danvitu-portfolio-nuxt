<template>
  <article class="prose dark:prose-invert ">
    <h1 class="mb-0">Привет 👋, меня зовут Даниил </h1>
    <p>Я создаю веб-приложения и сайты на <strong>Vue / Nuxt</strong></p>
    <div
      class="not-prose grid grid-cols-2 md:grid-cols-3 md:gap-4 rounded-2xl p-2 bg-gray-50 max-w-md dark:bg-gray-800 dark:text-white">
      <SocialLinks />
    </div>
    <h2>Избранные проекты</h2>
    <ProjectList :repos="repos" />
    <p>Посмотреть <NuxtLink to="/projects">все проекты</NuxtLink>
    </p>
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
</style>