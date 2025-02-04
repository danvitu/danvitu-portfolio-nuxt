<template>
  <div class="mx-auto px-4 max-w-3xl">
    <header class="flex flex-wrap justify-between items-center mt-5">
      <div class="flex items-center md:space-x-12">
        <div class="hover:bg-gray-200 dark:hover:bg-gray-800 rounded-xl">
          <NuxtLink to="/">
            <div class="flex items-center space-x-2">
              <Icon name="mdi:face-man-outline" size="1.5rem" />
              <span class="font-semibold font-mono">danvitu</span>
            </div>
          </NuxtLink>
        </div>
      </div>
      <Menu />
    </header>
    <main class="mt-4">
      <slot />
    </main>
    <footer>
      <nav
        class="flex flex-col items-center md:flex-row gap-2 justify-between border-t py-8 px-2 mt-12 text-gray-600 dark:text-gray-400"
      >
        <div class="flex gap-1 items-center text-gray-500">
          <Icon name="mdi:copyright" size="1rem" />
          <span>2025 danvitu</span>
        </div>
      </nav>
    </footer>
  </div>
</template>

<script setup>
useHead({
  titleTemplate: "%s - danvitu",
});
</script>

<style>
body {
  @apply bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200;
}
</style>
