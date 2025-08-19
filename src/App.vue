<script setup>
import Header from '@/components/HeaderPage.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div id="top" class="min-h-screen bg-bg text-text">
    <Header />
    <main class="pt-16">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>
