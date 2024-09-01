<template>
  <div>
    <section v-if="status === 'pending'">Загрузка...</section>
    <section v-else-if="status === 'error'">
      <p>Что-то пошло не так... Попробуйте снова</p>
      <p>{{ error }}</p>
    </section>
    <section v-else>
      <ProjectList :repos="repos" />
    </section>
  </div>
</template>

<script setup>
const { error, status, data } = await useLazyFetch('https://api.github.com/users/danvitu/repos')
const repos = computed(
  () => data.value.filter(repo => repo.homepage && !repo.fork)
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
)
</script>