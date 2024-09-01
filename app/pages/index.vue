<template>
  <article class="box-border prose dark:prose-invert max-w-none">
    <h1 class="mb-0">Привет 👋, меня зовут Даниил </h1>
    <p>Я разрабатываю веб-приложения и сайты на <strong>Vue / Nuxt</strong></p>
    <div
      class="not-prose grid grid-cols-1 md:grid-cols-3 gap-y-4 rounded-2xl p-4 max-w-md bg-gray-50 dark:bg-gray-800 dark:text-white">
      <div class="flex gap-2 items-center">
        <Icon name="logos:github-icon" size="1.2rem" />
        <a href="https://github.com/danvitu">GitHub</a>
      </div>
      <div class="flex gap-2 items-center">
        <Icon name="logos:telegram" size="1.2rem" />
        <a href="https://t.me/danvitu">Telegram</a>
      </div>
      <div class="flex gap-2 items-center">
        <Icon name="logos:discord-icon" size="1.2rem" />
        <a href="">Discord</a>
      </div>
    </div>
    <h2>Избранные проекты</h2>
    <ProjectList :repos="repos" />
    <p>Посмотреть <NuxtLink to="/projects">все проекты</NuxtLink></p>
    <h2>Недавние записи в блоге</h2>
    <LatestBlogPosts :limit="3" />
    <p>Посмотреть <NuxtLink to="/blog">все записи в блоге</NuxtLink>
    </p>
  </article>
</template>

<script setup>

useSeoMeta({
  title: 'Главная',
  ogTitle: 'Главная',
  ogDescription: '[og:description]',
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