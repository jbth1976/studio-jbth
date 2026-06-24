<script lang="ts">

  // Hero : vidéos 1, 2, 3
  const heroVideos = [
    { src: '/videos/img1.mp4', cat: 'Développement', label: 'Sites web sur-mesure' },
    { src: '/videos/img2.mp4', cat: 'Graphisme', label: 'Identité visuelle' },
    { src: '/videos/img3.mp4', cat: 'Édition', label: 'Livres & création' },
  ];
  // Expertises : vidéos 4, 5, 6
  const expertVideos = [
    { src: '/videos/img4.mp4', cat: 'Développement', label: 'Sites web sur-mesure' },
    { src: '/videos/img5.mp4', cat: 'Design graphique', label: 'Identité visuelle' },
    { src: '/videos/img6.mp4', cat: 'Édition', label: 'Livres & publication' },
  ];
</script>

<!-- HERO avec aurora -->
<section class="hero">
  <!-- Aurora background -->
  <div class="aurora" aria-hidden="true">
    <div class="aurora-band ab1"></div>
    <div class="aurora-band ab2"></div>
    <div class="aurora-band ab3"></div>
    <div class="aurora-band ab4"></div>
  </div>

  <div class="hero-inner">
    <div class="hero-left">
      <div class="kicker">
        <span class="kicker-dot"></span>
        <span class="kicker-txt">Design · Développement · Édition</span>
      </div>

      <h1 class="hero-h1">
        Des idées<br>
        <em>qui prennent</em><br>
        vie
      </h1>

      <p class="hero-desc">
        Sites web, design graphique et créations éditoriales —
        réinventés pour l'ère de l'IA. De l'idée à la réalisation.
      </p>

      <div class="hero-actions">
        <a href="/services" class="btn-main">Voir mes services</a>
        <a href="/mes-projets" class="btn-ghost-link">Découvrir mes projets →</a>
      </div>
    </div>

    <div class="hero-right">
      <!-- Vidéo principale -->
      <div class="hero-vid hero-vid-main">
        <video src={heroVideos[0].src} autoplay muted loop playsinline class="vid-el"></video>
        <div class="vid-overlay"></div>
        <div class="vid-meta">
          <span class="vid-cat">{heroVideos[0].cat}</span>
          <span class="vid-name">{heroVideos[0].label}</span>
        </div>
      </div>
      <!-- Deux petites vidéos -->
      <div class="hero-vid hero-vid-sm">
        <video src={heroVideos[1].src} autoplay muted loop playsinline class="vid-el"></video>
        <div class="vid-overlay"></div>
        <div class="vid-meta">
          <span class="vid-cat">{heroVideos[1].cat}</span>
          <span class="vid-name vid-name-sm">{heroVideos[1].label}</span>
        </div>
      </div>
      <div class="hero-vid hero-vid-sm">
        <video src={heroVideos[2].src} autoplay muted loop playsinline class="vid-el"></video>
        <div class="vid-overlay"></div>
        <div class="vid-meta">
          <span class="vid-cat">{heroVideos[2].cat}</span>
          <span class="vid-name vid-name-sm">{heroVideos[2].label}</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- SECTION EXPERTISES -->
<section class="expertise-section">
  <div class="section-head">
    <div class="section-line"></div>
    <span class="section-label">Ce que je fais</span>
    <div class="section-line"></div>
  </div>

  <div class="expertises">

    <div class="exp-col">
      <div class="exp-vid-wrap">
        <video src={expertVideos[0].src} autoplay muted loop playsinline class="exp-vid"></video>
        <div class="exp-vid-overlay"></div>
        <span class="exp-num">01</span>
      </div>
      <div class="exp-body">
        <span class="exp-tag">Développement</span>
        <h3 class="exp-title">Sites web<br><em>sur-mesure</em></h3>
        <p class="exp-desc">SvelteKit, React, Tailwind — des interfaces rapides, accessibles et pensées pour convertir. Du landing page au projet complexe.</p>
        <a href="/services" class="exp-link">Voir les services →</a>
      </div>
    </div>

    <div class="exp-sep"></div>

    <div class="exp-col">
      <div class="exp-vid-wrap">
        <video src={expertVideos[1].src} autoplay muted loop playsinline class="exp-vid"></video>
        <div class="exp-vid-overlay"></div>
        <span class="exp-num">02</span>
      </div>
      <div class="exp-body">
        <span class="exp-tag">Design graphique</span>
        <h3 class="exp-title">Identité<br><em>visuelle</em></h3>
        <p class="exp-desc">Logo, charte graphique, brand book — une identité qui vous ressemble et qui marque les esprits durablement.</p>
        <a href="/services" class="exp-link">Voir les services →</a>
      </div>
    </div>

    <div class="exp-sep"></div>

    <div class="exp-col">
      <div class="exp-vid-wrap">
        <video src={expertVideos[2].src} autoplay muted loop playsinline class="exp-vid"></video>
        <div class="exp-vid-overlay"></div>
        <span class="exp-num">03</span>
      </div>
      <div class="exp-body">
        <span class="exp-tag">Édition</span>
        <h3 class="exp-title">Livres &<br><em>publication</em></h3>
        <p class="exp-desc">Mise en page, couverture, accompagnement à l'édition — du manuscrit au livre imprimé ou numérique.</p>
        <a href="/livres" class="exp-link">Voir mes livres →</a>
      </div>
    </div>

  </div>
</section>

<!-- TÉMOIGNAGES -->
<section class="temoignages">
  <div class="temo-inner">
    <span class="temo-kicker">Ce qu'ils disent</span>
    <div class="temo-grid">

      <div class="temo-card">
        <div class="temo-quote">"</div>
        <p class="temo-text">Studio JBTH a transformé notre présence en ligne avec une sensibilité rare. Jean-Baptiste a su capturer l'âme de La Terre Promise — entre spiritualité, nature et transmission — et en faire un site qui touche vraiment les gens. Un travail d'orfèvre.</p>
        <div class="temo-author">
          <div class="temo-info">
            <span class="temo-name">Gilles</span>
            <a href="https://www.laterrepromise.com" target="_blank" rel="noopener" class="temo-project">La Terre Promise</a>
          </div>
          <span class="temo-role">Fondateur</span>
        </div>
      </div>

      <div class="temo-card temo-card--dark">
        <div class="temo-quote">"</div>
        <p class="temo-text">Une collaboration fluide, créative et professionnelle. Le résultat dépasse ce que j'imaginais — une identité visuelle cohérente, moderne, qui me ressemble vraiment. Je recommande Studio JBTH sans hésitation.</p>
        <div class="temo-author">
          <div class="temo-info">
            <span class="temo-name">Sophie M.</span>
            <span class="temo-project">Auteure indépendante</span>
          </div>
          <span class="temo-role">Cliente édition</span>
        </div>
      </div>

      <div class="temo-card">
        <div class="temo-quote">"</div>
        <p class="temo-text">Un vrai partenaire créatif, pas juste un prestataire. Jean-Baptiste comprend les enjeux business autant que les exigences esthétiques. Notre site a gagné en trafic et en crédibilité depuis le lancement.</p>
        <div class="temo-author">
          <div class="temo-info">
            <span class="temo-name">Marc D.</span>
            <span class="temo-project">Studio de design</span>
          </div>
          <span class="temo-role">Directeur créatif</span>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- CONTACT BAR -->
<div class="contact-bar">
  <div>
    <h2 class="contact-h">Un projet en tête ?</h2>
    <p class="contact-sub">Je suis disponible pour de nouvelles collaborations.</p>
  </div>
  <a href="/contact" class="contact-btn">Me contacter</a>
</div>


<style>
/* ===== HERO ===== */
.hero {
  position: relative;
  overflow: hidden;
  padding: 72px 28px 60px;
  background: #F4EFE7;
}

/* Aurora */
.aurora {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}
.aurora-band {
  position: absolute;
  border-radius: 50%;
  filter: blur(70px);
}
.ab1 {
  width: 500px;
  height: 400px;
  background: rgba(42, 31, 94, 0.13);
  top: -120px;
  left: -80px;
  animation: aurora1 14s ease-in-out infinite;
}
.ab2 {
  width: 400px;
  height: 350px;
  background: rgba(200, 192, 255, 0.12);
  top: -40px;
  right: -60px;
  animation: aurora2 18s ease-in-out infinite;
}
.ab3 {
  width: 300px;
  height: 280px;
  background: rgba(42, 31, 94, 0.08);
  bottom: -80px;
  left: 30%;
  animation: aurora3 22s ease-in-out infinite;
}
.ab4 {
  width: 250px;
  height: 220px;
  background: rgba(200, 192, 255, 0.09);
  bottom: 0;
  right: 20%;
  animation: aurora1 16s ease-in-out infinite reverse;
}

@keyframes aurora1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(40px, -30px) scale(1.08); }
  66% { transform: translate(-20px, 20px) scale(0.96); }
}
@keyframes aurora2 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-35px, 25px) scale(1.1); }
}
@keyframes aurora3 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  40% { transform: translate(20px, -15px) scale(1.05); }
  80% { transform: translate(-15px, 10px) scale(0.95); }
}

.hero-inner {
  position: relative;
  z-index: 1;
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
}

/* Hero left */
.kicker {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
}
.kicker-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #C67A35;
  flex-shrink: 0;
}
.kicker-txt {
  font-size: 10px;
  color: #C67A35;
  letter-spacing: .18em;
  text-transform: uppercase;
  font-weight: 600;
  font-family: 'Manrope', sans-serif;
}

.hero-h1 {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: clamp(52px, 6vw, 72px);
  font-weight: 700;
  line-height: .95;
  letter-spacing: .02em;
  color: #171412;
  margin-bottom: 20px;
}
.hero-h1 em {
  font-style: italic;
  font-weight: 400;
  color: #9A8E7E;
}

.hero-desc {
  font-size: 14px;
  color: #7a6e5e;
  line-height: 1.8;
  max-width: 340px;
  margin-bottom: 32px;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.btn-main {
  font-family: 'Manrope', sans-serif;
  font-size: 11px;
  font-weight: 700;
  color: #F4EFE7;
  background: #171412;
  padding: 13px 26px;
  border-radius: 3px;
  letter-spacing: .07em;
  text-transform: uppercase;
  transition: background 0.2s ease;
}
.btn-main:hover { background: #C67A35; }

.btn-ghost-link {
  font-family: 'Manrope', sans-serif;
  font-size: 12px;
  color: #C67A35;
  border-bottom: .5px solid #C67A35;
  padding-bottom: 1px;
  transition: opacity 0.2s ease;
}
.btn-ghost-link:hover { opacity: 0.65; }

/* Hero right — grid vidéos */
.hero-right {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 8px;
}

.hero-vid {
  background: #171412;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}
.hero-vid-main {
  grid-column: span 2;
  aspect-ratio: 16 / 8;
}
.hero-vid-sm {
  aspect-ratio: 1;
}

.vid-el {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.vid-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,.75) 0%, transparent 55%);
}
.vid-meta {
  position: absolute;
  bottom: 14px;
  left: 14px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.vid-cat {
  font-size: 9px;
  color: #E8C88A;
  letter-spacing: .14em;
  text-transform: uppercase;
}
.vid-name {
  font-size: 14px;
  font-weight: 600;
  color: #F4EFE7;
}
.vid-name-sm {
  font-size: 11px;
}

/* ===== EXPERTISE SECTION ===== */
.expertise-section {
  padding: 60px 28px 72px;
  max-width: 1280px;
  margin: 0 auto;
}

.section-head {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 48px;
}
.section-line {
  flex: 1;
  height: .5px;
  background: #e0d8cc;
}
.section-label {
  font-size: 10px;
  color: #9a8e7e;
  letter-spacing: .16em;
  text-transform: uppercase;
  white-space: nowrap;
}

/* EXPERTISES GRID */
.expertises {
  display: grid;
  grid-template-columns: 1fr 1px 1fr 1px 1fr;
  gap: 0 40px;
  align-items: start;
}

.exp-sep {
  width: 1px;
  background: #E0D5C7;
  align-self: stretch;
}

.exp-col {
  display: flex;
  flex-direction: column;
  gap: 0;
}

/* Vidéo miniature */
.exp-vid-wrap {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  aspect-ratio: 4/3;
  margin-bottom: 24px;
}
.exp-vid {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.exp-vid-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(23,20,18,.6) 0%, rgba(23,20,18,.1) 60%, transparent 100%);
}
.exp-num {
  position: absolute;
  top: 12px;
  right: 14px;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 13px;
  font-weight: 600;
  color: rgba(232,200,138,.7);
  letter-spacing: .1em;
  z-index: 2;
}

/* Corps */
.exp-body {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.exp-tag {
  font-size: 9px;
  font-weight: 700;
  color: #C67A35;
  letter-spacing: .2em;
  text-transform: uppercase;
}

.exp-title {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 32px;
  font-weight: 700;
  color: #171412;
  line-height: 1.05;
  letter-spacing: .01em;
  margin: 0;
}
.exp-title em {
  font-style: italic;
  font-weight: 400;
  color: #9A8E7E;
}

.exp-desc {
  font-size: 13px;
  color: #7a6e5e;
  line-height: 1.75;
  margin: 0;
}

.exp-link {
  font-size: 11px;
  font-weight: 600;
  color: #C67A35;
  letter-spacing: .04em;
  border-bottom: .5px solid #C67A35;
  padding-bottom: 1px;
  align-self: flex-start;
  transition: opacity 0.2s ease;
  margin-top: 4px;
}
.exp-link:hover { opacity: 0.65; }

/* ===== TÉMOIGNAGES ===== */
.temoignages {
  background: #171412;
  padding: 80px 28px;
}
.temo-inner {
  max-width: 1280px;
  margin: 0 auto;
}
.temo-kicker {
  display: block;
  font-size: 9px;
  font-weight: 600;
  color: #C67A35;
  letter-spacing: .2em;
  text-transform: uppercase;
  margin-bottom: 48px;
}
.temo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
}
.temo-card {
  background: #1e1a17;
  border: .5px solid #2e2a26;
  padding: 40px 36px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 4px;
}
.temo-card--dark {
  background: #2e2a26;
  border-color: #3d3830;
}
.temo-quote {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 64px;
  line-height: .6;
  color: #C67A35;
  opacity: .6;
  font-style: italic;
}
.temo-text {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 17px;
  font-style: italic;
  line-height: 1.65;
  color: #EDE7DD;
  flex: 1;
}
.temo-author {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-top: .5px solid #3d3830;
  padding-top: 20px;
}
.temo-info { display: flex; flex-direction: column; gap: 3px; }
.temo-name { font-size: 13px; font-weight: 700; color: #F4EFE7; letter-spacing: .02em; }
.temo-project { font-size: 11px; color: #C67A35; text-decoration: none; transition: opacity 0.2s; }
.temo-project:hover { opacity: .7; }
.temo-role { font-size: 10px; color: #6b6158; letter-spacing: .08em; text-transform: uppercase; }

/* ===== CONTACT BAR ===== */
.contact-bar {
  max-width: 1280px;
  margin: 0 auto 48px;
  padding: 0 28px;
}
.contact-bar > div:first-child + * {
  flex-shrink: 0;
}

.contact-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #2e2a26;
  border-radius: 14px;
  border: .5px solid #3d3830;
  padding: 36px 40px;
  gap: 24px;
  flex-wrap: wrap;
}

.contact-h {
  font-size: 24px;
  font-weight: 800;
  color: #F4EFE7;
  letter-spacing: -.03em;
  margin-bottom: 6px;
}
.contact-sub {
  font-size: 13px;
  color: #B8956A;
  margin: 0;
}
.contact-btn {
  font-size: 11px;
  font-weight: 700;
  color: #171412;
  background: #F4EFE7;
  padding: 14px 32px;
  border-radius: 3px;
  letter-spacing: .06em;
  text-transform: uppercase;
  transition: background 0.2s ease;
  white-space: nowrap;
  flex-shrink: 0;
}
.contact-btn:hover {
  background: #fff;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 900px) {
  .temo-grid { grid-template-columns: 1fr; gap: 8px; }
  .temoignages { padding: 60px 20px; }
}

@media (max-width: 900px) {
  .hero-inner {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .hero-right {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
  }
  .hero-vid-main {
    grid-column: span 3;
    aspect-ratio: 16 / 7;
  }
  .hero-vid-sm {
    grid-column: span 1;
    aspect-ratio: 4 / 3;
  }
  .expertises {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
  .exp-sep { display: none; }
}

@media (max-width: 600px) {
  .hero {
    padding: 48px 16px 40px;
  }
  .hero-inner {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .hero-right {
    grid-template-columns: 1fr;
    gap: 8px;
  }
  .hero-vid-main {
    grid-column: span 1;
    aspect-ratio: 16 / 9;
  }
  .hero-vid-sm {
    grid-column: span 1;
    aspect-ratio: 16 / 9;
  }
  .expertises {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .expertise-section {
    padding: 40px 16px;
  }
  .temo-grid {
    grid-template-columns: 1fr;
    gap: 8px;
  }
  .temoignages { padding: 48px 16px; }
  .temo-card { padding: 28px 20px; }
  .contact-bar {
    margin: 0 16px 40px;
    padding: 28px 24px;
    flex-direction: column;
    align-items: flex-start;
  }
  .contact-btn {
    width: 100%;
    text-align: center;
  }
}
</style>
