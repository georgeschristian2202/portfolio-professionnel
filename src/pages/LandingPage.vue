<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'
import Typed from 'typed.js'
import ScrollReveal from 'scrollreveal'
import { useRouter } from 'vue-router'
import emailjs from '@emailjs/browser'


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


const form = ref({ name: '', email: '', message: '', honey: '' })
const sending = ref(false)
const success = ref(false)
const errorMsg = ref('')

const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v || '')

const onSubmit = async () => {
  errorMsg.value = ''
  if (form.value.honey) return
  if (!form.value.name || !form.value.email || !form.value.message) {
    errorMsg.value = 'Veuillez remplir tous les champs.'
    return
  }
  if (!emailOk(form.value.email)) {
    errorMsg.value = "L'email saisi n'est pas valide."
    return
  }

  sending.value = true
  try {
    const r = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.value.name,
        email: form.value.email,
        message: form.value.message,
        subject: 'Contact Portfolio'
      })
    })
    if (!r.ok) throw new Error(await r.text())
    success.value = true
    form.value = { name: '', email: '', message: '', honey: '' }
    setTimeout(() => { success.value = false }, 5000)
  } catch (e) {
    console.error(e)
    errorMsg.value = "L'envoi a échoué. Réessayez plus tard."
  } finally {
    sending.value = false
  }
}
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
      <h2 class="text-4xl font-bold text-center mb-12">
        Nos <span class="text-main">Services</span>
      </h2>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <!-- Service 1 -->
        <article class="text-center rounded-2xl border-4 border-bg bg-bg2 p-8 transition hover:scale-[1.02] hover:border-main">
          <i class='bx bx-code-alt text-main text-7xl'></i>
          <h3 class="mt-4 text-2xl font-semibold">Sites Vitrine</h3>
          <p class="mt-3 text-white/80">
            Conception de sites web modernes, responsives et optimisés pour mettre en valeur votre activité.
            Idéal pour présenter vos services, votre entreprise ou vos produits de manière professionnelle.
          </p>
        </article>

        <!-- Service 2 -->
        <article class="text-center rounded-2xl border-4 border-bg bg-bg2 p-8 transition hover:scale-[1.02] hover:border-main">
          <i class='bx bx-devices text-main text-7xl'></i>
          <h3 class="mt-4 text-2xl font-semibold">Applications Web sur Mesure</h3>
          <p class="mt-3 text-white/80">
            Développement d'applications web interactives et performantes adaptées à vos besoins spécifiques.
            Solutions personnalisées avec des fonctionnalités avancées pour booster votre productivité.
          </p>
        </article>

        <!-- Service 3 -->
        <article class="text-center rounded-2xl border-4 border-bg bg-bg2 p-8 transition hover:scale-[1.02] hover:border-main">
          <i class='bx bxs-paint text-main text-7xl'></i>
          <h3 class="mt-4 text-2xl font-semibold">UI/UX Design & Maquettage</h3>
          <p class="mt-3 text-white/80">
            Création de maquettes modernes et ergonomiques pour vos projets web.
            Un design intuitif et esthétique pour offrir une expérience utilisateur optimale.
          </p>
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
  <section id="contact" class="py-16">
    <div class="container">
      <h2 class="text-4xl font-bold text-center mb-10">
        Contact <span class="text-main">Nous</span>
      </h2>

      <div class="grid lg:grid-cols-2 gap-8">
        <!-- =================== GAUCHE : Coordonnées =================== -->
        <div class="space-y-8">
          <h3 class="text-2xl font-semibold">Nos Coordonnées</h3>

          <!-- Email -->
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
              <i class="bx bx-envelope text-2xl text-main"></i>
            </div>
            <div>
              <p class="font-semibold">Email</p>
              <p class="text-white/80">devgroupentreprise@gmail.com</p>
              <a href="mailto:devgroupentreprise@gmail.com" class="text-main text-sm">
                Envoyez‑nous un email
              </a>
            </div>
          </div>

          <!-- Téléphone -->
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
              <i class="bx bx-phone text-2xl text-main"></i>
            </div>
            <div>
              <p class="font-semibold">Téléphone</p>
              <p class="text-white/80">+241 074 60 43 27</p>
              <a href="tel:+241074604327" class="text-main text-sm">
                Appelez‑nous
              </a>
            </div>
          </div>

          <!-- Adresse -->
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
              <i class="bx bx-map text-2xl text-main"></i>
            </div>
            <div>
              <p class="font-semibold">Adresse</p>
              <p class="text-white/80">Avenue Denis RAPONTCHOMBO</p>
              <a
                class="text-main text-sm"
                href="https://www.google.com/maps/search/?api=1&query=Avenue%20Denis%20RAPONTCHOMBO"
                target="_blank"
                rel="noopener"
              >
                Voir sur la carte
              </a>
            </div>
          </div>
        </div>

        <!-- =================== DROITE : Formulaire =================== -->
        <div class="rounded-2xl border border-white/10 p-6">
          <h3 class="text-xl font-semibold mb-4">Envoyez‑nous un message</h3>

          <!-- Succès -->
          <div
            v-if="success"
            class="rounded-lg bg-green-900/60 text-green-200 px-4 py-3"
          >
            <p class="font-semibold">Message envoyé avec succès !</p>
            <p class="text-sm opacity-90">
              Nous vous répondrons dans les plus brefs délais.
            </p>
          </div>

          <!-- Form -->
          <form v-else @submit.prevent="onSubmit" class="space-y-4" aria-live="polite">
            <div>
              <label class="block text-sm mb-1">Nom complet</label>
              <input
                v-model.trim="form.name"
                :disabled="sending"
                class="w-full rounded-lg bg-bg2 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-main"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label class="block text-sm mb-1">Email</label>
              <input
                v-model.trim="form.email"
                type="email"
                :disabled="sending"
                class="w-full rounded-lg bg-bg2 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-main"
                placeholder="votre.email@exemple.com"
              />
            </div>

            <div>
              <label class="block text-sm mb-1">Message</label>
              <textarea
                v-model.trim="form.message"
                rows="6"
                :disabled="sending"
                class="w-full rounded-lg bg-bg2 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-main"
                placeholder="Comment pouvons‑nous vous aider ?"
              ></textarea>
            </div>

            <p v-if="errorMsg" class="text-red-400 text-sm">{{ errorMsg }}</p>

            <button
              type="submit"
              :disabled="sending"
              class="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-main text-bg2 font-semibold px-4 py-3 disabled:opacity-60"
            >
              <template v-if="!sending">Envoyer le message</template>
              <template v-else>
                <span class="h-5 w-5 border-2 border-bg2/50 border-t-transparent rounded-full animate-spin"></span>
                Envoi en cours…
              </template>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>

</template>

<style>
@keyframes float{0%{transform:translateY(0)}50%{transform:translateY(-2.4rem)}100%{transform:translateY(0)}}
.animate-\[float_4s_ease-in-out_infinite\]{animation:float 4s ease-in-out infinite}
</style>
