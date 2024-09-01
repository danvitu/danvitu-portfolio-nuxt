<template>
  <div class="flex space-x-2 items-center">
    <button @click="toggleMode" class="p-2 hover:bg-gray-2npn00 dark:hover:bg-gray-800 rounded-xl">
      <LucideSun v-if="nextMode === 'light'" />
      <LucideMoon v-if="nextMode === 'dark'" />
      <LucideSunMoon v-if="nextMode === 'system'" />
    </button>
  </div>
</template>

<script setup>
const colorMode = useColorMode()
const modes = [
  'system',
  'light',
  'dark'
]

const nextMode = computed(() => {
  const currentModeIndex = modes.indexOf(colorMode.preference)
  let nextModeIndex = null
  if (currentModeIndex + 1 === modes.length) {
    nextModeIndex = 0
  } else {
    nextModeIndex = currentModeIndex + 1
  }
  return modes[nextModeIndex]
})

const toggleMode = () => colorMode.preference = nextMode.value
</script>