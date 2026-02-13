<template>
  <footer class="border-t border-border bg-bg2">
    <div class="container mx-auto px-4 py-6 flex items-center justify-between flex-wrap gap-4">
      <p class="text-xs sm:text-sm opacity-80">Copyright © {{ new Date().getFullYear() }} by Devops | All Rights Reserved</p>
      <a
        href="#top"
        class="inline-flex items-center justify-center p-2 rounded-lg bg-main text-bg2 hover:opacity-90 transition shadow-md"
        aria-label="Retour en haut"
      >
        <i class='bx bx-up-arrow-alt text-xl sm:text-2xl'></i>
      </a>
    </div>
  </footer>
</template>
