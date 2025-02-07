<script setup>
const repos = ref([
  {
    id: 1,
    name: 'КПТ Ассистент',
    description:
      'Онлайн-помощник для ведения журнала настроения из когнитивно-поведенческой терапии (КПТ) ',
    homepage: 'https://nuxt-cbt-app.vercel.app',
    html_url: 'https://github.com/danvitu/nuxt-cbt-app',
    tags: ['Vue', 'Nuxt', 'Supabase'],
  },
  {
    id: 2,
    name: 'Сайт-портфолио | danvitu',
    description: '',
    homepage: 'https://danvitu.netlify.app/',
    tags: ['Vue', 'Nuxt'],
  },
  {
    id: 3,
    name: 'Прогноз погоды',
    description: 'Узнать прогноз погоды в своем городе',
    homepage: 'https://incandescent-conkies-33be79.netlify.app/',
    html_url: 'https://github.com/danvitu/vue-weather-app',
    tags: ['Vue'],
  },
])
</script>

<template>
  <ul class="grid grid-cols-1 gap-4">
    <li
      v-for="repository in repos"
      :key="repository.id"
      class="border bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-800 rounded-xl p-4 font-mono space-y-2"
    >
      <div class="font-semibold">
        {{ repository.name }}
      </div>
      <p
        v-if="repository.description"
        class="text-sm"
      >
        {{ repository.description }}
      </p>
      <div class="flex gap-4 flex-wrap mb-2">
        <a
          v-if="repository.homepage"
          class="link"
          :href="repository.homepage"
          target="_blank"
        >Link</a>
        <a
          v-if="repository.html_url"
          class="link"
          :href="repository.html_url"
          target="_blank"
        >GitHub
        </a>
      </div>
      <div class="flex gap-2 justify-end text-gray-500 dark:text-gray-300">
        <span
          v-for="tag in repository.tags"
          :key="tag"
          class="text-xs border dark:border-gray-700 px-2 py-1 rounded-md"
        >
          <span>{{ tag }}</span>
        </span>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.link {
  @apply underline hover:text-gray-800 dark:hover:text-gray-200 text-[#00DC82];
}
</style>
