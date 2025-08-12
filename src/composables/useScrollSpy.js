import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useScrollSpy(ids = []) {
  const active = ref(ids[0] || null)

  const scrollToId = (id) => {
    const el = document.getElementById(id.replace('#',''))
    if (!el) return
    // marge pour le header (64px ≈ h-16)
    const top = el.getBoundingClientRect().top + window.scrollY - 64
    window.scrollTo({ top, behavior:'smooth' })
  }

  let observer
  onMounted(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) active.value = '#' + e.target.id
      })
    }, { rootMargin: '-50% 0px -50% 0px', threshold: 0 })

    ids.forEach(id => {
      const el = document.getElementById(id.replace('#',''))
      if (el) observer.observe(el)
    })
  })

  onBeforeUnmount(() => observer?.disconnect())

  return { active, scrollToId }
}
