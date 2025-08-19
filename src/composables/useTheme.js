// src/composables/useTheme.js
import { ref, onMounted } from 'vue'

const KEY = 'theme' // 'dark' | 'light'

export function useTheme() {
  const isDark = ref(false)
  let media

  const apply = (val) => {
    isDark.value = !!val
    document.documentElement.classList.toggle('dark', isDark.value)
  }

  const load = () => {
    const saved = localStorage.getItem(KEY) // peut être null
    if (saved === 'dark' || saved === 'light') {
      apply(saved === 'dark')
    } else {
      media = window.matchMedia('(prefers-color-scheme: dark)')
      apply(media.matches)
    }
  }

  const toggle = () => {
    const next = !isDark.value
    apply(next)
    localStorage.setItem(KEY, next ? 'dark' : 'light')
  }

  onMounted(() => {
    load()
    // si l’utilisateur n’a pas fait de choix, on suit l’OS en live
    media = window.matchMedia('(prefers-color-scheme: dark)')
    const listener = (e) => {
      const saved = localStorage.getItem(KEY)
      if (!saved) apply(e.matches)
    }
    media.addEventListener?.('change', listener)
  })

  return { isDark, toggle }
}
