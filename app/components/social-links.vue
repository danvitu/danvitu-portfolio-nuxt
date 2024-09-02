<template>
  <div class="social-link">
    <Icon name="mdi:github" />
    <a href="https://github.com/danvitu" target="_blank">GitHub</a>
  </div>
  <div class="social-link">
    <Icon name="logos:telegram" />
    <a href="https://t.me/danvitu" target="_blank">Telegram</a>
  </div>
  <div class="social-link">
    <Icon name="logos:discord-icon" size="0.8rem" />
    <a href="" target="_blank">Discord</a>
  </div>
</template>

<style scoped>
.social-link {
  @apply flex gap-2 items-center w-max rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 p-2
}
</style>