<script setup>
defineOptions({ name: 'HeaderPage' })

import { ref, onMounted, onBeforeUnmount, computed, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useScrollSpy } from '@/composables/useScrollSpy'

// --- liens : sections (hash) vs route ---
const links = [
  { label: 'Home',     hash: '#home' },
  { label: 'About',    hash: '#about' },
  { label: 'Services', hash: '#services' },
  { label: 'Cv',       route: '/cv' },                 // ← page dédiée
  { label: 'Portfolio',hash: '#portfolio' },
  { label: 'Contact',  hash: '#contact' },
  // { label:'Ext', href:'https://...' , external:true }
]

const route = useRoute()
const router = useRouter()

// scroll‑spy seulement sur la landing
const sectionIds = ['#home','#about','#services','#portfolio','#contact']
const { active, scrollToId } = useScrollSpy(sectionIds)
const isLanding = computed(() => route.name === 'home' || route.path === '/')

const open = ref(false)
const scrolled = ref(false)
const onScroll = () => { scrolled.value = window.scrollY > 100 }
onMounted(() => { window.addEventListener('scroll', onScroll); onScroll() })
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))

// navigation unifiée (route vs section)
async function go(link) {
  if (link.external) { window.location.href = link.href; return }
  if (link.route) {            // /cv
    open.value = false
    if (route.path !== link.route) await router.push(link.route)
    return
  }
  if (link.hash) {             // #section
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
  if (link.route)  return route.path === link.route ? 'text-main' : ''
  if (link.hash)   return isLanding.value && active.value === link.hash ? 'text-main' : ''
  return ''
}
</script>

<template>
  <header :class="['fixed inset-x-0 top-0 z-50 border-b transition',
                   scrolled ? 'bg-bg/80 backdrop-blur border-white/10' : 'bg-bg border-transparent']">
    <nav class="container h-16 flex items-center justify-between">
      <a class="text-2xl font-semibold" href="/" @click.prevent="go({ hash:'#home' })"></a>

      <!-- Desktop -->
      <ul class="hidden md:flex items-center gap-6">
        <li v-for="l in links" :key="l.label">
          <RouterLink
            v-if="l.route"
            :to="l.route"
            class="hover:text-main"
            :class="linkClass(l)"
          >{{ l.label }}</RouterLink>

          <a
            v-else-if="l.hash"
            href="#"
            class="hover:text-main"
            :class="linkClass(l)"
            @click.prevent="go(l)"
          >{{ l.label }}</a>

          <a
            v-else-if="l.external"
            :href="l.href"
            class="hover:text-main"
          >{{ l.label }}</a>
        </li>
      </ul>

      <!-- Burger -->
      <button class="md:hidden text-3xl" @click="open=!open" aria-label="Menu">
        <i :class="['bx', open ? 'bx-x' : 'bx-menu']"></i>
      </button>
    </nav>

    <!-- Mobile -->
    <div v-if="open" class="md:hidden border-t border-white/10">
      <ul class="px-4 py-3 space-y-2">
        <li v-for="l in links" :key="l.label">
          <RouterLink
            v-if="l.route"
            :to="l.route"
            class="block"
            :class="linkClass(l)"
            @click="open=false"
          >{{ l.label }}</RouterLink>

          <a
            v-else
            href="#"
            class="block"
            :class="linkClass(l)"
            @click.prevent="go(l)"
          >{{ l.label }}</a>
        </li>
      </ul>
    </div>
  </header>
</template>
