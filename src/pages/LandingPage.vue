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

// Configuration EmailJS
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_xhno7uf'
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_rq4fagd'
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'vMLIMZTnKhBXZA88u'

onMounted(() => {
  new Typed('.typed', {
    strings: ['Frontend Developer', 'UIX Design', 'Backend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  })
  const sr = ScrollReveal({ reset: true, distance: '80px', duration: 2000, delay: 200 })
  sr.reveal('.sr-top', { origin: 'top' })
  sr.reveal('.sr-bottom', { origin: 'bottom' })
  sr.reveal('.sr-left', { origin: 'left' })
  sr.reveal('.sr-right', { origin: 'right' })
})

const form = ref({ name: '', email: '', service: '', message: '', honey: '' })
const sending = ref(false)
const success = ref(false)
const errorMsg = ref('')

const services = [
  { value: '', label: 'Sélectionnez un service (optionnel)' },
  { value: 'site-vitrine', label: 'Sites Vitrine' },
  { value: 'app-web', label: 'Applications Web sur Mesure' },
  { value: 'ui-ux', label: 'UI/UX Design & Maquettage' },
  { value: 'formation-office', label: 'Formation Pack Office' },
  { value: 'installation-office', label: 'Installation Pack Office' },
  { value: 'logo-carte', label: 'Conception de Logos & Cartes de Visite' },
  { value: 'autre', label: 'Autre / Message général' },
]

const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v || '')

const onSubmit = async () => {
  errorMsg.value = ''

  // Protection anti-spam (honeypot)
  if (form.value.honey) return

  // Validation des champs requis
  if (!form.value.name || !form.value.email || !form.value.message) {
    errorMsg.value = 'Veuillez remplir tous les champs obligatoires.'
    return
  }

  // Validation format email
  if (!emailOk(form.value.email)) {
    errorMsg.value = "Le format de l'email n'est pas valide."
    return
  }

  // ✉️ Envoi via EmailJS
  sending.value = true
  try {
    const selectedService = services.find((s) => s.value === form.value.service)
    const serviceLabel =
      selectedService && selectedService.value ? selectedService.label : 'Message général'

    // Paramètres pour le template EmailJS
    const templateParams = {
      from_name: form.value.name,
      from_email: form.value.email,
      service: serviceLabel,
      message: form.value.message,
      to_name: 'Georges RAPONTCHOMBO',
    }

    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)

    success.value = true
    form.value = { name: '', email: '', service: '', message: '', honey: '' }
    setTimeout(() => {
      success.value = false
    }, 5000)
  } catch (e) {
    console.error('Erreur EmailJS:', e)
    errorMsg.value = "L'envoi a échoué. Veuillez réessayer plus tard ou nous contacter directement."
  } finally {
    sending.value = false
  }
}
</script>

<template>
  <!-- HOME -->
  <section id="home" class="py-16 sm:py-20 md:py-24">
    <div
      class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center"
    >
      <div class="sr-top text-center lg:text-left">
        <h3 class="text-xl sm:text-2xl md:text-3xl font-bold">hey !, It's Me</h3>

        <h1
          class="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight"
        >
          Georges <br class="hidden sm:block" />
          RAPONTCHOMBO
        </h1>

        <h3 class="mt-3 text-xl sm:text-2xl md:text-3xl font-extrabold">
          And I'm a <span class="font-extrabold text-main typed"></span>
        </h3>

        <p
          class="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-text opacity-80 max-w-prose mx-auto lg:mx-0 text-justify hyphens-auto leading-relaxed"
        >
          Passionné par la création d'expériences digitales intuitives et impactantes. Du design
          d'interface au développement technique, je transforme les idées en solutions concrètes,
          alliant créativité, précision et sens de l'utilisateur.
        </p>
        <div class="mt-6 sm:mt-8 flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
          <!-- Facebook -->
          <a
            href="https://www.facebook.com/share/1CTtwvfYNd/"
            aria-label="Facebook"
            class="relative group w-10 h-10 inline-flex items-center justify-center rounded-full border border-main text-main overflow-visible transition duration-200 transform hover:-translate-y-0.5 group-hover:border-transparent group-hover:text-bg2"
          >
            <!-- remplissage -->
            <span
              class="absolute inset-0 rounded-full bg-main opacity-0 scale-90 transition duration-200 group-hover:opacity-100 group-hover:scale-100"
            ></span>
            <!-- glow near -->
            <span
              class="pointer-events-none absolute -inset-1 rounded-full bg-main/60 blur-md opacity-0 transition duration-200 group-hover:opacity-100"
            ></span>
            <!-- glow wide -->
            <span
              class="pointer-events-none absolute -inset-3 rounded-full bg-main/30 blur-xl opacity-0 transition duration-200 group-hover:opacity-100"
            ></span>
            <i class="bx bxl-facebook text-lg relative z-10"></i>
          </a>

          <!-- Twitter / X -->
          <a
            href="https://x.com/Georges2kr"
            aria-label="Twitter"
            class="relative group w-10 h-10 inline-flex items-center justify-center rounded-full border border-main text-main overflow-visible transition duration-200 transform hover:-translate-y-0.5 group-hover:border-transparent group-hover:text-bg2"
          >
            <span
              class="absolute inset-0 rounded-full bg-main opacity-0 scale-90 transition duration-200 group-hover:opacity-100 group-hover:scale-100"
            ></span>
            <span
              class="pointer-events-none absolute -inset-1 rounded-full bg-main/60 blur-md opacity-0 transition duration-200 group-hover:opacity-100"
            ></span>
            <span
              class="pointer-events-none absolute -inset-3 rounded-full bg-main/30 blur-xl opacity-0 transition duration-200 group-hover:opacity-100"
            ></span>
            <i class="bx bxl-twitter text-lg relative z-10"></i>
          </a>

          <!-- GitHub -->
          <a
            href="https://github.com/RG-christian"
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
            class="relative group w-10 h-10 inline-flex items-center justify-center rounded-full border border-main text-main overflow-visible transition duration-200 transform hover:-translate-y-0.5 group-hover:border-transparent group-hover:text-bg2"
          >
            <!-- remplissage -->
            <span
              class="absolute inset-0 rounded-full bg-main opacity-0 scale-90 transition duration-200 group-hover:opacity-100 group-hover:scale-100"
            ></span>
            <!-- glow near -->
            <span
              class="pointer-events-none absolute -inset-1 rounded-full bg-main/60 blur-md opacity-0 transition duration-200 group-hover:opacity-100"
            ></span>
            <!-- glow wide -->
            <span
              class="pointer-events-none absolute -inset-3 rounded-full bg-main/30 blur-xl opacity-0 transition duration-200 group-hover:opacity-100"
            ></span>

            <i class="bx bxl-github text-lg relative z-10"></i>
          </a>

          <!-- LinkedIn -->
          <a
            href="https://www.linkedin.com/in/christianrapo/?originalSubdomain=ga"
            aria-label="LinkedIn"
            class="relative group w-10 h-10 inline-flex items-center justify-center rounded-full border border-main text-main overflow-visible transition duration-200 transform hover:-translate-y-0.5 group-hover:border-transparent group-hover:text-bg2"
          >
            <span
              class="absolute inset-0 rounded-full bg-main opacity-0 scale-90 transition duration-200 group-hover:opacity-100 group-hover:scale-100"
            ></span>
            <span
              class="pointer-events-none absolute -inset-1 rounded-full bg-main/60 blur-md opacity-0 transition duration-200 group-hover:opacity-100"
            ></span>
            <span
              class="pointer-events-none absolute -inset-3 rounded-full bg-main/30 blur-xl opacity-0 transition duration-200 group-hover:opacity-100"
            ></span>
            <i class="bx bxl-linkedin text-lg relative z-10"></i>
          </a>
        </div>

        <button
          @click="goToCVPage"
          class="mt-8 sm:mt-10 relative group inline-flex items-center justify-center px-6 sm:px-8 py-3 rounded-full bg-main text-bg2 font-semibold transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-main/40 text-sm sm:text-base"
        >
          <span class="relative z-10">Download CV</span>

          <!-- glow soft (réduit) -->
          <span
            class="pointer-events-none absolute -inset-1 rounded-full bg-main/35 blur-md"
          ></span>
          <span
            class="pointer-events-none absolute -inset-2 rounded-full bg-main/20 blur-xl"
          ></span>

          <!-- glow hover -->
          <span
            class="pointer-events-none absolute -inset-1 rounded-full bg-main/60 blur-lg opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          ></span>
          <span
            class="pointer-events-none absolute -inset-2 rounded-full bg-main/35 blur-2xl opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          ></span>
        </button>
      </div>
      <div class="sr-bottom flex justify-center mt-8 lg:mt-0">
        <img
          src="/images/image_2.png"
          class="w-48 sm:w-56 md:w-72 lg:w-[35vw] max-w-full rounded-2xl shadow-lg animate-[float_4s_ease-in-out_infinite]"
          alt="Georges Rapontchombo"
        />
      </div>
    </div>
  </section>
  <!-- ABOUT -->
  <section id="about" class="bg-bg2 text-text py-16 sm:py-20 md:py-24">
    <div
      class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center"
    >
      <!-- Photo avec overlay dégradé -->
      <div class="relative max-w-sm sm:max-w-md mx-auto">
        <img
          src="/images/image_1.png"
          alt="Christian Rapontchombo"
          class="w-full rounded-lg shadow-lg"
        />
        <div
          class="absolute inset-x-0 bottom-0 h-20 rounded-b-lg bg-gradient-to-t from-black/70 to-transparent"
        ></div>
        <div class="absolute bottom-4 left-4">
          <h2 class="text-lg sm:text-xl font-bold text-white">Georges RAPONTCHOMBO</h2>
          <p class="text-xs sm:text-sm text-gray-200">Développeur Fullstack</p>
        </div>
      </div>
      <!-- Texte -->
      <div class="text-center lg:text-left mt-10 lg:mt-0">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          À propos de <span class="text-main">Moi</span>
        </h2>
        <h3 class="text-main text-base sm:text-lg md:text-xl font-medium mb-4">
          Développeur Fullstack
        </h3>

        <p
          class="mb-6 text-sm sm:text-base md:text-lg leading-relaxed text-text opacity-80 max-w-prose mx-auto lg:mx-0 text-justify hyphens-auto"
        >
          Développeur fullstack avec 2 ans d'expérience, spécialisé dans la conception
          d’applications web modernes et évolutives. J’aime relever les défis techniques et proposer
          des solutions fiables, performantes et centrées sur l’utilisateur. Passionné par les
          technologies web et l’architecture logicielle, je m’investis dans chaque projet avec
          rigueur et esprit d’équipe.
        </p>

        <h4 class="text-base sm:text-lg font-semibold mb-3">Compétences :</h4>
        <div class="flex flex-wrap justify-center lg:justify-start gap-2">
          <span class="bg-bg px-3 py-1.5 rounded-full text-xs sm:text-sm">Vue.js</span>
          <span class="bg-bg px-3 py-1.5 rounded-full text-xs sm:text-sm">Node.js</span>
          <span class="bg-bg px-3 py-1.5 rounded-full text-xs sm:text-sm">PostgreSQL</span>
          <span class="bg-bg px-3 py-1.5 rounded-full text-xs sm:text-sm">Prisma</span>
          <span class="bg-bg px-3 py-1.5 rounded-full text-xs sm:text-sm">Tailwind CSS</span>
          <span class="bg-bg px-3 py-1.5 rounded-full text-xs sm:text-sm">TypeScript</span>
        </div>
      </div>
    </div>
  </section>

  <!-- SERVICES -->
  <section id="services" class="py-16 sm:py-20 md:py-24">
    <div class="container mx-auto max-w-7xl px-4 sm:px-6">
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-12">
        Mes <span class="text-main">Services</span>
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        <article
          class="text-center rounded-2xl border-2 sm:border-4 border-bg bg-bg2 p-5 sm:p-6 md:p-8 transition hover:scale-[1.02] hover:border-main"
        >
          <i class="bx bx-code-alt text-main text-4xl sm:text-5xl md:text-6xl"></i>
          <h3 class="mt-3 sm:mt-4 text-lg sm:text-xl md:text-2xl font-semibold">Sites Vitrine</h3>
          <p
            class="mt-2 sm:mt-3 text-text opacity-80 text-xs sm:text-sm md:text-base text-justify hyphens-auto leading-relaxed"
          >
            Conception de sites web modernes, responsives et optimisés pour mettre en valeur votre
            activité. Idéal pour présenter vos services, votre entreprise ou vos produits de manière
            professionnelle.
          </p>
        </article>

        <!-- Service 2 -->
        <article
          class="text-center rounded-2xl border-2 sm:border-4 border-bg bg-bg2 p-5 sm:p-6 md:p-8 transition hover:scale-[1.02] hover:border-main"
        >
          <i class="bx bx-devices text-main text-4xl sm:text-5xl md:text-6xl"></i>
          <h3 class="mt-3 sm:mt-4 text-lg sm:text-xl md:text-2xl font-semibold">
            Applications Web sur Mesure
          </h3>
          <p
            class="mt-2 sm:mt-3 text-text opacity-80 text-xs sm:text-sm md:text-base text-justify hyphens-auto leading-relaxed"
          >
            Développement d'applications web interactives et performantes adaptées à vos besoins
            spécifiques. Solutions personnalisées avec des fonctionnalités avancées pour booster
            votre productivité.
          </p>
        </article>

        <!-- Service 3 -->
        <article
          class="text-center rounded-2xl border-2 sm:border-4 border-bg bg-bg2 p-5 sm:p-6 md:p-8 transition hover:scale-[1.02] hover:border-main"
        >
          <i class="bx bxs-paint text-main text-4xl sm:text-5xl md:text-6xl"></i>
          <h3 class="mt-3 sm:mt-4 text-lg sm:text-xl md:text-2xl font-semibold">
            UI/UX Design & Maquettage
          </h3>
          <p
            class="mt-2 sm:mt-3 text-text opacity-80 text-xs sm:text-sm md:text-base text-justify hyphens-auto leading-relaxed"
          >
            Création de maquettes modernes et ergonomiques pour vos projets web. Un design intuitif
            et esthétique pour offrir une expérience utilisateur optimale.
          </p>
        </article>

        <!-- Service 4 -->
        <article
          class="text-center rounded-2xl border-2 sm:border-4 border-bg bg-bg2 p-5 sm:p-6 md:p-8 transition hover:scale-[1.02] hover:border-main"
        >
          <i class="bx bxs-file-doc text-main text-4xl sm:text-5xl md:text-6xl"></i>
          <h3 class="mt-3 sm:mt-4 text-lg sm:text-xl md:text-2xl font-semibold">
            Formation Pack Office
          </h3>
          <p
            class="mt-2 sm:mt-3 text-text opacity-80 text-xs sm:text-sm md:text-base text-justify hyphens-auto leading-relaxed"
          >
            Maîtrisez les outils essentiels de Microsoft Office : Word pour la rédaction
            professionnelle, Excel pour l'analyse de données et PowerPoint pour des présentations
            percutantes. Formation adaptée à tous les niveaux.
          </p>
        </article>

        <!-- Service 5 -->
        <article
          class="text-center rounded-2xl border-2 sm:border-4 border-bg bg-bg2 p-5 sm:p-6 md:p-8 transition hover:scale-[1.02] hover:border-main"
        >
          <i class="bx bx-download text-main text-4xl sm:text-5xl md:text-6xl"></i>
          <h3 class="mt-3 sm:mt-4 text-lg sm:text-xl md:text-2xl font-semibold">
            Installation Pack Office
          </h3>
          <p
            class="mt-2 sm:mt-3 text-text opacity-80 text-xs sm:text-sm md:text-base text-justify hyphens-auto leading-relaxed"
          >
            Installation complète et configuration de Microsoft Office sur votre ordinateur. Service
            rapide et professionnel incluant l'activation, la mise à jour et la personnalisation
            selon vos besoins.
          </p>
        </article>

        <!-- Service 6 -->
        <article
          class="text-center rounded-2xl border-2 sm:border-4 border-bg bg-bg2 p-5 sm:p-6 md:p-8 transition hover:scale-[1.02] hover:border-main"
        >
          <i class="bx bx-palette text-main text-4xl sm:text-5xl md:text-6xl"></i>
          <h3 class="mt-3 sm:mt-4 text-lg sm:text-xl md:text-2xl font-semibold">
            Conception de Logos & Cartes de Visite
          </h3>
          <p
            class="mt-2 sm:mt-3 text-text opacity-80 text-xs sm:text-sm md:text-base text-justify hyphens-auto leading-relaxed"
          >
            Création d'identités visuelles uniques et professionnelles. Des logos mémorables et des
            cartes de visite impactantes qui reflètent votre image de marque et captivent votre
            audience.
          </p>
        </article>
      </div>
    </div>
  </section>

  <!-- PORTFOLIO -->
  <section id="portfolio" class="bg-bg2 py-16 sm:py-20 md:py-24">
    <div class="container mx-auto max-w-7xl px-4 sm:px-6">
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-12">
        Latest <span class="text-main">Project</span>
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        <!-- Projet 1: SING Fusion -->
        <div
          class="relative rounded-2xl overflow-hidden shadow sr-bottom aspect-[4/3] group cursor-pointer"
        >
          <img
            src="/images/sing-fusion.png"
            alt="SING Fusion"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-3 sm:p-4 text-white"
          >
            <h4 class="text-lg sm:text-xl md:text-2xl font-semibold mb-2">SING Fusion</h4>
            <p class="mt-2 sm:mt-4 text-xs sm:text-sm leading-relaxed">
              Plateforme interne de digitalisation du processus d'intégration des nouveaux
              collaborateurs avec modules interactifs et chatbot.
            </p>
            <a
              href="https://sing-fusion.pivot40.tech"
              target="_blank"
              rel="noopener"
              class="mt-3 sm:mt-4 inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-main text-white hover:bg-white hover:text-main transition-all duration-300 transform hover:scale-110"
            >
              <i class="bx bx-link-external text-xl sm:text-2xl"></i>
            </a>
          </div>
        </div>

        <!-- Projet 2: Guichet Numérique FPBG -->
        <div
          class="relative rounded-2xl overflow-hidden shadow sr-bottom aspect-[4/3] group cursor-pointer"
        >
          <img
            src="/images/FPBG.png"
            alt="Guichet Numérique FPBG"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-3 sm:p-4 text-white"
          >
            <h4 class="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Guichet Numérique FPBG
            </h4>
            <p class="mt-2 sm:mt-4 text-xs sm:text-sm leading-relaxed">
              Plateforme de guichet numérique des appels à projet permettant aux porteurs de projet
              de soumettre leurs projets.
            </p>
            <a
              href="https://guichetnumerique.fpbg.ga"
              target="_blank"
              rel="noopener"
              class="mt-3 sm:mt-4 inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-main text-white hover:bg-white hover:text-main transition-all duration-300 transform hover:scale-110"
            >
              <i class="bx bx-link-external text-xl sm:text-2xl"></i>
            </a>
          </div>
        </div>

        <!-- Projet 3: DevGroup -->
        <div
          class="relative rounded-2xl overflow-hidden shadow sr-bottom aspect-[4/3] group cursor-pointer"
        >
          <img
            src="/images/DevGroup.png"
            alt="DevGroup"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-3 sm:p-4 text-white"
          >
            <h4 class="text-lg sm:text-xl md:text-2xl font-semibold mb-2">DevGroup Africa</h4>
            <p class="mt-2 sm:mt-4 text-xs sm:text-sm leading-relaxed">
              Agence de développement digital proposant des solutions numériques sur mesure :
              développement web, e-commerce, applications mobiles et intelligence économique.
            </p>
            <a
              href="https://devgroup.ga"
              target="_blank"
              rel="noopener"
              class="mt-3 sm:mt-4 inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-main text-white hover:bg-white hover:text-main transition-all duration-300 transform hover:scale-110"
            >
              <i class="bx bx-link-external text-xl sm:text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTACT -->
  <section id="contact" class="py-16 sm:py-20 md:py-24">
    <div class="container mx-auto max-w-7xl px-4 sm:px-6">
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-12">Contact</h2>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <!-- =================== GAUCHE : Coordonnées =================== -->
        <div class="space-y-6 sm:space-y-8">
          <h3 class="text-xl sm:text-2xl font-semibold">Nos Coordonnées</h3>

          <!-- Email -->
          <div class="flex items-start gap-3 sm:gap-4">
            <div
              class="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0"
            >
              <i class="bx bx-envelope text-xl sm:text-2xl text-main"></i>
            </div>
            <div class="min-w-0">
              <p class="font-semibold text-sm sm:text-base">Email</p>
              <p class="text-text opacity-80 text-xs sm:text-sm break-words">
                georges.rapontchombo@sing.ga
              </p>
              <a
                href="mailto:georges.rapontchombo@sing.ga"
                class="text-main text-xs sm:text-sm hover:underline"
              >
                Envoyez‑nous un email
              </a>
            </div>
          </div>

          <!-- Téléphone -->
          <div class="flex items-start gap-3 sm:gap-4">
            <div
              class="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0"
            >
              <i class="bx bx-phone text-xl sm:text-2xl text-main"></i>
            </div>
            <div>
              <p class="font-semibold text-sm sm:text-base">Téléphone</p>
              <p class="text-text opacity-80 text-xs sm:text-sm">074120408</p>
              <a href="tel:074120408" class="text-main text-xs sm:text-sm hover:underline">
                Appelez‑nous
              </a>
            </div>
          </div>

          <!-- Adresse -->
          <div class="flex items-start gap-3 sm:gap-4">
            <div
              class="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0"
            >
              <i class="bx bx-map text-xl sm:text-2xl text-main"></i>
            </div>
            <div>
              <p class="font-semibold text-sm sm:text-base">Adresse</p>
              <p class="text-text opacity-80 text-xs sm:text-sm">Avenue Denis RAPONTCHOMBO</p>
              <a
                class="text-main text-xs sm:text-sm hover:underline"
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
        <div class="rounded-2xl border border-border p-5 sm:p-6 bg-bg2 mt-6 lg:mt-0">
          <h3 class="text-base sm:text-lg md:text-xl font-semibold mb-4">
            Envoyez-nous un message
          </h3>

          <!-- Succès -->
          <div v-if="success" class="rounded-lg bg-green-900/60 text-green-200 px-3 sm:px-4 py-3">
            <p class="font-semibold text-sm sm:text-base">Message envoyé avec succès !</p>
            <p class="text-xs sm:text-sm opacity-90">
              Nous vous répondrons dans les plus brefs délais.
            </p>
          </div>

          <!-- Form -->
          <form v-else @submit.prevent="onSubmit" class="space-y-4" aria-live="polite">
            <div>
              <label class="block text-xs sm:text-sm mb-1">Nom complet</label>
              <input
                v-model.trim="form.name"
                :disabled="sending"
                class="w-full rounded-lg bg-bg border border-border px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-main"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label class="block text-xs sm:text-sm mb-1">Email</label>
              <input
                v-model.trim="form.email"
                type="email"
                :disabled="sending"
                class="w-full rounded-lg bg-bg border border-border px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-main"
                placeholder="votre.email@exemple.com"
              />
            </div>

            <div>
              <label class="block text-xs sm:text-sm mb-1">Service concerné</label>
              <select
                v-model="form.service"
                :disabled="sending"
                class="w-full rounded-lg bg-bg border border-border px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-main cursor-pointer"
              >
                <option v-for="service in services" :key="service.value" :value="service.value">
                  {{ service.label }}
                </option>
              </select>
            </div>

            <!-- Honeypot anti-spam (caché) -->
            <div class="hidden" aria-hidden="true">
              <input type="text" v-model="form.honey" tabindex="-1" autocomplete="off" />
            </div>

            <div>
              <label class="block text-xs sm:text-sm mb-1">Message</label>
              <textarea
                v-model.trim="form.message"
                rows="5"
                :disabled="sending"
                class="w-full rounded-lg bg-bg border border-border px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-main resize-none"
                placeholder="Décrivez votre projet ou votre demande..."
              ></textarea>
            </div>

            <p v-if="errorMsg" class="text-red-400 text-xs sm:text-sm">{{ errorMsg }}</p>

            <button
              type="submit"
              :disabled="sending"
              class="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-main text-bg2 font-semibold px-4 py-2.5 sm:py-3 text-sm sm:text-base disabled:opacity-60 hover:opacity-90 transition"
            >
              <template v-if="!sending">Envoyer le message</template>
              <template v-else>
                <span
                  class="h-4 w-4 sm:h-5 sm:w-5 border-2 border-bg2/50 border-t-transparent rounded-full animate-spin"
                ></span>
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
@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-2.4rem);
  }
  100% {
    transform: translateY(0);
  }
}
.animate-\[float_4s_ease-in-out_infinite\] {
  animation: float 4s ease-in-out infinite;
}
</style>
