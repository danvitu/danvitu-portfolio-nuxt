<template>
  <section class="not-prose">
    <ul class="grid grid-cols-1 gap-4">
      <li v-for="repository in repos"
        class="border border-gray-200 dark:border-gray-800 rounded-sm p-4 hover:bg-gray-200 dark:hover:bg-gray-800 font-mono"
        :key="repository.name">
        <a :href="repository.html_url" target="_blank">
          <div class="font-semibold">{{ repository.name }}</div>
          <p class="text-sm">{{ repository.description }}</p>
        </a>
        <a :href="repository.homepage">{{ repository.homepage }}</a>
      </li>
    </ul>
  </section>
</template>

<script setup>
const repos = [
  {
    name: 'Name',
    description: 'description',
    homepage: 'https://description',
  },
  {
    name: 'Name',
    description: 'description',
    homepage: 'https://description',
  },
]
</script>