<script lang="ts">
  import { onMount } from 'svelte';
  
  let index = 1; // starts at 1 for cloned seamless loop
  let track: HTMLDivElement;
  let autoplay: ReturnType<typeof setInterval>;
  
  onMount(() => {
      const images = track.querySelectorAll<HTMLImageElement>('img');
      const total = images.length;
  
      // Clone first and last for seamless infinite loop
      const firstClone = images[0].cloneNode(true) as HTMLImageElement;
      const lastClone = images[total - 1].cloneNode(true) as HTMLImageElement;
      track.appendChild(firstClone);
      track.insertBefore(lastClone, images[0]);
  
      const slides = track.querySelectorAll<HTMLImageElement>('img');
      const slidesCount = slides.length;
  
      function updateCarousel(transition = true) {
          if (!track) return;
          track.style.transition = transition ? 'transform 0.6s ease' : 'none';
          track.style.transform = `translateX(-${index * (100)}%)`;
      }
  
      function resetAutoplay() {
          clearInterval(autoplay);
          autoplay = setInterval(nextSlide, 5000);
      }
  
      function nextSlide() {
          if (index >= slidesCount - 1) return; // prevent overflow
          index++;
          updateCarousel();
      }
  
      function prevSlide() {
          if (index <= 0) return; // prevent underflow
          index--;
          updateCarousel();
      }
  
      track.addEventListener('transitionend', () => {
          if (index === slidesCount - 1) {
              index = 1;
              updateCarousel(false);
          }
          if (index === 0) {
              index = slidesCount - 2;
              updateCarousel(false);
          }
      });
  
      autoplay = setInterval(nextSlide, 5000);
      updateCarousel(false);
  
      const nextBtn = document.querySelector<HTMLButtonElement>('.carousel-btn.right');
      const prevBtn = document.querySelector<HTMLButtonElement>('.carousel-btn.left');
  
      nextBtn?.addEventListener('click', () => {
          nextSlide();
          resetAutoplay();
      });
  
      prevBtn?.addEventListener('click', () => {
          prevSlide();
          resetAutoplay();
      });
  });
  </script>
  
  <section class="projets-section">
      <h1>Exemples de réalisations sur mesure</h1>
      <p class="projets-intro">Design immersif, interfaces innovantes et expériences digitales pensées pour marquer l’esprit.</p>
  
      <div class="projets-grid">
          <div class="projet-card">
              <img src="/images/inter-IA.png" alt="Interface IA sur-mesure" />
              <h2>Interface IA sur-mesure</h2>
              <p>Interface conversationnelle avec WebGL et particules animées.</p>
          </div>
          <div class="projet-card">
              <img src="/images/Maquette.png" alt="Portfolio créatif 3D" />
              <h2>Portfolio créatif 3D</h2>
              <p>Expérience 3D fluide avec navigation immersive.</p>
          </div>
          <div class="projet-card">
              <img src="/images/Palette.jpeg" alt="Identité visuelle Studio JBTH" />
              <h2>Identité visuelle Studio JBTH</h2>
              <p>Logo, animations et site vitrine élégant et impactant.</p>
          </div>
          <div class="projet-card">
              <img src="/images/Landing.jpeg" alt="Landing page AI/Design" />
              <h2>Landing page AI/Design</h2>
              <p>Page produit qui mêle IA, art visuel et conversion UX.</p>
          </div>
      </div>
  
      <div class="carrousel-perso">
        <h2>Galerie personnelle</h2>
        <div class="carousel-wrapper">
            <button class="carousel-btn left" aria-label="Image précédente">&#10094;</button>
            <div class="carousel-track" bind:this={track}>
                <img src="/Carroussel/Majestic.jpg" alt="Salle majestueuse" loading="lazy" />
                <img src="/Carroussel/salon-design.jpg" alt="Salon design moderne" loading="lazy" />
                <img src="/Carroussel/art.jpg" alt="Œuvre artistique contemporaine" loading="lazy" />
                <img src="/Carroussel/code.jpeg" alt="Écran de code" loading="lazy" />
                <img src="/Carroussel/dessert.jpg" alt="Dessert raffiné" loading="lazy" />
                <img src="/Carroussel/evolution.jpg" alt="Concept d'évolution" loading="lazy" />
                <img src="/Carroussel/logojb.jpg" alt="Logo JBTH" loading="lazy" />
                <img src="/Carroussel/visage.jpg" alt="Visage artistique" loading="lazy" />
                <img src="/Carroussel/lettre.jpg" alt="Lettre manuscrite" loading="lazy" />
                <img src="/Carroussel/visge2.jpeg" alt="Portrait artistique" loading="lazy" />
                <img src="/Carroussel/logoresto.jpg" alt="Logo de restaurant" loading="lazy" />
                <img src="/Carroussel/tasse.jpg" alt="Tasse de café" loading="lazy" />
                <img src="/Carroussel/fleur.jpg" alt="Fleur en gros plan" loading="lazy" />
                <img src="/Carroussel/moodboard.jpg" alt="Moodboard créatif" loading="lazy" />
                <img src="/Carroussel/couverture1.png" alt="Couverture de projet 1" loading="lazy" />
                <img src="/Carroussel/couverture2.jpg" alt="Couverture de projet 2" loading="lazy" />
            </div>
            <button class="carousel-btn right" aria-label="Image suivante">&#10095;</button>
        </div>
    </div>
  </section>
  
  <style>
  /* ======== Section Projets ======== */
.projets-section {
    padding: 4rem 1rem;
    background: radial-gradient(circle at top, #01010a 0%, #000 100%);
    color: #e0f7ff;
    text-align: center;
    font-family: 'Helvetica Neue', sans-serif;
}

.projets-section h1 {
    font-size: 2.4rem;
    margin-bottom: 1rem;
    color: #00ffff;
    text-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
}

.projets-intro {
    font-size: 1.1rem;
    max-width: 700px;
    margin: 0 auto 3rem auto;
    opacity: 0.85;
    line-height: 1.6;
}

/* ======== Grille Projets ======== */
.projets-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.projet-card {
    background: rgba(0, 0, 0, 0.5);
    border-radius: 1rem;
    border: 1px solid rgba(0, 255, 255, 0.15);
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.1);
    overflow: hidden;
    padding: 1rem;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.projet-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 0 30px rgba(0, 255, 255, 0.4);
}

.projet-card img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 0.7rem;
    margin-bottom: 0.8rem;
}

.projet-card h2 {
    font-size: 1.3rem;
    color: #00ffff;
    margin-bottom: 0.5rem;
}

.projet-card p {
    font-size: 1rem;
    opacity: 0.85;
    line-height: 1.5;
}

/* ======== Carrousel personnalisé ======== */
.carrousel-perso {
    margin: 5rem auto;
    padding-top: 2rem;
    border-top: 1px solid rgba(0, 255, 255, 0.15);
    max-width: 900px;
    text-align: center;
}

.carrousel-perso h2 {
    font-size: 1.8rem;
    color: #00ffff;
    text-shadow: 0 0 12px rgba(0, 255, 255, 0.4);
    margin-bottom: 2rem;
}

.carousel-wrapper {
    position: relative;
    overflow: hidden;
    border-radius: 1rem;
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.15);
}

.carousel-track {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.carousel-track img {
    flex: 0 0 100%;
    width: 100%;
    max-height: 500px;
    object-fit: contain;
    background: #000;
    border-radius: 1rem;
}

.carousel-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 255, 255, 0.2);
    border: 1px solid rgba(0, 255, 255, 0.4);
    color: #ffffff;
    padding: 0.5rem 0.7rem;
    font-size: 2rem;
    cursor: pointer;
    z-index: 10;
    border-radius: 50%;
    backdrop-filter: blur(6px);
    transition: background 0.3s, transform 0.3s;
}

.carousel-btn:hover {
    background: rgba(0, 255, 255, 0.4);
    transform: translateY(-50%) scale(1.1);
}

.carousel-btn.left { left: 15px; }
.carousel-btn.right { right: 15px; }

/* ======== Responsivité ======== */
@media (max-width: 768px) {
    .carousel-track img { max-height: 320px; }
}

@media (max-width: 480px) {
    .carousel-track img { max-height: 220px; }
}
  </style>
  