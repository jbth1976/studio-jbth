<script lang="ts">
  import { onMount } from 'svelte';

  let index = 1;
  let track: HTMLDivElement;
  let autoplay: ReturnType<typeof setInterval>;

  onMount(() => {
    const images = track.querySelectorAll<HTMLImageElement>('img');
    const total = images.length;
    const firstClone = images[0].cloneNode(true) as HTMLImageElement;
    const lastClone = images[total - 1].cloneNode(true) as HTMLImageElement;
    track.appendChild(firstClone);
    track.insertBefore(lastClone, images[0]);
    const slides = track.querySelectorAll<HTMLImageElement>('img');
    const slidesCount = slides.length;

    function updateCarousel(transition = true) {
      if (!track) return;
      track.style.transition = transition ? 'transform 0.6s ease' : 'none';
      track.style.transform = `translateX(-${index * 100}%)`;
    }

    function resetAutoplay() {
      clearInterval(autoplay);
      autoplay = setInterval(nextSlide, 5000);
    }

    function nextSlide() {
      if (index >= slidesCount - 1) return;
      index++; updateCarousel();
    }
    function prevSlide() {
      if (index <= 0) return;
      index--; updateCarousel();
    }

    track.addEventListener('transitionend', () => {
      if (index === slidesCount - 1) { index = 1; updateCarousel(false); }
      if (index === 0) { index = slidesCount - 2; updateCarousel(false); }
    });

    autoplay = setInterval(nextSlide, 5000);
    updateCarousel(false);

    document.querySelector<HTMLButtonElement>('.carousel-btn.right')?.addEventListener('click', () => { nextSlide(); resetAutoplay(); });
    document.querySelector<HTMLButtonElement>('.carousel-btn.left')?.addEventListener('click', () => { prevSlide(); resetAutoplay(); });
  });

  const projets = [
    { img: '/images/inter-IA.png', alt: 'Identité visuelle Studio JBTH', title: 'Identité visuelle', desc: 'Branding complet Studio JBTH — logo, charte graphique, déclinaisons print et digital.' },
    { img: '/images/Maquette.png', alt: 'Interface IA sur-mesure', title: 'Interface IA sur-mesure', desc: 'Dashboard analytique alimenté par IA, avec visualisations temps réel et suggestions automatisées.' },
    { img: '/images/Palette.png', alt: 'Portfolio créatif 3D', title: 'Portfolio créatif 3D', desc: 'Expérience 3D immersive mêlant design produit, animation et narration visuelle.' },
    { img: '/images/Landing.png', alt: 'Landing page AI/Design', title: 'Landing page AI', desc: 'Site vitrine haute performance — score 98, design éditorial et conversion UX optimisée.' },
  ];

  const carousel_images = [
    { src: '/Carroussel/Majestic.jpg', alt: 'Salle majestueuse' },
    { src: '/Carroussel/salon-design.jpg', alt: 'Salon design moderne' },
    { src: '/Carroussel/art.jpg', alt: 'Œuvre artistique contemporaine' },
    { src: '/Carroussel/code.jpeg', alt: 'Écran de code' },
    { src: '/Carroussel/dessert.jpg', alt: 'Dessert raffiné' },
    { src: '/Carroussel/evolution.jpg', alt: "Concept d'évolution" },
    { src: '/Carroussel/logojb.jpg', alt: 'Logo JBTH' },
    { src: '/Carroussel/visage.jpg', alt: 'Visage artistique' },
    { src: '/Carroussel/lettre.jpg', alt: 'Lettre manuscrite' },
    { src: '/Carroussel/visge2.jpeg', alt: 'Portrait artistique' },
    { src: '/Carroussel/logoresto.jpg', alt: 'Logo de restaurant' },
    { src: '/Carroussel/tasse.jpg', alt: 'Tasse de café' },
    { src: '/Carroussel/fleur.jpg', alt: 'Fleur en gros plan' },
    { src: '/Carroussel/moodboard.jpg', alt: 'Moodboard créatif' },
    { src: '/Carroussel/couverture1.png', alt: 'Couverture de projet 1' },
    { src: '/Carroussel/couverture2.jpg', alt: 'Couverture de projet 2' },
  ];
</script>

<div class="page">

  <section class="page-hero">
    <div class="aurora" aria-hidden="true">
      <div class="ab ab1"></div>
      <div class="ab ab2"></div>
    </div>
    <div class="page-hero-inner">
      <span class="kicker">Réalisations</span>
      <h1>Des projets<br><em>qui marquent</em></h1>
      <p class="hero-desc">Design immersif, interfaces innovantes et expériences digitales pensées pour marquer l'esprit.</p>
    </div>
  </section>

  <div class="content">

    <!-- PROJETS GRID -->
    <div class="section-head">
      <div class="sline"></div>
      <span class="slabel">Projets sur-mesure</span>
      <div class="sline"></div>
    </div>

    <div class="projets-grid">
      {#each projets as p}
        <div class="projet-card">
          <div class="projet-img-wrap">
            <img src={p.img} alt={p.alt} loading="lazy" />
          </div>
          <div class="projet-info">
            <h2>{p.title}</h2>
            <p>{p.desc}</p>
          </div>
        </div>
      {/each}
    </div>

    <!-- GALERIE -->
    <div class="section-head" style="margin-top: 60px">
      <div class="sline"></div>
      <span class="slabel">Galerie personnelle</span>
      <div class="sline"></div>
    </div>

    <div class="carousel-wrap">
      <button class="carousel-btn left" aria-label="Image précédente">&#10094;</button>
      <div class="carousel-track" bind:this={track}>
        {#each carousel_images as img}
          <img src={img.src} alt={img.alt} loading="lazy" />
        {/each}
      </div>
      <button class="carousel-btn right" aria-label="Image suivante">&#10095;</button>
    </div>

  </div>
</div>

<style>
.page { background: #f4f0ea; }

.page-hero {
  position: relative; overflow: hidden;
  padding: 80px 28px 70px; background: #f4f0ea;
}
.aurora { position: absolute; inset: 0; pointer-events: none; }
.ab { position: absolute; border-radius: 50%; filter: blur(70px); }
.ab1 { width: 400px; height: 350px; background: rgba(42,31,94,.11); top: -100px; right: 0; animation: aur 16s ease-in-out infinite; }
.ab2 { width: 300px; height: 260px; background: rgba(200,192,255,.1); bottom: -40px; left: 20%; animation: aur 20s ease-in-out infinite reverse; }
@keyframes aur { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(20px,-15px) scale(1.08)} }

.page-hero-inner { position: relative; z-index: 1; max-width: 1280px; margin: 0 auto; }
.kicker { display: inline-block; font-size: 10px; font-weight: 600; color: #C67A35; letter-spacing: .16em; text-transform: uppercase; margin-bottom: 16px; }
.page-hero-inner h1 { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(48px, 7vw, 72px); font-weight: 700; line-height: 1; letter-spacing: .01em; color: #171412; margin-bottom: 16px; }
.page-hero-inner h1 em { font-style: italic; font-weight: 400; color: #9a8e7e; }
.hero-desc { font-size: 14px; color: #7a6e5e; line-height: 1.8; max-width: 460px; }

.content { max-width: 1280px; margin: 0 auto; padding: 0 28px 80px; }

.section-head { display: flex; align-items: center; gap: 16px; margin-bottom: 24px; }
.sline { flex: 1; height: .5px; background: #e0d8cc; }
.slabel { font-size: 10px; color: #9a8e7e; letter-spacing: .16em; text-transform: uppercase; white-space: nowrap; }

/* PROJETS */
.projets-grid {
  display: grid; grid-template-columns: repeat(2, 1fr);
  gap: 8px;
}
.projet-card {
  background: #1a1612; border-radius: 12px; overflow: hidden;
  transition: transform 0.2s ease;
}
.projet-card:hover { transform: translateY(-4px); }
.projet-img-wrap { overflow: hidden; aspect-ratio: 16/10; }
.projet-img-wrap img {
  width: 100%; height: 100%;
  object-fit: cover; display: block;
  transition: transform 0.4s ease;
}
.projet-card:hover .projet-img-wrap img { transform: scale(1.03); }
.projet-info { padding: 20px; }
.projet-info h2 { font-size: 15px; font-weight: 700; color: #f4f0ea; margin-bottom: 6px; }
.projet-info p { font-size: 12px; color: #9a8e7e; line-height: 1.6; }

/* CAROUSEL */
.carousel-wrap {
  position: relative; overflow: hidden;
  border-radius: 12px; background: #1a1612;
}
.carousel-track {
  display: flex;
  transition: transform 0.6s ease;
}
.carousel-track img {
  flex: 0 0 100%; width: 100%;
  max-height: 520px; object-fit: contain;
  background: #1a1612; display: block;
}
.carousel-btn {
  position: absolute; top: 50%; transform: translateY(-50%);
  background: rgba(244,240,234,.12); border: .5px solid rgba(244,240,234,.25);
  color: #f4f0ea; padding: 10px 14px; font-size: 16px;
  cursor: pointer; z-index: 10; border-radius: 4px;
  backdrop-filter: blur(6px); transition: background 0.2s;
}
.carousel-btn:hover { background: rgba(244,240,234,.25); }
.carousel-btn.left { left: 16px; }
.carousel-btn.right { right: 16px; }

@media (max-width: 768px) {
  .page-hero { padding: 60px 16px 48px; }
  .content { padding: 0 16px 60px; }
  .projets-grid { grid-template-columns: 1fr; }
  .carousel-track img { max-height: 260px; }
}
</style>
