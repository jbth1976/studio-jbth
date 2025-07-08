<script lang="ts">
  import Carousel from '$lib/components/Carousel.svelte';
  import DividerNeon from '$lib/components/DividerNeon.svelte';
  import ChatBot from '$lib/components/ChatBot.svelte';

  const leftImages = [
    '/images/dev-holographique.jpeg',
    '/images/constellation-code.jpeg',
    '/images/livre.jpeg'
  ];

  const rightImages = [
    '/images/esprit-creatif-lumineux.jpeg',
    '/images/silhouette-constellations.jpeg',
    '/images/cerveau-reseau-creation.jpeg'
  ];
</script>

<div class="page-layout">
  <div class="carousel-side">
    <Carousel images={leftImages} />
  </div>

  <section class="main-content">
    <h2 class="main-title">Des idées qui prennent vie</h2>
    <p class="subtitle">Sites web, design graphique et créations éditoriales</p>
  </section>

  <div class="carousel-side">
    <Carousel images={rightImages} />
  </div>
</div>

<DividerNeon />

<section class="expertise-horizontal">
  <h2>Mes domaines d'expertise</h2>

  <div class="expertise-video-grid">
    {#each [1,2,3,4,5,6] as n}
      <div class="video-container">
        <video src={`/videos/img${n}.mp4`} autoplay muted loop playsinline class="expertise-video"></video>
      </div>
    {/each}
  </div>

  <div class="expertise-grid-horizontal">
    <div class="card">
      <h3>Développement</h3>
      <p>Création de sites web rapides, responsives et adaptés à vos besoins.</p>
    </div>
    <div class="card">
      <h3>Graphisme</h3>
      <p>Designs uniques et percutants pour renforcer votre identité visuelle.</p>
    </div>
    <div class="card">
      <h3>Livres</h3>
      <p>Accompagnement dans l'écriture, la mise en page et la publication d’ouvrages originaux.</p>
    </div>
  </div>
</section>

<ChatBot customClass="chat-bot" />

<style>
  /* ====== Layout principal ====== */
  .page-layout {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 2rem;
    max-width: 1440px;
    margin: 0 auto;
    padding: 3rem 2rem;
    align-items: start;
  }
  
  /* ====== Carrousel latéral ====== */
  .carousel-side {
    width: 240px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .carousel-side :global(.carousel) {
    width: 100%;
    height: 250px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
  }
  
  .carousel-side :global(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  /* ====== Contenu principal ====== */
  .main-content {
    text-align: center;
    padding: 2rem 0;
  }
  
  .main-title {
    font-size: 2.4rem;
    color: #00ffff;
    text-shadow: 0 0 20px rgba(0, 255, 255, 0.6);
    margin-bottom: 1rem;
  }
  
  .subtitle {
    font-size: 1.2rem;
    color: #c0fefe;
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
  }
  
  /* ====== Section Expertise ====== */
  .expertise-horizontal {
    margin: 5rem auto;
    max-width: 1200px;
    padding: 0 1rem;
    text-align: center;
  }
  
  .expertise-horizontal h2 {
    font-size: 2rem;
    color: #00ffff;
    text-shadow: 0 0 12px rgba(0, 255, 255, 0.5);
    margin-bottom: 2.5rem;
  }
  
  /* ====== Grille des vidéos ====== */
  .expertise-video-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    justify-items: center;
    margin-bottom: 4rem;
  }
  
  .video-container {
    position: relative;
  }
  
  .video-container::after {
    content: "";
    position: absolute;
    bottom: 12px;
    right: 12px;
    width: 50px;
    height: 50px;
    background: url('/images/logo.png') no-repeat center center;
    background-size: contain;
    opacity: 0.95;
    z-index: 10;
    pointer-events: none;
    filter: drop-shadow(0 0 6px rgba(0, 255, 255, 0.7));
  }
  
  .expertise-video {
    width: 100%;
    max-width: 400px;
    border-radius: 16px;
    box-shadow: 0 0 25px rgba(0, 255, 255, 0.3);
    object-fit: cover;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .expertise-video:hover {
    transform: scale(1.02);
    box-shadow: 0 0 40px rgba(0, 255, 255, 0.5);
  }
  
  /* ====== Grille des cartes ====== */
  .expertise-grid-horizontal {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
  }
  
  .card {
    background: rgba(255, 255, 255, 0.08);
    padding: 2.5rem;
    width: 360px;
    border-radius: 16px;
    box-shadow: 0 0 25px rgba(0, 255, 255, 0.25);
    color: #ffffff;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
  }
  
  .card:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 40px rgba(0, 255, 255, 0.5);
    background: rgba(255, 255, 255, 0.12);
  }
  
  .card h3 {
    font-size: 1.5rem;
    color: #00ffff;
    margin-bottom: 0.6rem;
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.4);
  }
  
  .card p {
    font-size: 1.05rem;
    line-height: 1.6;
    color: #e0f7ff;
    opacity: 0.95;
  }
  
  /* ====== Responsive ====== */
  @media (max-width: 1024px) {
    .page-layout {
      display: flex;
      flex-direction: column;
      padding: 2rem 1rem;
    }
    .carousel-side {
      margin-bottom: 1.5rem;
    }
    .card {
      width: 90%;
      padding: 2rem;
    }
  }
  </style>