<script setup>
import { ref, nextTick } from 'vue'

const showPwModal = ref(false)
const pwd = ref('')
const err = ref('')

// Mot de passe (env > fallback)
const CORRECT_PW = import.meta.env.VITE_CV_PW ?? 'RAPO2025'
const PDF_PATH = '/cv/CV_2025-07-16_Georges_RAPONTCHOMBO.pdf'
const PDF_NAME = 'CV_2025-07-16_Georges_RAPONTCHOMBO.pdf'

function openPwModal() {
  err.value = ''
  pwd.value = ''
  showPwModal.value = true
  nextTick(() => document.getElementById('pw-input')?.focus())
}
function closePwModal() {
  showPwModal.value = false
  pwd.value = ''
  err.value = ''
}
function downloadNow() {
  const a = document.createElement('a')
  a.href = PDF_PATH
  a.download = PDF_NAME
  document.body.appendChild(a)
  a.click()
  a.remove()
}
function submitPw() {
  if (pwd.value === CORRECT_PW) {
    closePwModal()
    downloadNow()
  } else {
    err.value = 'Mot de passe incorrect.'
  }
}
</script>

<template>
  <section class="bg-gray-100 text-gray-900 py-10">
    <div class="container max-w-6xl">
      <!-- Bouton retour -->
      <div class="mb-6">
        <RouterLink to="/" class="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
          <i class="bx bx-left-arrow-alt text-lg"></i> Retour au portfolio
        </RouterLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Colonne gauche -->
        <aside class="bg-gray-900 text-white rounded-xl p-6 space-y-6">
          <!-- Photo + nom + titre -->
          <div class="text-center">
            <img src="/images/photo2.jpeg" alt="Georges Rapontchombo"
                 class="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg">
            <h2 class="text-xl font-bold mt-4">Georges RAPONTCHOMBO</h2>
            <p class="text-main font-medium">Développeur Web Junior</p>
          </div>

          <!-- Infos perso -->
          <div class="text-sm space-y-2">
            <div class="flex items-start gap-2"><i class="bx bx-flag text-main text-lg"></i><span>Gabonais</span></div>
            <div class="flex items-start gap-2"><i class="bx bx-envelope text-main text-lg"></i><span>georgesrapontchombo22@gmail.com</span></div>
            <div class="flex items-start gap-2"><i class="bx bx-map text-main text-lg"></i><span>Class, Estuaire Libreville</span></div>
            <div class="flex items-start gap-2"><i class="bx bx-phone text-main text-lg"></i><span>+241 74 12 04 08</span></div>
          </div>

          <!-- Langues -->
          <section>
            <h3 class="text-lg font-semibold border-l-4 border-main pl-2 mb-2">Langues</h3>
            <ul class="text-sm space-y-1">
              <li>Français — Langue maternelle</li>
              <li>Anglais — B1 (vocabulaire technique)</li>
            </ul>
          </section>

          <!-- Atouts -->
          <section>
            <h3 class="text-lg font-semibold border-l-4 border-main pl-2 mb-2">Atouts</h3>
            <ul class="list-disc list-inside text-sm space-y-1">
              <li>Suivi et organisation de projet</li>
              <li>Planification</li>
              <li>Communication & coordination</li>
            </ul>
          </section>

          <!-- Centres d’intérêt -->
          <section>
            <h3 class="text-lg font-semibold border-l-4 border-main pl-2 mb-2">Centres d’intérêt</h3>
            <ul class="text-sm space-y-1">
              <li>Football</li>
              <li>Taekwondo</li>
            </ul>
          </section>

          <!-- Outils pro -->
          <section>
            <h3 class="text-lg font-semibold border-l-4 border-main pl-2 mb-2">Outils Professionnels</h3>
            <ul class="list-disc list-inside text-sm space-y-1">
              <li>Vue.js, Tailwind CSS, Node.js, PostgreSQL</li>
              <li>Suite JetBrains, Git &amp; GitHub, FileZilla</li>
              <li>Adobe XD, Canva</li>
            </ul>
          </section>

          <!-- Veille -->
          <section>
            <h3 class="text-lg font-semibold border-l-4 border-main pl-2 mb-2">Veille Informatique</h3>
            <ul class="list-disc list-inside text-sm space-y-1">
              <li>IA</li>
              <li>Réseaux</li>
              <li>Référencement</li>
            </ul>
          </section>
        </aside>

        <!-- Colonne droite -->
        <main class="md:col-span-2 bg-white rounded-xl p-6 space-y-8">
          <!-- En-tête -->
          <!-- En-tête : Nom + Rôle + bouton Télécharger à droite -->
          <header class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
            <!-- Nom + Rôle -->
            <div>
              <h1 class="text-2xl font-extrabold text-gray-900">Georges RAPONTCHOMBO</h1>
              <p class="text-sky-600 font-medium">Développeur Web Junior</p>
            </div>


          </header>


          <!-- Profil -->
          <section>
            <h2 class="text-xl font-semibold border-b-2 border-sky-400 pb-2 mb-4">Profil</h2>
            <p class="text-gray-700 leading-relaxed">
              Étudiant en troisième année spécialisé dans le développement web, je mets à profit mes compétences techniques
              pour concevoir et développer des solutions numériques modernes et performantes. Passionné par les nouvelles
              technologies, je m’intéresse particulièrement aux opportunités de transformation digitale et à l’accompagnement
              des entreprises dans leurs évolutions.
            </p>
          </section>

          <!-- Projets développement académique -->
          <section>
            <h2 class="text-xl font-semibold border-b-2 border-sky-400 pb-2 mb-4">
              Projets Développement Académique
            </h2>
            <div class="space-y-4">
              <article>
                <h3 class="font-semibold">Projet Facture</h3>
                <p class="text-sm text-gray-700">
                  <span class="font-medium">Langages :</span> TypeScript &amp; HTML<br>
                  <span class="font-medium">Description :</span> Formulaire interactif permettant de générer une facture
                  selon le choix de l’utilisateur.
                </p>
              </article>

              <article>
                <h3 class="font-semibold">Phishing | Cyber Sécurité</h3>
                <p class="text-sm text-gray-700">
                  <span class="font-medium">Langages :</span> HTML, CSS, JS, Python, Flask<br>
                  <span class="font-medium">Description :</span> Réalisation d’un projet de cybersécurité visant à simuler une
                  attaque de phishing sur la page de connexion d’Amazon.
                </p>
              </article>

              <article>
                <h3 class="font-semibold">Portfolio responsive</h3>
                <p class="text-sm text-gray-700">
                  <span class="font-medium">Langages :</span> HTML, CSS, JavaScript<br>
                  <span class="font-medium">Description :</span> Création d’un portfolio web responsive présentant mon
                  expérience et mes projets.
                </p>
              </article>

              <article>
                <h3 class="font-semibold">Crud Recettes | Site statique</h3>
                <p class="text-sm text-gray-700">
                  <span class="font-medium">Langages :</span> HTML, CSS, JavaScript<br>
                  <span class="font-medium">Description :</span> Développement d’une mini‑application web statique pour la
                  gestion de recettes (ajouter, modifier, supprimer).
                </p>
              </article>

              <article>
                <h3 class="font-semibold">Conception de Base de Données Distribuée</h3>
                <p class="text-sm text-gray-700">
                  <span class="font-medium">Outils :</span> Rqlite, Git, Python, Node.js, Docker, Cluster<br>
                  <span class="font-medium">Description :</span> Mise en place d’un cluster distribué entre deux serveurs.
                </p>
              </article>

              <article>
                <h3 class="font-semibold">Gestionstock | Complet</h3>
                <p class="text-sm text-gray-700">
                  <span class="font-medium">Langage de programmation :</span> Java
                </p>
              </article>
            </div>
          </section>

          <!-- Diplômes et Formations -->
          <section>
            <h2 class="text-xl font-semibold border-b-2 border-sky-400 pb-2 mb-4">Diplômes et Formations</h2>
            <ul class="list-disc list-inside space-y-2 text-gray-800">
              <li>
                <span class="font-medium">Formation Vue.js, TypeScript, Tailwind CSS et Node.js</span> — Udemy (2024)
              </li>
              <li>
                <span class="font-medium">Certificat Microsoft Office</span> — Udemy (2024)
              </li>
              <li>
                <span class="font-medium">Licence Génie Logiciel</span> — ESGIS, Libreville (2022 – en cours)
              </li>
              <li>
                <span class="font-medium">Baccalauréat Série A1</span>
              </li>
            </ul>
          </section>
          <!-- Bouton Télécharger -->
          <button
            @click="openPwModal"

            class="inline-flex items-center gap-2 rounded-full bg-sky-600 hover:bg-sky-500 text-white px-4 py-2 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500"
            aria-label="Télécharger le CV en PDF"
          >
            <i class="bx bx-download text-xl"></i>
            Télécharger le CV
          </button>
        </main>
      </div>
      <!-- MODAL Mot de passe -->
      <div v-if="showPwModal" class="fixed inset-0 z-[60] flex items-center justify-center">
        <!-- backdrop -->
        <div class="absolute inset-0 bg-black/60" @click="closePwModal"></div>

        <!-- dialog -->
        <div class="relative bg-white text-gray-900 w-[92%] max-w-md rounded-2xl shadow-xl p-6">
          <div class="flex items-start justify-between">
            <h3 class="text-lg font-semibold">Protection par mot de passe</h3>
            <button class="text-2xl leading-none -mt-1" @click="closePwModal" aria-label="Fermer">×</button>
          </div>

          <p class="mt-2 text-sm text-gray-600">
            Entrez le mot de passe pour télécharger le CV en PDF.
          </p>

          <form class="mt-4 space-y-3" @submit.prevent="submitPw">
            <input
              id="pw-input"
              type="password"
              v-model.trim="pwd"
              placeholder="Mot de passe"
              class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
              @keyup.enter="submitPw"
            />
            <p v-if="err" class="text-sm text-red-600">{{ err }}</p>

            <div class="flex items-center justify-end gap-2 pt-1">
              <button type="button" @click="closePwModal" class="px-3 py-2 rounded-lg border">
                Annuler
              </button>
              <button type="submit" class="px-4 py-2 rounded-lg bg-sky-600 text-white hover:bg-sky-500">
                Valider & Télécharger
              </button>
            </div>
          </form>
        </div>
      </div>
      <!-- /MODAL -->
    </div>
  </section>
</template>
