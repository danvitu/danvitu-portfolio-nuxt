<template>
  <nav>
    <ul class="flex flex-row md:gap-4 font-mono">
      <li>
        <NuxtLink
          to="/uses"
          class="link"
        >
          <Icon
            name="mdi:laptop-chromebook"
            size="1.5rem"
          />
          <p>Uses</p>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.link {
  @apply p-2 flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-xl;
}
</style>
