<template>
  <ul class="grid grid-cols-1 gap-4 not-prose">
    <li v-for="repository in repos"
      class="border bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-800 rounded-xl p-4 font-mono"
      :key="repository.id">
      <div class="font-semibold">{{ repository.name }}</div>
      <p v-if="repository.description" class="text-sm">{{ repository.description }}</p>
      <div class="flex gap-4 flex-wrap mb-2">
        <a v-if="repository.homepage" class="link" :href="repository.homepage" target="_blank">App</a>
        <a v-if="repository.html_url" class="link" :href="repository.html_url" target="_blank">Code</a>
      </div>
      <div class="flex gap-2 justify-end text-gray-500 dark:text-gray-300 ">
        <span v-for="tag in repository.tags" class="text-xs border dark:border-gray-700 px-2 py-1 rounded-md">
          <span>{{ tag }}</span>
        </span>
      </div>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  repos: {
    type: Array,
  }
})
</script>

<style scoped>
.link {
  @apply underline hover:text-gray-800 dark:hover:text-gray-200 text-[#00DC82]
}
</style>