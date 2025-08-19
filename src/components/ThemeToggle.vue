<script setup>
import { useTheme } from '@/composables/useTheme'
const { isDark, toggle } = useTheme()
</script>

<template>
  <button
    @click="toggle"
    :aria-pressed="isDark ? 'true' : 'false'"
    aria-label="Basculer le thème"
    class="inline-flex items-center justify-center w-10 h-10 rounded-full
         border border-border/70 bg-transparent
         hover:bg-bg2/70 dark:hover:bg-bg/60 transition
         focus:outline-none focus:ring-2 focus:ring-main"
  >
    <i v-if="isDark" class="bx bx-sun text-lg"></i>
    <i v-else class="bx bx-moon text-lg"></i>
  </button>

</template>

<style scoped>

</style>
