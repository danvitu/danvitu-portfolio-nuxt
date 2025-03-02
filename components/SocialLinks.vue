<template>
  <a href="https://github.com/danvitu" target="_blank" class="social-link">
    <Icon name="mdi:github" />
    <p>GitHub</p>
  </a>
  <a href="https://t.me/danvitu" target="_blank" class="social-link">
    <Icon name="logos:telegram" />
    <p>Telegram</p>
  </a>
  <a href="https://bsky.app/profile/danvitu9.bsky.social" class="social-link">
    <Icon name="logos:bluesky" />
    <p>Bluesky</p>
  </a>
  <a href="https://www.threads.net/@danvitu9" class="social-link">
    <Icon name="mingcute:threads-line" />
    <p>Threads</p>
  </a>
</template>

<style scoped>
.social-link {
  @apply flex gap-2 items-center rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 p-2;
}
</style>
