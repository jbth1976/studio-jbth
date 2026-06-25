<script lang="ts">
  import { onMount } from 'svelte';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import ChatBot from '$lib/components/ChatBot.svelte';

  onMount(() => {
    // Animations au scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(el => {
        if (el.isIntersecting) {
          el.target.classList.add('visible');
          observer.unobserve(el.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll(
      'section, .book-card, .service-block, .value-card, .info-card, .collab-block, .devis-section, .form-section, .contact-grid, .collab-quote, .section-head'
    ).forEach(el => {
      el.classList.add('reveal');
      observer.observe(el);
    });
  });
</script>

<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,400;1,600&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet" />

  <script type="application/ld+json">
   {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Studio JBTH",
  "url": "https://studiojbth.fr",
  "logo": "https://studiojbth.fr/images/logo-jbth.png",
  "description": "Studio créatif indépendant spécialisé dans le développement web, le design graphique, l'édition pour auteurs, la création de contenus digitaux et l'accompagnement créatif.",
  "founder": {
    "@type": "Person",
    "name": "Jean-Baptiste Tharrault",
    "url": "https://studiojbth.fr/a-propos"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "contact@studiojbth.fr",
    "contactType": "customer support"
  },
  "inLanguage": ["fr", "en"],
  "sameAs": [
    "https://www.instagram.com/jbth1976/",
    "https://www.linkedin.com/in/jean-baptiste-tharrault",
    "https://studiojbth.fr"
  ]
}
  </script>
</svelte:head>

<Header />

<main>
  <slot />
</main>

<Footer />
<ChatBot />

<style>
main {
  min-height: 60vh;
}
</style>
