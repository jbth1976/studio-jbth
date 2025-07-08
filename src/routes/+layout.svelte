<script lang="ts">
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { onMount } from 'svelte';

  let audio: HTMLAudioElement;
  let isPlaying = true; // démarrage sur lecture

  // Démarre automatiquement avec volume muet puis ajuste après 1s
  onMount(() => {
    audio.volume = 0;
    audio.play().then(() => {
      setTimeout(() => {
        audio.volume = 0.3; // Son faible après un délai
      }, 1000);
    }).catch(() => {
      // fallback si bloqué, affiche bouton éteint
      isPlaying = false;
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

<Header />
<Hero />

<!-- Bouton activation/coupure -->
<button on:click={toggleAudio} class="audio-toggle" aria-label="Activer ou couper la musique de fond">
  {#if isPlaying}🔊{:else}🔇{/if}
</button>

<audio bind:this={audio} src="/audios/JBTH FUTUR.mp3" loop preload="auto"></audio>

<main class="page-wrapper">
  <slot />
</main>

<Footer />

<style>
.page-wrapper {
  padding: 2rem;
  max-width: 1280px;
  margin: 0 auto;
}

.audio-toggle {
  position: fixed;
  bottom: 25px;
  left: 25px;
  background: rgba(0, 255, 255, 0.3);
  border: 2px solid rgba(0, 255, 255, 0.5);
  color: #00ffff;
  font-size: 1.8rem;
  border-radius: 50%;
  padding: 0.6rem 0.7rem;
  cursor: pointer;
  backdrop-filter: blur(8px);
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.6);
  transition: background 0.3s, box-shadow 0.3s, transform 0.2s;
  z-index: 9999;
}

.audio-toggle:hover {
  background: rgba(0, 255, 255, 0.5);
  box-shadow: 0 0 25px rgba(0, 255, 255, 0.8);
  transform: scale(1.05);
}
</style>