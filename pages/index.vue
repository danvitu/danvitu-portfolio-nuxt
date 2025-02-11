<script setup></script>

<template>
  <div class="mx-auto">
    <h1 class="mb-4 font-bold md:text-4xl text-2xl">
      Привет 👋, меня зовут Даниил
    </h1>
    <div class="mb-8">
      <div>🧑‍💻 Веб-разработчик на пути становления</div>
      <div>🟢 Vue / Nuxt + BaaS</div>
      <div>🌐 Готов к новым проектам и совместной работе!</div>
    </div>
    <div
      class="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-2xl p-2 mb-8 bg-gray-50 dark:bg-gray-800 dark:text-white"
    >
      <SocialLinks />
    </div>
    <h2 class="text-xl font-semibold mb-4">
      Мои проекты
    </h2>
    <ProjectList />
  </div>
</template>

<style scoped>
strong {
  color: #00dc82;
}

.tool {
  @apply border px-2 rounded-xl text-[#00DC82];
}
</style>
