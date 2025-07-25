<script lang="ts">
  import DividerNeon from '$lib/components/DividerNeon.svelte';
  import ChatBot from '$lib/components/ChatBot.svelte';

  const books = [
    {
      title: "Les Derniers Battements",
      subtitle: "Un roman poignant sur la résilience et la mémoire.",
      publisher: "Élaïa Éditions",
      img: "/images/livres/DB.png",
      link: "https://www.fnac.com/mp51486312/Les-Derniers-Battements",
    },
    {
      title: "J'ai Rendez-Vous Avec la Mort",
      subtitle: "Quand l'heure approche, que reste-t-il à dire ?",
      publisher: "MVO Éditions",
      img: "/images/livres/jram.jpg",
      link: "https://www.cultura.com/p-j-ai-rendez-vous-avec-la-mort-9782494929685.html",
    },
    {
      title: "Entre Deux Mondes",
      subtitle: "Un roman sur le deuil, la vie et les ponts invisibles entre les âmes.",
      publisher: "La Racine des Mots",
      img: "/images/livres/entredeuxmondes.jpg",
      link: "https://www.laracinedesmots.com/catalogue/p/jeanbaptistetharrault-entredeuxmondes",
    },
    {
      title: "Le Crépuscule des Intelligences",
      subtitle: "Un thriller de science-fiction où l'humanité affronte les IA invisibles.",
      publisher: "Élaïa Éditions",
      img: "/images/livres/IA.jpg",
      link: "https://www.amazon.fr/dp/B0DH3SH9QX",
    },
    {
      title: "Lunoo (Série Jeunesse)",
      subtitle: "Un petit être bleu qui apprend à grandir dans un monde poétique.",
      publisher: "KDP Amazon",
      img: "/images/livres/lunoo.png",
      link: "https://www.amazon.fr/s?k=tharrault+jean-baptiste",
    },
  ];
</script>

<!-- Conserve le fond noir élargi -->
<div class="livres-wrapper">
  <div class="livres-container">
    <section class="hero-livres">
      <h1>Découvrez mes livres</h1>
      <p>Romans, récits et jeunesse, publiés chez Élaïa, MVO, La Racine des Mots et en autoédition KDP.</p>
    </section>

    <DividerNeon />

    <section class="books-grid">
      {#each books as book}
        <div class="book-card">
          <img src={book.img} alt={book.title} class="book-cover" />
          <h2>{book.title}</h2>
          <p class="subtitle">{book.subtitle}</p>
          <p class="publisher">{book.publisher}</p>
          <a href={book.link} target="_blank" rel="noopener" class="cta-button">Acheter</a>
        </div>
      {/each}
    </section>

    <DividerNeon />

    <section class="collaboration-section">
      <h2>Vous souhaitez publier votre livre ?</h2>
      <p>Je réalise des couvertures uniques, la mise en page complète de vos livres et vous accompagne dans la publication et la promotion de vos ouvrages. Je travaille en collaboration avec des photographes, illustrateurs et correcteurs expérimentés afin de garantir un résultat de qualité professionnelle.</p>
      <a href="/contact" class="cta-button">Discuter de votre projet</a>
    </section>
  </div>
  <ChatBot customClass="chat-bot" />
</div>

<style>
  /* ===== Fond global ===== */
  .livres-wrapper {
    background-color: #111;
    width: 100%;
    min-height: 100vh;
    padding: 3rem 0;
  }

  .livres-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  /* ===== Hero ===== */
  .hero-livres {
    text-align: center;
    padding: 1.5rem 1rem;
    color: #e0f7ff;
  }

  .hero-livres h1 {
    font-size: 2.2rem;
    color: #00ffff;
    text-shadow: 0 0 20px rgba(0, 255, 255, 0.6);
    margin-bottom: 0.8rem;
  }

  .hero-livres p {
    font-size: 1rem;
    color: #c0fefe;
    max-width: 650px;
    margin: 0 auto;
  }

  /* ===== Grille ===== */
  .books-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.5rem;
    padding: 2rem 0;
  }

  /* ===== Cartes ===== */
  .book-card {
    background: rgba(255, 255, 255, 0.04);
    border-radius: 14px;
    padding: 1rem;
    text-align: center;
    box-shadow: 0 0 15px rgba(0, 255, 255, 0.15);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .book-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
  }

  /* ===== Images ===== */
  .book-cover {
    max-width: 200px;      /* limite largeur */
    width: 100%;
    margin: 0 auto 0.8rem; /* centrage */
    display: block;
    border-radius: 10px;
    object-fit: cover;
    aspect-ratio: 3 / 4;
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.2);
    transition: transform 0.3s ease;
  }

  .book-cover:hover {
    transform: scale(1.03);
  }

  /* ===== Titres & texte ===== */
  .book-card h2 {
    font-size: 1.2rem;
    color: #00ffff;
    margin-bottom: 0.4rem;
  }

  .book-card .subtitle {
    font-size: 0.95rem;
    color: #e0f7ff;
    opacity: 0.9;
    margin-bottom: 0.4rem;
  }

  .book-card .publisher {
    font-size: 0.85rem;
    color: #00ffff;
    margin-bottom: 0.8rem;
  }

  /* ===== Boutons ===== */
  .cta-button {
    display: inline-block;
    padding: 0.5rem 1.2rem;
    background: linear-gradient(135deg, #00f7ff, #0cf);
    color: #000;
    font-weight: bold;
    border-radius: 25px;
    text-decoration: none;
    transition: background 0.3s ease;
  }

  .cta-button:hover {
    background: linear-gradient(135deg, #0cf, #00f7ff);
  }

  /* ===== Responsive ===== */
  @media (max-width: 480px) {
    .book-cover {
      max-width: 160px;   /* plus petit sur mobile */
      margin-bottom: 0.6rem;
    }

    .book-card h2 {
      font-size: 1rem;
    }

    .book-card .subtitle {
      font-size: 0.85rem;
    }
  }
</style>