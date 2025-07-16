<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import Header from '$lib/components/Header.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Footer from '$lib/components/Footer.svelte';

  let audio: HTMLAudioElement;
  let isPlaying = true;

  onMount(() => {
    audio.volume = 0;
    audio.play().then(() => {
      setTimeout(() => {
        audio.volume = 0.3;
      }, 1000);
    }).catch(() => {
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

<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
</svelte:head>

<Header />

{#if $page.url.pathname !== '/services'}
  <Hero />
  <div class="wave-transition">
    <svg viewBox="0 0 500 100" preserveAspectRatio="none" class="wave-svg">
      <path d="M0,0 C150,100 350,0 500,100 L500,0 L0,0 Z" fill="#0c0c0c" />
    </svg>
  </div>
{/if}

<button on:click={toggleAudio} class="audio-toggle" aria-label="Activer ou couper la musique de fond">
  {#if isPlaying}🔊{:else}🔇{/if}
</button>

<audio bind:this={audio} src="/audios/JBTH FUTUR.mp3" loop preload="auto"></audio>

<main class="page-wrapper { $page.url.pathname === '/services' ? 'no-hero-bg' : '' }">
  <slot />
</main>

<Footer />

<style>
  .page-wrapper {
    padding: 2rem;
    max-width: 1280px;
    margin: 0 auto;
  }

  .no-hero-bg {
    background-color: #ffffff !important;
    position: relative;
    z-index: 1;
  }

  .wave-transition {
    width: 100%;
    overflow: hidden;
    margin-bottom: -1px;
  }

  .wave-svg {
    width: 100%;
    height: 60px;
  }

  .audio-toggle {
    position: fixed;
    bottom: 25px;
    left: 25px;
    background: rgba(0, 188, 212, 0.1);
    border: 2px solid rgba(0, 188, 212, 0.5);
    color: #00bcd4;
    font-size: 1.8rem;
    border-radius: 50%;
    padding: 0.6rem 0.7rem;
    cursor: pointer;
    backdrop-filter: blur(10px);
    box-shadow: 0 0 15px rgba(0, 188, 212, 0.3);
    transition: background 0.3s, box-shadow 0.3s, transform 0.2s;
    z-index: 9999;
  }

  .audio-toggle:hover {
    background: rgba(0, 188, 212, 0.3);
    box-shadow: 0 0 25px rgba(0, 188, 212, 0.6);
    transform: scale(1.08);
  }

  @media screen and (max-width: 768px) {
    .page-wrapper {
      padding: 1.2rem;
    }

    .audio-toggle {
      font-size: 1.4rem;
      padding: 0.4rem 0.5rem;
      bottom: 15px;
      left: 15px;
    }
  }
</style>