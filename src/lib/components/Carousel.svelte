<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  export let images: string[] = []; // Images passées en prop (typed)

  let currentIndex = 0;
  let interval: ReturnType<typeof setInterval>; // Typage correct

  function next() {
    currentIndex = (currentIndex + 1) % images.length;
  }

  function prev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  }

  onMount(() => {
    interval = setInterval(next, 4000); // toutes les 4 secondes
  });

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<div class="carousel">
  <button class="nav-button left" on:click={prev}>&#9664;</button>
  <img src={images[currentIndex]} alt="Présentation Studio JBTH" />
  <button class="nav-button right" on:click={next}>&#9654;</button>
</div>

<style>
  .carousel {
    position: relative;
    width: 300px;
    height: 200px;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.5s ease-in-out;
  }

  .nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: #00ffff;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    font-size: 1.5rem;
    z-index: 1;
  }

  .nav-button.left {
    left: 10px;
  }

  .nav-button.right {
    right: 10px;
  }
 

</style>