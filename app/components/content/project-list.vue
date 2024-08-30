<template>
  <div class="not-prose">
    <section v-if="status === 'pending'">Загрузка</section>
    <section v-else-if="status === 'error'">Что-то пошло не так... Попробуйте снова</section>
    <section v-else>
      <ul class="grid grid-cols-1 gap-4">
        <li v-for="repository in repos"
          class="border border-gray-200 dark:border-gray-800 rounded-sm p-4 hover:bg-gray-200 dark:hover:bg-gray-800 font-mono"
          :key="repository.id">
          <a :href="repository.html_url" target="_blank">
            <div class="font-semibold">{{ repository.name }}</div>
            <p class="text-sm">{{ repository.description }}</p>
          </a>
          <a :href="repository.homepage">{{ repository.homepage }}</a>
          <p>{{ repository.language }}</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
const { error, status, data } = await useFetch('https://api.github.com/users/danvitu/repos', { lazy: true })
const repos = computed(
  () => data.value.filter(repo => repo.homepage && !repo.fork)
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
)

</script>