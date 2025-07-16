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
  <div class="carousel-side desktop-only">
    <Carousel images={leftImages} />
  </div>

  <section class="main-content">
    <h2 class="main-title">Des idées qui prennent vie</h2>
    <p class="subtitle">Sites web, design graphique et créations éditoriales</p>
    <a href="#expertise" class="cta-button">Voir mes expertises</a>
  </section>

  <div class="carousel-side desktop-only">
    <Carousel images={rightImages} />
  </div>
</div>

<DividerNeon />

<section class="expertise-horizontal" id="expertise">
  <h2 class="expertise-heading">Mes domaines d'expertise</h2>

  <div class="expertise-video-grid">
    {#each [1, 2, 3, 4, 5, 6] as n}
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
  .page-layout {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 2rem;
    max-width: 1440px;
    margin: 0 auto;
    padding: 3rem 2rem;
    align-items: start;
  }

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

  .main-content {
    text-align: center;
    padding: 2rem 0;
  }

  .main-title {
    font-size: 2.8rem;
    font-weight: 700;
    color: #111;
    margin-bottom: 1rem;
  }

  .subtitle {
    font-size: 1.25rem;
    font-weight: 500;
    color: #444;
    margin-bottom: 2rem;
  }

  .cta-button {
    background-color: #00ffff;
    color: #000;
    font-weight: 600;
    padding: 0.75rem 1.5rem;
    border-radius: 999px;
    box-shadow: 0 0 15px rgba(0, 255, 255, 0.4);
    transition: all 0.3s ease;
    text-decoration: none;
  }

  .cta-button:hover {
    transform: scale(1.05);
    box-shadow: 0 0 25px rgba(0, 255, 255, 0.6);
  }

  .expertise-horizontal {
    margin: 5rem auto;
    max-width: 1200px;
    padding: 0 1rem;
    text-align: center;
  }

  .expertise-heading {
    font-size: 2.2rem;
    font-weight: bold;
    color: #111;
    margin-bottom: 2.5rem;
    position: relative;
  }

  .expertise-heading::after {
    content: "";
    display: block;
    width: 60%;
    height: 3px;
    margin: 8px auto 0;
    background: linear-gradient(to right, #00f5ff, #00cfff);
    box-shadow: 0 0 8px rgba(0, 255, 255, 0.4);
  }

  .expertise-video-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
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
    max-width: 360px;
    border-radius: 16px;
    box-shadow: 0 0 25px rgba(0, 255, 255, 0.2);
    object-fit: cover;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .expertise-video:hover {
    transform: scale(1.02);
    box-shadow: 0 0 40px rgba(0, 255, 255, 0.5);
  }

  .expertise-grid-horizontal {
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    gap: 2rem;
    margin-top: 2rem;
  }

  .card {
    background: #101215;
    padding: 2.5rem;
    flex: 1 1 0;
    max-width: 360px;
    border-radius: 16px;
    box-shadow: 0 0 25px rgba(0, 255, 255, 0.1);
    border: 1px solid rgba(0, 255, 255, 0.08);
    color: #eafcff;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
  }

  .card:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 40px rgba(0, 255, 255, 0.25);
    background: #1c1f22;
  }

  .card h3 {
    font-size: 1.6rem;
    color: #00f5ff;
    margin-bottom: 0.8rem;
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
  }

  .card p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #c6f7ff;
    opacity: 0.95;
  }

  /* ----------- Responsive Design ----------- */
  @media (max-width: 1024px) {
    .expertise-grid-horizontal {
      flex-wrap: wrap;
    }
  }

  @media (max-width: 768px) {
    .carousel-side {
      display: none;
    }

    .expertise-video-grid {
      grid-template-columns: 1fr;
    }

    .expertise-video-grid .video-container:nth-of-type(n+2) {
      display: none;
    }

    .expertise-grid-horizontal {
      flex-direction: column;
      align-items: center;
    }

    .main-title {
      font-size: 2rem;
    }

    .subtitle {
      font-size: 1.1rem;
    }
  }
</style>
