<template>
  <nav class="font-mono">
    <ul class="flex md:gap-4">
      <li>
        <NuxtLink to="/projects" class="link">
          <LucideFolderKanban />
          <p>Проекты</p>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/blog" class="link">
          <LucideNotepadText />
          <p>Блог</p>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/uses" class="link">
          <LucidePcCase />
          <p>Uses</p>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.link {
  @apply p-2 flex gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl
}
</style>