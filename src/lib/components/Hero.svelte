<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  export let titre: string = "Studio JBTH";
  export let slogan: string = "Créons l’exception, pixel par pixel";

  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;
  let particles: { x: number; y: number; vx: number; vy: number }[] = [];
  const numParticles = 80;

  onMount(() => {
    canvas.width = window.innerWidth;
    canvas.height = document.querySelector('.hero')?.clientHeight ?? 600;
    ctx = canvas.getContext('2d')!;

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce
        if (p.x <= 0 || p.x >= canvas.width) p.vx *= -1;
        if (p.y <= 0 || p.y >= canvas.height) p.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgba(0,255,255,0.7)';
        ctx.fill();
      }

      requestAnimationFrame(animate);
    };

    animate();

    // Resize support
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.querySelector('.hero')?.clientHeight ?? 600;
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  });
</script>

<section class="hero" in:fade={{ duration: 800 }}>
  <canvas bind:this={canvas} class="particle-canvas"></canvas>
  <div class="hero__container">
    <div class="hero__identity">
      <h1 class="hero__title">{titre}</h1>
      <div class="hero__line"></div>
      <p class="hero__slogan">{slogan}</p>
      <p class="hero__tagline">Design • Code • Création</p>
      <a href="/mes-projets" class="hero__button">Réalisations sur mesure</a>
    </div>
  </div>
</section>

<style>
.hero {
  position: relative;
  overflow: hidden;
  padding: 80px 20px 60px;
  text-align: center;
  border-bottom: 1px solid rgba(0, 255, 255, 0.1);
  background: radial-gradient(circle at center, #2a3d4c 0%, #121e2b 100%);
}

.particle-canvas {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  display: block;
}

.hero__container {
  position: relative;
  z-index: 1;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1rem;
}

.hero__identity {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
}

.hero__title {
  font-size: 3rem;
  font-weight: 700;
  color: #00ffff;
  letter-spacing: 1.5px;
  text-shadow: 0 0 16px rgba(0, 255, 255, 0.9);
}

.hero__line {
  width: 120px;
  height: 3px;
  margin: 0.6rem 0 1.2rem;
  background: linear-gradient(to right, #00ffff, #00ccff, #00ffff);
  box-shadow: 0 0 14px rgba(0, 255, 255, 0.7);
  border-radius: 2px;
  animation: pulseLine 2.5s infinite ease-in-out;
}

@keyframes pulseLine {
  0%, 100% { box-shadow: 0 0 12px rgba(0, 255, 255, 0.6); }
  50% { box-shadow: 0 0 24px rgba(0, 255, 255, 1); }
}

.hero__slogan {
  font-size: 1.25rem;
  color: #b8fefe;
  opacity: 0.95;
  text-shadow: 0 0 6px rgba(0, 255, 255, 0.3);
  max-width: 640px;
}

.hero__tagline {
  margin-top: 0.8rem;
  font-size: 1rem;
  color: #66f6ff;
  font-style: italic;
  text-shadow: 0 0 8px rgba(0, 255, 255, 0.4);
  opacity: 0;
  animation: fadeIn 1.5s ease 0.4s forwards;
}

@keyframes fadeIn {
  to { opacity: 1; }
}

.hero__button {
  margin-top: 1.5rem;
  padding: 12px 28px;
  background-color: #00ffff;
  color: #000;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0 0 12px rgba(0, 255, 255, 0.6);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hero__button:hover {
  transform: scale(1.05);
  box-shadow: 0 0 18px rgba(0, 255, 255, 0.9);
}

@media (max-width: 768px) {
  .hero {
    padding: 60px 20px 40px;
  }

  .hero__title {
    font-size: 2.2rem;
  }

  .hero__line {
    width: 80px;
    height: 2px;
    margin: 0.4rem 0 1rem;
  }

  .hero__slogan {
    font-size: 1.05rem;
    padding: 0 1rem;
  }

  .hero__tagline {
    font-size: 0.95rem;
  }
}
</style>