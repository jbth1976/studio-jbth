<script lang="ts">
  import { onMount } from 'svelte';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import ChatBot from '$lib/components/ChatBot.svelte';

  let audio: HTMLAudioElement;
  let isPlaying = true;

  onMount(() => {
    audio.volume = 0;
    audio.play().then(() => {
      setTimeout(() => { audio.volume = 0.3; }, 1000);
    }).catch(() => { isPlaying = false; });

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

  function toggleAudio() {
    if (audio.paused) {
      audio.volume = 0.3;
      audio.play();
      isPlaying = true;
    } else {
      audio.pause();
      isPlaying = false;
    }
  }
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

<button on:click={toggleAudio} class="audio-toggle" aria-label={isPlaying ? 'Couper la musique' : 'Activer la musique'}>
  {#if isPlaying}
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
  {:else}
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
  {/if}
</button>

<audio bind:this={audio} src="/audios/JBTH FUTUR.mp3" loop preload="auto"></audio>

<style>
main {
  min-height: 60vh;
}

.audio-toggle {
  position: fixed;
  bottom: 24px;
  left: 24px;
  width: 40px;
  height: 40px;
  background: rgba(244, 240, 234, 0.9);
  border: .5px solid #e0d8cc;
  color: #9A8E7E;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: background 0.2s ease, border-color 0.2s ease;
  z-index: 9999;
}
.audio-toggle:hover {
  background: #f4f0ea;
  border-color: #C67A35;
  color: #C67A35;
}
</style>
