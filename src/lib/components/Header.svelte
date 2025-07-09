<script lang="ts">
  export const title = "Studio JBTH";
  let menuOpen = false;
</script>

<header class="header">
  <div class="header__logo">
    <a href="/">
      <img src="/logo.jpeg" alt="Logo Studio JBTH" width="80" height="80" loading="lazy" />
    </a>
  </div>

  <div class="header__center">
    <strong>L’IA</strong> transforme vos idées en <span class="gradient-text">expériences</span>
  </div>

  <!-- Burger -->
  <button class="burger" on:click={() => menuOpen = !menuOpen} aria-label="Menu" class:open={menuOpen}>
    <span></span>
    <span></span>
    <span></span>
  </button>

  <nav class="header__nav {menuOpen ? 'open' : ''}">
    <ul class="nav__list">
      <li><a class="nav__link" href="/" on:click={() => menuOpen = false}>Accueil</a></li>
      <li><a class="nav__link" href="/about" on:click={() => menuOpen = false}>À Propos</a></li>
      <li><a class="nav__link" href="/services" on:click={() => menuOpen = false}>Services</a></li>
      <li><a class="nav__link" href="/mes-projets" on:click={() => menuOpen = false}>Réalisations sur mesure</a></li>
      <li><a class="nav__link" href="/livres" on:click={() => menuOpen = false}>Livres</a></li>
      <li><a class="nav__link" href="/contact" on:click={() => menuOpen = false}>Contact</a></li>
    </ul>
  </nav>
</header>

<style>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(12px);
  position: sticky;
  top: 0;
  z-index: 999;
  border-bottom: 1px solid rgba(0, 255, 255, 0.2);
}

.header__logo img {
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background: #0d0d0d;
  box-shadow: 0 0 12px rgba(0, 255, 255, 0.3);
  filter: drop-shadow(0 0 5px rgba(0, 255, 255, 0.5));
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.header__logo img:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.6);
}

.header__center {
  flex: 1;
  text-align: center;
  font-family: 'Orbitron', sans-serif;
  font-size: 1.6rem;
  text-transform: uppercase;
  color: #00ffff;
  text-shadow: 0 0 8px rgba(0, 255, 255, 0.4);
}
.header__center strong {
  display: inline-block;
  animation: vibrateVisible 2s infinite;
}
.gradient-text {
  background: linear-gradient(90deg, #00ffff, #0fffcf, #00ffff);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-size: 200% auto;
  animation: shimmer 4s linear infinite;
}

.header__nav {
  transition: max-height 0.3s ease, opacity 0.3s ease;
}
.nav__list {
  display: flex;
  gap: 1.2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
.nav__link {
  color: white;
  font-weight: 600;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
}
.nav__link::after {
  content: "";
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 2px;
  background: #00ffff;
  transition: width 0.3s ease;
}
.nav__link:hover {
  color: #00ffff;
}
.nav__link:hover::after {
  width: 100%;
}

.burger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1001;
}
.burger span {
  display: block;
  height: 3px;
  width: 100%;
  background: #00ffff;
  border-radius: 2px;
  transition: all 0.3s ease;
}
.burger.open span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.burger.open span:nth-child(2) {
  opacity: 0;
}
.burger.open span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

@keyframes shimmer {
  0% { background-position: -100% }
  100% { background-position: 200% }
}
@keyframes vibrateVisible {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  20% { transform: translate(-0.5px, 0.5px) rotate(-0.1deg); }
  40% { transform: translate(0.5px, -0.5px) rotate(0.1deg); }
  60% { transform: translate(-0.3px, 0.3px) rotate(-0.05deg); }
  80% { transform: translate(0.3px, -0.3px) rotate(0.05deg); }
}

@media screen and (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: center;
    padding: 0.8rem 1rem;
  }
  .header__logo img {
    width: 55px;
    height: 55px;
  }
  .header__center {
    font-size: 1.2rem;
    margin: 0.5rem 0;
    text-align: center;
    width: 100%;
  }
  .burger {
    display: flex;
    align-self: flex-end;
    margin: 0.5rem 0;
  }
  .header__nav {
    width: 100%;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: max-height 0.4s ease, opacity 0.4s ease;
  }
  .header__nav.open {
    max-height: 500px;
    opacity: 1;
  }
  .nav__list {
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    padding: 0.5rem 0;
  }
}
</style>