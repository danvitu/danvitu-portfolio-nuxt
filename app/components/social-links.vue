<template>
  <a href="https://github.com/danvitu" target="_blank" class="social-link">
    <Icon name="mdi:github" />
    <p>GitHub</p>
  </a>
  <a href="https://t.me/danvitu" target="_blank" class="social-link">
    <Icon name="logos:telegram" />
    <p>Telegram</p>
  </a>
  <a href="" class="social-link">
    <Icon name="logos:discord-icon" size="0.8rem" />
    <p>Discord</p>
  </a>
</template>

<style scoped>
.social-link {
  @apply flex gap-2 items-center rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 p-2
}
</style>