<script setup>
defineOptions({ name: 'HeaderPage' })

import { ref, onMounted, onBeforeUnmount, computed, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useScrollSpy } from '@/composables/useScrollSpy'
import ThemeToggle from '@/components/ThemeToggle.vue'

// --- liens : sections (hash) vs route ---
const links = [
  { label: 'Home', hash: '#home' },
  { label: 'About', hash: '#about' },
  { label: 'Services', hash: '#services' },
  { label: 'Cv', route: '/cv' }, // ← page dédiée
  { label: 'Portfolio', hash: '#portfolio' },
  { label: 'Contact', hash: '#contact' },
  // { label:'Ext', href:'https://...' , external:true }
]

const route = useRoute()
const router = useRouter()

// scroll‑spy seulement sur la landing
const sectionIds = ['#home', '#about', '#services', '#portfolio', '#contact']
const { active, scrollToId } = useScrollSpy(sectionIds)
const isLanding = computed(() => route.name === 'home' || route.path === '/')

const open = ref(false)
const scrolled = ref(false)
const onScroll = () => {
  scrolled.value = window.scrollY > 100
}
onMounted(() => {
  window.addEventListener('scroll', onScroll)
  onScroll()
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))

// navigation unifiée (route vs section)
async function go(link) {
  if (link.external) {
    window.location.href = link.href
    return
  }
  if (link.route) {
    // /cv
    open.value = false
    if (route.path !== link.route) await router.push(link.route)
    return
  }
  if (link.hash) {
    // #section
    open.value = false
    if (isLanding.value) {
      scrollToId(link.hash)
    } else {
      // Depuis /cv → revenir à la home puis scroller
      await router.push({ path: '/' })
      await nextTick()
      // petit délai pour que le DOM soit prêt
      setTimeout(() => scrollToId(link.hash), 50)
    }
  }
}

// classe active (route /cv ou section visible)
function linkClass(link) {
  if (link.route) return route.path === link.route ? 'text-main' : ''
  if (link.hash) return isLanding.value && active.value === link.hash ? 'text-main' : ''
  return ''
}
</script>

<template>
  <header
    :class="[
      'fixed inset-x-0 top-0 z-50 border-b transition',
      scrolled ? 'bg-bg/90 backdrop-blur-md border-border/30' : 'bg-bg/80 border-transparent',
    ]"
  >
    <nav
      class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3 sm:py-4"
    >
      <!-- Logo -->
      <a
        class="flex items-center hover:opacity-80 transition"
        href="/"
        @click.prevent="go({ hash: '#home' })"
      >
        <img src="/apple-touch-icon.png" alt="Logo" class="h-10 w-10 sm:h-12 sm:w-12 rounded-lg" />
      </a>

      <!-- Desktop links -->
      <ul class="hidden md:flex items-center gap-5 lg:gap-6">
        <li v-for="l in links" :key="l.label">
          <RouterLink
            v-if="l.route"
            :to="l.route"
            class="hover:text-main transition text-sm lg:text-base font-medium"
            :class="linkClass(l)"
            >{{ l.label }}</RouterLink
          >

          <a
            v-else-if="l.hash"
            href="#"
            class="hover:text-main transition text-sm lg:text-base font-medium"
            :class="linkClass(l)"
            @click.prevent="go(l)"
            >{{ l.label }}</a
          >

          <a
            v-else-if="l.external"
            :href="l.href"
            class="hover:text-main transition text-sm lg:text-base font-medium"
          >
            {{ l.label }}
          </a>
        </li>
      </ul>

      <!-- Actions (toggle + burger) -->
      <div class="flex items-center gap-2 sm:gap-3">
        <ThemeToggle />
        <button
          class="md:hidden p-2 hover:bg-bg2 rounded-lg transition"
          @click="open = !open"
          aria-label="Menu"
          :aria-expanded="open ? 'true' : 'false'"
        >
          <i :class="['bx text-2xl sm:text-3xl', open ? 'bx-x' : 'bx-menu']"></i>
        </button>
      </div>
    </nav>

    <!-- Mobile -->
    <transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="open" class="md:hidden border-t border-border/30 bg-bg2/95 backdrop-blur">
        <ul class="px-4 py-4 space-y-1">
          <li v-for="l in links" :key="l.label">
            <RouterLink
              v-if="l.route"
              :to="l.route"
              class="block py-3 px-3 rounded-lg hover:bg-bg transition font-medium"
              :class="linkClass(l)"
              @click="open = false"
              >{{ l.label }}</RouterLink
            >

            <a
              v-else
              href="#"
              class="block py-3 px-3 rounded-lg hover:bg-bg transition font-medium"
              :class="linkClass(l)"
              @click.prevent="go(l)"
              >{{ l.label }}</a
            >
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>
