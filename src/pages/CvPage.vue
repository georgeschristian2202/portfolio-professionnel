<script setup>
const PDF_PATH = '/cv/CV_2026-04-10_Georges_RAPONTCHOMBO.pdf'
const PDF_NAME = 'CV_2026-04-10_Georges_RAPONTCHOMBO.pdf'
</script>

<template>
  <section class="bg-bg text-text py-10 min-h-screen">
    <div class="container max-w-6xl">
      <!-- Bouton retour -->
      <div class="mb-6">
        <RouterLink
          to="/"
          class="inline-flex items-center gap-2 text-sm opacity-70 hover:opacity-100 hover:text-main transition"
        >
          <i class="bx bx-left-arrow-alt text-lg"></i> Retour au portfolio
        </RouterLink>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Colonne gauche -->
        <aside class="bg-bg2 text-text rounded-xl p-6 space-y-6 border border-border">
          <!-- Photo + nom + titre -->
          <div class="text-center">
            <img
              src="/images/photo2.jpeg"
              alt="Georges Rapontchombo"
              class="w-32 h-32 rounded-full mx-auto object-cover border-4 border-main shadow-lg"
            />
            <h2 class="text-xl font-bold mt-4">Georges RAPONTCHOMBO</h2>
            <p class="text-main font-medium">Développeur Web</p>
          </div>

          <!-- Infos perso -->
          <div class="text-sm space-y-2">
            <div class="flex items-start gap-2">
              <i class="bx bx-flag text-main text-lg"></i><span>Gabonais</span>
            </div>
            <div class="flex items-start gap-2">
              <i class="bx bx-envelope text-main text-lg"></i
              ><span>georgesrapontchombo22@gmail.com</span>
            </div>
            <div class="flex items-start gap-2">
              <i class="bx bx-map text-main text-lg"></i><span>Glass, Estuaire Libreville</span>
            </div>
            <div class="flex items-start gap-2">
              <i class="bx bx-briefcase text-main text-lg"></i
              ><span>Télétravail ou présentiel</span>
            </div>
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
              <li>Management</li>
              <li>Suivi de Projet</li>
              <li>Sens de l'organisation et de la planification agile</li>
              <li>Communication et coordination</li>
            </ul>
          </section>

          <!-- Centres d'intérêt -->
          <section>
            <h3 class="text-lg font-semibold border-l-4 border-main pl-2 mb-2">
              Centres d'intérêt
            </h3>
            <ul class="text-sm space-y-1">
              <li>Football</li>
              <li>Taekwondo</li>
            </ul>
          </section>

          <!-- Outils pro -->
          <section>
            <h3 class="text-lg font-semibold border-l-4 border-main pl-2 mb-2">
              Outils Professionnels
            </h3>
            <div class="text-sm space-y-3">
              <div>
                <p class="font-medium mb-1">Développement IT</p>
                <p class="opacity-80">
                  Vue.js, Angular, Tailwind CSS, Node.JS, PostgreSQL, Suite JetBrains, Git &amp;
                  GitHub, Docker, Filezilla
                </p>
              </div>
              <div>
                <p class="font-medium mb-1">Conception Graphique</p>
                <p class="opacity-80">Adobe XD, Canva, Figma</p>
              </div>
              <div>
                <p class="font-medium mb-1">Management de Projet</p>
                <p class="opacity-80">
                  Argile, Slack, Trello, Microsoft Office 365, Google Workspace
                </p>
              </div>
            </div>
          </section>

          <!-- Veille -->
          <section>
            <h3 class="text-lg font-semibold border-l-4 border-main pl-2 mb-2">
              Veille Informatique
            </h3>
            <ul class="list-disc list-inside text-sm space-y-1">
              <li>IA</li>
              <li>Réseaux sociaux</li>
              <li>Référencement Web</li>
            </ul>
          </section>

          <!-- Réseaux sociaux -->
          <section>
            <h3 class="text-lg font-semibold border-l-4 border-main pl-2 mb-2">Réseaux sociaux</h3>
            <div class="text-sm space-y-2">
              <a
                href="https://linkedin.com/in/christian-rapontchombo"
                target="_blank"
                rel="noopener"
                class="flex items-center gap-2 hover:text-main transition"
              >
                <i class="bx bxl-linkedin text-lg"></i>
                <span>@christian-rapontchombo</span>
              </a>
              <a
                href="https://github.com/RG-christian"
                target="_blank"
                rel="noopener"
                class="flex items-center gap-2 hover:text-main transition"
              >
                <i class="bx bxl-github text-lg"></i>
                <span>@RG-christian</span>
              </a>
            </div>
          </section>
        </aside>

        <!-- Colonne droite -->
        <main class="md:col-span-2 bg-bg2 rounded-xl p-6 space-y-8 border border-border">
          <!-- En-tête -->
          <header class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
            <div>
              <h1 class="text-2xl font-extrabold text-text">Georges RAPONTCHOMBO</h1>
              <p class="text-main font-medium">Développeur Web</p>
            </div>
          </header>

          <!-- Profil -->
          <section>
            <h2 class="text-xl font-semibold border-b-2 border-main pb-2 mb-4">Profil</h2>
            <p class="text-text opacity-90 leading-relaxed">
              Actuellement en Master 1 en architecture logicielle, je conçois et développe des
              applications web en m'appuyant sur des principes d'architecture moderne. Passionné par
              l'ingénierie logicielle, je m'intéresse aux problématiques de performance, de
              scalabilité et d'optimisation des systèmes.
            </p>
          </section>

          <!-- Expériences professionnelles -->
          <section>
            <h2 class="text-xl font-semibold border-b-2 border-main pb-2 mb-4">
              Expériences professionnelles
            </h2>
            <div class="space-y-6">
              <article>
                <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                  <h3 class="font-semibold text-lg">développeur Web & Mobile</h3>
                  <span class="text-sm text-text opacity-70">Janvier 2026 - Avril 2026</span>
                </div>
                <p class="text-sm font-medium text-main mb-2">
                  Société d'Incubation Numérique du Gabon — Libreville, ES, Gabon
                </p>
                <p class="text-sm text-text opacity-90 mb-2">
                  Conception et développement de la plateforme interne "SING Fusion", dédiée à la
                  digitalisation du processus d'intégration des nouveaux collaborateurs.
                </p>
                <ul class="list-disc list-inside text-sm text-text opacity-80 space-y-1">
                  <li>
                    Mise en place d'un parcours d'onboarding digital structuré (modules,
                    progression)
                  </li>
                  <li>Développement de modules interactifs et quiz d'évaluation</li>
                  <li>Intégration d'un système de consultation des procédures internes</li>
                  <li>
                    Implémentation d'un chatbot pour faciliter l'accompagnement des utilisateurs
                  </li>
                </ul>
              </article>

              <article>
                <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                  <h3 class="font-semibold text-lg">Assistant développeur Web & Mobile</h3>
                  <span class="text-sm text-text opacity-70">Septembre 2025 - Octobre 2025</span>
                </div>
                <p class="text-sm font-medium text-main mb-2">
                  Société d'Incubation Numérique du Gabon — Libreville, ES, Gabon
                </p>
                <p class="text-sm text-text opacity-90 mb-2">
                  Participation à la conception et au développement d'un guichet numérique dédié au
                  Fonds de Préservation de la Biodiversité au Gabon.
                </p>
                <ul class="list-disc list-inside text-sm text-text opacity-80 space-y-1">
                  <li>Contribution à l'implémentation du formulaire de soumission des demandes</li>
                  <li>
                    Développement de fonctionnalités côté back-end pour l'espace administrateur
                  </li>
                </ul>
              </article>
            </div>
          </section>

          <!-- Projets professionnels -->
          <section>
            <h2 class="text-xl font-semibold border-b-2 border-main pb-2 mb-4">
              Projets professionnels
            </h2>
            <div class="space-y-4">
              <article>
                <h3 class="font-semibold">Guichet Numérique FPBG</h3>
                <p class="text-sm text-text opacity-80">
                  <span class="font-medium">Langages utilisés :</span> Angular, Tailwind, Node.js<br />
                  <span class="font-medium">Description :</span> Mettre en place une plateforme de
                  guichet numérique des appels à projet permettant aux porteurs de projet de pouvoir
                  soumettre leur projet.
                </p>
              </article>

              <article>
                <h3 class="font-semibold">Sing Fusion</h3>
                <p class="text-sm text-text opacity-80">
                  <span class="font-medium">Langages utilisés :</span> Vue.js, Tailwind, Node.js,
                  Prisma<br />
                  <span class="font-medium">Description :</span> Solution digitale interne dédiée à
                  l'automatisation du processus d'intégration des collaborateurs, offrant un
                  parcours interactif structuré autour de modules de formation, d'évaluations et
                  d'un système de suivi de progression.
                </p>
              </article>

              <article>
                <h3 class="font-semibold">Phishing | Cyber Sécurité</h3>
                <p class="text-sm text-text opacity-80">
                  <span class="font-medium">Langages :</span> HTML, CSS, JS, Python (Flask)<br />
                  <span class="font-medium">Site ciblé :</span> GAFAM<br />
                  <span class="font-medium">Description :</span> Réalisation d'un projet de
                  cybersécurité visant à simuler une attaque de phishing sur la page de connexion
                  d'une plateforme de Géant du WEB.
                </p>
              </article>
            </div>
          </section>

          <!-- Diplômes et Formations -->
          <section>
            <h2 class="text-xl font-semibold border-b-2 border-main pb-2 mb-4">
              Diplômes et Formations
            </h2>
            <div class="space-y-4">
              <article>
                <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                  <h3 class="font-semibold">MASTER 1 ARCHITECTURE LOGICIEL</h3>
                  <span class="text-sm text-text opacity-70">Depuis février 2026</span>
                </div>
                <p class="text-sm font-medium text-main mb-2">
                  ECOLE SUPERIEUR DE GESTION D'INFORMATIQUE ET DES SCIENCES — Libreville, ES, Gabon
                </p>
                <ul class="list-disc list-inside text-sm text-text opacity-80 space-y-1">
                  <li>
                    <span class="font-medium">Conception et architecture des systèmes :</span>
                    Concevoir des architectures logicielles robustes et évolutives, Maîtriser les
                    patterns de conception (MVC, microservices, etc.)
                  </li>
                  <li>
                    <span class="font-medium">Développement logiciel avancé :</span>
                    Développer des applications complexes (web, mobile ou desktop), Utiliser des
                    frameworks modernes (Spring, Laravel, Vue.js, etc.)
                  </li>
                  <li>
                    <span class="font-medium">DevOps et déploiement :</span>
                    Comprendre les concepts de CI/CD, Déployer des applications sur des serveurs ou
                    dans le cloud
                  </li>
                </ul>
              </article>

              <article>
                <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                  <h3 class="font-semibold">Licence Génie Logiciel</h3>
                  <span class="text-sm text-text opacity-70">Octobre 2022 - Janvier 2025</span>
                </div>
                <p class="text-sm font-medium text-main mb-2">
                  ECOLE SUPERIEUR DE GESTION D'INFORMATIQUE ET DES SCIENCES — Libreville, ES, Gabon
                </p>
                <ul class="list-disc list-inside text-sm text-text opacity-80 space-y-1">
                  <li>Projets scolaires en développement Web & logiciel</li>
                  <li>Matières principales : algorithmique, programmation, bases de données</li>
                </ul>
              </article>

              <article>
                <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                  <h3 class="font-semibold">
                    Formation Vue.js, Typescript, Tailwind CSS et Node.js
                  </h3>
                  <span class="text-sm text-text opacity-70">Avril 2025 - Juin 2025</span>
                </div>
                <p class="text-sm font-medium text-main mb-2">Udemy — France</p>
                <p class="text-sm text-text opacity-80">
                  Formation sur les bases de Typescript, Node.js et les Framework Vue.js et Tailwind
                  CSS
                </p>
              </article>
            </div>
          </section>

          <!-- Bouton Télécharger -->
          <a
            :href="PDF_PATH"
            :download="PDF_NAME"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-2 rounded-full bg-main hover:opacity-90 text-bg2 font-semibold px-6 py-2 shadow-md transition focus:outline-none focus:ring-2 focus:ring-main/50"
            aria-label="Télécharger le CV en PDF"
          >
            <i class="bx bx-download text-xl"></i>
            Télécharger le CV
          </a>
        </main>
      </div>
    </div>
  </section>
</template>
