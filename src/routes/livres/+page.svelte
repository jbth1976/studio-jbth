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
    
    <ChatBot customClass="chat-bot" />
    
    <style>
    /* ===== Hero Section ===== */
    .hero-livres {
      text-align: center;
      padding: 4rem 1rem 2rem;
      color: #e0f7ff;
    }
    
    .hero-livres h1 {
      font-size: 2.5rem;
      color: #00ffff;
      text-shadow: 0 0 20px rgba(0, 255, 255, 0.6);
      margin-bottom: 1rem;
    }
    
    .hero-livres p {
      font-size: 1.1rem;
      color: #c0fefe;
      max-width: 700px;
      margin: 0 auto;
    }
    
    /* ===== Books Grid ===== */
    .books-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 1.8rem;
      padding: 2rem 1rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    /* ===== Book Card ===== */
    .book-card {
      background: rgba(255, 255, 255, 0.04);
      border-radius: 14px;
      padding: 1rem;
      text-align: center;
      box-shadow: 0 0 15px rgba(0, 255, 255, 0.15);
      transition: transform 0.3s, box-shadow 0.3s, background 0.3s;
    }
    
    .book-card:hover {
      transform: translateY(-6px);
      background: rgba(255, 255, 255, 0.07);
      box-shadow: 0 0 25px rgba(0, 255, 255, 0.3);
    }
    
    /* ===== Book Cover ===== */
    .book-cover {
      width: 100%;
      height: 320px;
      object-fit: cover;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 255, 255, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .book-cover:hover {
      transform: scale(1.02);
      box-shadow: 0 0 20px rgba(0, 255, 255, 0.25);
    }
    
    /* ===== Text ===== */
    .book-card h2 {
      font-size: 1.3rem;
      color: #00ffff;
      margin: 0.8rem 0 0.4rem;
    }
    
    .book-card .subtitle {
      font-size: 1rem;
      color: #e0f7ff;
      opacity: 0.9;
      margin-bottom: 0.5rem;
    }
    
    .book-card .publisher {
      font-size: 0.9rem;
      color: #00ffff;
      opacity: 0.8;
      margin-bottom: 1rem;
    }
    
    /* ===== CTA Button ===== */
    .cta-button {
      display: inline-block;
      padding: 0.6rem 1.2rem;
      background: linear-gradient(135deg, #00f7ff, #0cf);
      color: #000;
      font-weight: 600;
      border-radius: 25px;
      text-decoration: none;
      cursor: pointer;
      transition: transform 0.3s, background 0.3s;
    }
    
    .cta-button:hover {
      transform: scale(1.05);
      background: linear-gradient(135deg, #0cf, #00f7ff);
    }
    
    /* ===== Collaboration Section ===== */
    .collaboration-section {
      text-align: center;
      padding: 4rem 1rem;
      max-width: 700px;
      margin: 0 auto;
    }
    
    .collaboration-section h2 {
      font-size: 2rem;
      color: #00ffff;
      text-shadow: 0 0 15px rgba(0, 255, 255, 0.4);
      margin-bottom: 1rem;
    }
    
    .collaboration-section p {
      font-size: 1.1rem;
      color: #c0fefe;
      max-width: 600px;
      margin: 0 auto 2rem;
    }
    
    /* ===== Responsive ===== */
    @media (max-width: 768px) {
      .hero-livres h1 { font-size: 2rem; }
      .collaboration-section h2 { font-size: 1.6rem; }
    }
    
    @media (max-width: 480px) {
      .book-cover { height: 260px; }
    }
    </style>