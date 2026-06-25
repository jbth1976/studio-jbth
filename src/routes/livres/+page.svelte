<script lang="ts">

  const books = [
    {
      title: "Les Derniers Battements",
      subtitle: "Un roman poignant sur la résilience et la mémoire.",
      publisher: "Élaïa Éditions",
      img: "/images/livres/DB.webp",
      link: "https://www.fnac.com/mp51486312/Les-Derniers-Battements",
    },
    {
      title: "J'ai Rendez-Vous Avec la Mort",
      subtitle: "Quand l'heure approche, que reste-t-il à dire ?",
      publisher: "MVO Éditions",
      img: "/images/livres/jram.webp",
      link: "https://www.cultura.com/p-j-ai-rendez-vous-avec-la-mort-9782494929685.html",
    },
    {
      title: "Entre Deux Mondes",
      subtitle: "Un roman sur le deuil, la vie et les ponts invisibles entre les âmes.",
      publisher: "La Racine des Mots",
      img: "/images/livres/entredeuxmondes.webp",
      link: "https://www.laracinedesmots.com/catalogue/p/jeanbaptistetharrault-entredeuxmondes",
    },
    {
      title: "Le Crépuscule des Intelligences",
      subtitle: "Un thriller de science-fiction où l'humanité affronte les IA invisibles.",
      publisher: "KDP Amazon",
      img: "/images/livres/IA.webp",
      link: "https://www.amazon.fr/dp/B0DH3SH9QX",
    },
    {
      title: "Lunoo (Série Jeunesse)",
      subtitle: "Un petit être bleu qui apprend à grandir dans un monde poétique.",
      publisher: "KDP Amazon",
      img: "/images/livres/lunoo.webp",
      link: "https://www.amazon.fr/s?k=tharrault+jean-baptiste",
    },
  ];
</script>

<div class="page">

  <!-- HERO -->
  <section class="page-hero">
    <div class="aurora" aria-hidden="true">
      <div class="ab ab1"></div>
      <div class="ab ab2"></div>
    </div>
    <div class="page-hero-inner">
      <span class="kicker">Livres</span>
      <h1>Mes<br><em>publications</em></h1>
      <p class="hero-desc">Romans, récits et jeunesse, publiés chez Élaïa, MVO, La Racine des Mots et en autoédition KDP.</p>
    </div>
  </section>

  <!-- GRILLE LIVRES -->
  <div class="content">

    <div class="section-head">
      <div class="sline"></div>
      <span class="slabel">Catalogue</span>
      <div class="sline"></div>
    </div>

    <div class="books-grid">
      {#each books as book}
        <div class="book-card">
          <a href={book.link} target="_blank" rel="noopener" class="cover-link">
            <div class="cover-wrap">
              <img src={book.img} alt={book.title} class="cover" loading="lazy" />
            </div>
          </a>
          <div class="book-info">
            <span class="publisher">{book.publisher}</span>
            <h2>{book.title}</h2>
            <p class="subtitle">{book.subtitle}</p>
            <a href={book.link} target="_blank" rel="noopener" class="buy-btn">Acheter →</a>
          </div>
        </div>
      {/each}
    </div>

    <!-- COLLABORATION -->
    <div class="collab-block">
      <div class="collab-text">
        <h2>Vous souhaitez publier votre livre ?</h2>
        <p>Je réalise des couvertures uniques, la mise en page complète de vos ouvrages et vous accompagne de la création à la publication — en collaboration avec des photographes, illustrateurs et correcteurs expérimentés.</p>
        <a href="/contact" class="collab-btn">Discuter de votre projet</a>
      </div>
      <div class="collab-quote">
        <span class="quote-mark">"</span>
        <p>Chaque livre mérite une présentation à la hauteur de son histoire.</p>
        <cite>— Studio JBTH</cite>
      </div>
    </div>

  </div>

</div>

<style>
.page { background: #F4EFE7; }

/* HERO */
.page-hero {
  position: relative; overflow: hidden;
  padding: 80px 28px 70px; background: #F4EFE7;
}
.aurora { position: absolute; inset: 0; pointer-events: none; }
.ab { position: absolute; border-radius: 50%; filter: blur(70px); }
.ab1 { width: 450px; height: 380px; background: rgba(198,122,53,.07); top: -120px; right: -40px; animation: aur 16s ease-in-out infinite; }
.ab2 { width: 320px; height: 280px; background: rgba(198,122,53,.05); bottom: -60px; left: 15%; animation: aur 20s ease-in-out infinite reverse; }
@keyframes aur { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(20px,-15px) scale(1.08)} }

.page-hero-inner { position: relative; z-index: 1; max-width: 1280px; margin: 0 auto; }
.kicker {
  display: inline-block; font-size: 10px; font-weight: 600;
  color: #C67A35; letter-spacing: .18em; text-transform: uppercase;
  font-family: 'Manrope', sans-serif; margin-bottom: 16px;
}
.page-hero-inner h1 {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: clamp(40px, 5vw, 58px); font-weight: 700;
  line-height: 1; letter-spacing: .02em; color: #171412; margin-bottom: 16px;
}
.page-hero-inner h1 em { font-style: italic; font-weight: 400; color: #9A8E7E; }
.hero-desc { font-size: 14px; color: #7a6e5e; line-height: 1.8; max-width: 480px; font-family: 'Manrope', sans-serif; }

/* CONTENT */
.content { max-width: 1280px; margin: 0 auto; padding: 0 28px 80px; }

.section-head { display: flex; align-items: center; gap: 16px; margin-bottom: 40px; }
.sline { flex: 1; height: .5px; background: #E0D5C7; }
.slabel { font-size: 10px; color: #9A8E7E; letter-spacing: .18em; text-transform: uppercase; white-space: nowrap; font-family: 'Manrope', sans-serif; }

/* GRILLE */
.books-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  margin-bottom: 64px;
}

.book-card {
  background: #EDE7DD;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: .5px solid #D8D0C4;
  box-shadow: 0 2px 8px rgba(23,20,18,.06);
}
.book-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 32px rgba(23,20,18,.12);
}

/* Couverture */
.cover-link { display: block; }
.cover-wrap {
  overflow: hidden;
  aspect-ratio: 3/4;
}
.cover {
  width: 100%; height: 100%;
  object-fit: cover; display: block;
  transition: transform 0.5s ease;
}
.book-card:hover .cover { transform: scale(1.03); }

/* Infos sous la couverture */
.book-info {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1;
}
.publisher {
  font-family: 'Manrope', sans-serif;
  font-size: 9px; color: #C67A35;
  letter-spacing: .18em; text-transform: uppercase;
  font-weight: 600;
}
.book-info h2 {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 18px; font-weight: 700;
  color: #171412; line-height: 1.2;
  margin: 0;
}
.subtitle {
  font-family: 'Manrope', sans-serif;
  font-size: 11px; color: #9A8E7E;
  line-height: 1.55;
  flex: 1;
}
.buy-btn {
  display: inline-block; margin-top: 12px;
  font-family: 'Manrope', sans-serif;
  font-size: 10px; font-weight: 700;
  color: #F4EFE7;
  background: #171412;
  padding: 8px 14px;
  border-radius: 3px;
  letter-spacing: .07em;
  text-transform: uppercase;
  text-align: center;
  transition: background 0.2s ease;
}
.buy-btn:hover { background: #C67A35; }

/* COLLABORATION */
.collab-block {
  background: #2e2a26; border-radius: 14px;
  padding: 56px 48px; display: grid;
  grid-template-columns: 1fr auto;
  gap: 64px; align-items: center;
}
.collab-text h2 {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 32px; font-weight: 700;
  color: #F4EFE7; line-height: 1.1;
  margin-bottom: 14px; letter-spacing: .01em;
}
.collab-text p {
  font-family: 'Manrope', sans-serif;
  font-size: 13px; color: #9A8E7E;
  line-height: 1.8; margin-bottom: 28px;
  max-width: 480px;
}
.collab-btn {
  display: inline-block;
  font-family: 'Manrope', sans-serif;
  font-size: 11px; font-weight: 700;
  color: #171412; background: #F4EFE7;
  padding: 13px 28px; border-radius: 3px;
  letter-spacing: .07em; text-transform: uppercase;
  transition: background 0.2s ease;
}
.collab-btn:hover { background: #E8C88A; }

.collab-quote {
  border-left: 1px solid rgba(198,122,53,.3);
  padding-left: 40px;
  display: flex; flex-direction: column; gap: 10px;
  min-width: 240px; max-width: 280px;
}
.quote-mark {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 48px; color: #C67A35; opacity: .4;
  line-height: 1;
}
.collab-quote p {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 18px; color: #EDE7DD;
  font-style: italic; line-height: 1.5;
  margin: 0;
}
.collab-quote cite {
  font-family: 'Manrope', sans-serif;
  font-size: 10px; color: #C67A35;
  letter-spacing: .12em; text-transform: uppercase;
}

/* RESPONSIVE */
@media (max-width: 1024px) {
  .books-grid { grid-template-columns: repeat(3, 1fr); }
  .collab-block { grid-template-columns: 1fr; gap: 32px; }
  .collab-quote { border-left: none; border-top: 1px solid rgba(198,122,53,.3); padding-left: 0; padding-top: 32px; min-width: unset; max-width: unset; }
}
@media (max-width: 768px) {
  .page-hero { padding: 60px 16px 48px; }
  .content { padding: 0 16px 60px; }
  .books-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
  .collab-block { padding: 36px 24px; }
}
@media (max-width: 480px) {
  .books-grid { grid-template-columns: 1fr 1fr; gap: 10px; }
  .page-hero-inner h1 { font-size: 32px; }
  .collab-block { padding: 24px 16px; border-radius: 10px; }
}
</style>
