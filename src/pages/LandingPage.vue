<script setup>
import { onMounted } from 'vue'
import Typed from 'typed.js'
import ScrollReveal from 'scrollreveal'
import { useRouter } from 'vue-router'

const router = useRouter()

function goToCVPage() {
  router.push('/cv') // le chemin vers ta page CV
}

onMounted(() => {
  new Typed('.typed', {
    strings:['Frontend Developer','UIX Design','Backend Developer'],
    typeSpeed:100, backSpeed:100, backDelay:1000, loop:true
  })
  const sr = ScrollReveal({ reset:true, distance:'80px', duration:2000, delay:200 })
  sr.reveal('.sr-top',   { origin:'top' })
  sr.reveal('.sr-bottom',{ origin:'bottom' })
  sr.reveal('.sr-left',  { origin:'left' })
  sr.reveal('.sr-right', { origin:'right' })

})
</script>

<template>
  <!-- HOME -->
  <section id="home" class="py-16">
    <div class="container grid lg:grid-cols-2 gap-10 items-center">

    <div class="sr-top">
      <h3 class="text-4xl font-bold">Hello, It's Me</h3>
      <h1 class="mt-2 text-7xl font-extrabold">Christian <br>Rapontchombo</h1>
      <h3 class="mt-3 text-4xl font-extrabold">And I'm a <span class="font-extrabold text-main typed"></span></h3>
      <p class="mt-4 text-white/80-4xl font-bold">Passionné par la création d’expériences digitales intuitives et impactantes.
        <br>Du design d’interface au développement technique, je transforme les idées <br> en  solutions concrètes, alliant créativité, précision et sens de l’utilisateur.</p>

      <div class="mt-6 flex gap-4">
        <a href="#" class="w-10 h-10 inline-flex items-center justify-center rounded-full border border-main text-main hover:bg-main hover:text-bg2 transition"><i class='bx bxl-facebook'></i></a>
        <a href="#" class="w-10 h-10 inline-flex items-center justify-center rounded-full border border-main text-main hover:bg-main hover:text-bg2 transition"><i class='bx bxl-twitter'></i></a>
        <a href="#" class="w-10 h-10 inline-flex items-center justify-center rounded-full border border-main text-main hover:bg-main hover:text-bg2 transition"><i class='bx bxl-instagram-alt'></i></a>
        <a href="#" class="w-10 h-10 inline-flex items-center justify-center rounded-full border border-main text-main hover:bg-main hover:text-bg2 transition"><i class='bx bxl-linkedin'></i></a>
      </div>
      <button   @click="goToCVPage" class="inline-block mt-4 px-6 py-2 rounded-full bg-main text-bg2 font-semibold shadow hover:shadow-none" aria-label="Télécharger le CV en PDF">Télecharger CV</button>
    </div>
    <div class="sr-bottom flex justify-center">
      <img src="/images/photo2.jpeg" class="w-[35vw] max-w-md rounded-2xl shadow animate-[float_4s_ease-in-out_infinite]" />
    </div>
    </div>
  </section>
  <!-- Bouton Télécharger -->
  <a
    href="/cv/CV_2025-07-16_Georges_RAPONTCHOMBO.pdf"
    download
    class="inline-flex items-center gap-2 rounded-full bg-sky-600 hover:bg-sky-500 text-white px-4 py-2 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500"
    aria-label="Télécharger le CV en PDF"
  >
    <i class="bx bx-download text-xl"></i>

  </a>
  <!-- ABOUT -->
  <section id="about" class="bg-bg2 text-text py-16">
    <div class="container grid lg:grid-cols-2 gap-10 items-center">

      <!-- Photo avec overlay dégradé -->
      <div class="relative">
        <img src="/images/photocopie1.JPG" alt="Christian Rapontchombo" class="w-full rounded-lg">

        <!-- Overlay sombre en bas de l'image -->
        <div class="absolute inset-x-0 bottom-0 h-20 rounded-b-lg
                  bg-gradient-to-t from-black/70 to-transparent"></div>

        <!-- Nom + rôle par-dessus l'ombre -->
        <div class="absolute bottom-4 left-4">
          <h2 class="text-xl font-bold text-white">
            Georges RAPONTCHOMBO
          </h2>
          <p class="text-sm text-gray-200">
            Développeur Fullstack
          </p>
        </div>
      </div>
      <!-- Texte -->
      <div>
        <h2 class="text-4xl font-bold mb-4">À propos de <span class="text-main">Moi</span></h2>
        <h3 class="text-main text-xl font-medium mb-4">Développeur Fullstack</h3>
        <p class="mb-6 leading-relaxed text-white/80 font-bold">
          Développeur fullstack avec 2 ans d'expérience, spécialisé dans la conception d’applications web modernes et évolutives.
          J’aime relever les défis techniques <br>et proposer des solutions fiables, performantes et centrées sur l’utilisateur.
          <br> Passionné par les technologies web et l’architecture logicielle, je m’investis <br> dans chaque projet avec rigueur et esprit d’équipe.
        </p>

        <!-- Compétences -->
        <h4 class="text-lg font-semibold mb-3">Compétences :</h4>
        <div class="flex flex-wrap gap-2">
          <span class="bg-bg px-3 py-1 rounded-full text-sm">Vue.js</span>
          <span class="bg-bg px-3 py-1 rounded-full text-sm">Node.js</span>
          <span class="bg-bg px-3 py-1 rounded-full text-sm">PostgreSQL</span>
          <span class="bg-bg px-3 py-1 rounded-full text-sm">Prisma</span>
          <span class="bg-bg px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
          <span class="bg-bg px-3 py-1 rounded-full text-sm">TypeScript</span>
        </div>
      </div>

    </div>
  </section>


  <!-- SERVICES -->
  <section id="services" class="py-16">
    <div class="container">
    <h2 class="text-4xl font-bold text-center mb-12">Our <span class="text-main">Services</span></h2>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <article class="text-center rounded-2xl border-4 border-bg bg-bg2 p-8 transition hover:scale-[1.02] hover:border-main">
        <i class='bx bx-code-alt text-main text-7xl'></i>
        <h3 class="mt-4 text-2xl font-semibold">Web Development</h3>
        <p class="mt-3 text-white/80">Lorem ipsum dolor sit amet…</p>
        <a href="#" class="inline-block mt-4 px-5 py-2 rounded-full bg-main text-bg2 font-semibold">Read More</a>
      </article>

      <article class="text-center rounded-2xl border-4 border-bg bg-bg2 p-8 transition hover:scale-[1.02] hover:border-main">
        <i class='bx bxs-paint text-main text-7xl'></i>
        <h3 class="mt-4 text-2xl font-semibold">Graphic Design</h3>
        <p class="mt-3 text-white/80">Lorem ipsum dolor sit amet…</p>
        <a href="#" class="inline-block mt-4 px-5 py-2 rounded-full bg-main text-bg2 font-semibold">Read More</a>
      </article>

      <article class="text-center rounded-2xl border-4 border-bg bg-bg2 p-8 transition hover:scale-[1.02] hover:border-main">
        <i class='bx bx-bar-chart-alt text-main text-7xl'></i>
        <h3 class="mt-4 text-2xl font-semibold">Digital Marketing</h3>
        <p class="mt-3 text-white/80">Lorem ipsum dolor sit amet…</p>
        <a href="#" class="inline-block mt-4 px-5 py-2 rounded-full bg-main text-bg2 font-semibold">Read More</a>
      </article>
    </div>
    </div>
  </section>

  <!-- PORTFOLIO -->
  <section id="portfolio" class="bg-bg2">
    <div class="container">
      <h2 class="text-4xl font-bold text-center mb-10">Latest <span class="text-main">Project</span></h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="relative rounded-2xl overflow-hidden shadow sr-bottom" v-for="n in 6" :key="n">
          <img :src="`/images/portfolio${n}.jpg`" class="w-full h-full object-cover transition duration-300 hover:scale-110" />
          <div class="absolute inset-0 bg-gradient-to-t from-main/90 to-black/10 opacity-0 hover:opacity-100 transition flex flex-col items-center justify-center text-center p-4">
            <h4 class="text-2xl font-semibold">Web Design</h4>
            <p class="mt-4 text-sm">Lorem ipsum dolor sit amet…</p>
            <a href="#" class="mt-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-bg2">
              <i class='bx bx-link-external text-2xl'></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTACT -->
  <section id="contact" class="container mx-auto px-4 py-16">
    <h2 class="text-4xl font-bold text-center mb-10">Contact <span class="text-main">Me!</span></h2>
    <form class="max-w-3xl mx-auto text-center space-y-4 sr-bottom" @submit.prevent>
      <div class="flex gap-4 flex-col sm:flex-row">
        <input class="flex-1 rounded-lg bg-bg2 px-4 py-3" placeholder="Full name" />
        <input type="email" class="flex-1 rounded-lg bg-bg2 px-4 py-3" placeholder="Email Address" />
      </div>
      <div class="flex gap-4 flex-col sm:flex-row">
        <input type="number" class="flex-1 rounded-lg bg-bg2 px-4 py-3" placeholder="Mobile Number" />
        <input class="flex-1 rounded-lg bg-bg2 px-4 py-3" placeholder="Email Subject" />
      </div>
      <textarea rows="6" class="w-full rounded-lg bg-bg2 px-4 py-3" placeholder="Your Message"></textarea>
      <button class="mt-2 px-6 py-2 rounded-full bg-main text-bg2 font-semibold">Send Message</button>
    </form>
  </section>


</template>

<style>
@keyframes float{0%{transform:translateY(0)}50%{transform:translateY(-2.4rem)}100%{transform:translateY(0)}}
.animate-\[float_4s_ease-in-out_infinite\]{animation:float 4s ease-in-out infinite}
</style>
