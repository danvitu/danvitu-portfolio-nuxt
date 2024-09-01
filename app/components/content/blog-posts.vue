<template>
  <section class="not-prose font-mono">
    <div class="column  text-gray-400 text-sm ">
      <div class="mr-10">дата</div>
      <div>заголовок</div>
    </div>
    <ul>
      <li v-for="post in posts" :key="post._path">
        <NuxtLink :to="post._path" class="column hover:bg-gray-100 dark:hover:bg-gray-800">
          <div class="text-gray-500">{{ dateConvert(post.publishedAt) }}</div>
          <div>{{ post.title }}</div>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script setup>
const { data: posts } = await useAsyncData('blog-list',
  () => queryContent('/blog')
    .where({ _path: { $ne: '/blog' } })
    .only(['title', '_path', 'publishedAt'])
    .sort({ publishedAt: -1 })
    .find()
)
const dateConvert = (date) => new Date(date).toLocaleDateString('ru-RU', {
  year: '2-digit',
  day: 'numeric',
  month: 'numeric'
})

</script>

<style scoped>
.column {
  @apply flex items-center space-x-8 py-2 border-b-2 border-gray-200 dark:border-gray-700
}
</style>