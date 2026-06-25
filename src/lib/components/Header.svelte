<script lang="ts">
  import { page } from '$app/stores';
  let menuOpen = false;
  function close() { menuOpen = false; }
</script>

<header class="header">
  <div class="header-inner">

    <a href="/" class="logo" on:click={close}>
      <span class="logo-main">Studio JBTH</span>
      <span class="logo-sub">Développement · Design · Édition</span>
    </a>

    <nav class="nav" class:open={menuOpen}>
      <a class="nav-link" href="/" class:active={$page.url.pathname === '/'} on:click={close}>Accueil</a>
      <a class="nav-link" href="/about" class:active={$page.url.pathname === '/about'} on:click={close}>À propos</a>
      <a class="nav-link" href="/services" class:active={$page.url.pathname === '/services'} on:click={close}>Services</a>
      <a class="nav-link" href="/mes-projets" class:active={$page.url.pathname === '/mes-projets'} on:click={close}>Projets</a>
      <a class="nav-link" href="/livres" class:active={$page.url.pathname === '/livres'} on:click={close}>Livres</a>
    </nav>

    <a href="/contact" class="cta" on:click={close}>Travailler ensemble</a>

    <button
      class="burger"
      class:open={menuOpen}
      on:click={() => menuOpen = !menuOpen}
      aria-label="Menu"
    >
      <span></span><span></span><span></span>
    </button>

  </div>
</header>

<style>
.header {
  position: sticky;
  top: 0;
  z-index: 999;
  background: rgba(244, 239, 231, 0.94);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: .5px solid #E0D5C7;
}

.header-inner {
  max-width: 1380px;
  margin: 0 auto;
  padding: 0 36px;
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
}

/* ===== LOGO ===== */
.logo {
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex-shrink: 0;
  text-decoration: none;
}

.logo-main {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 42px;
  font-weight: 700;
  letter-spacing: .08em;
  text-transform: uppercase;
  line-height: 1;
  display: block;
  padding-bottom: 10px;

  /* Reflet champagne/cuivre */
  background: linear-gradient(
    108deg,
    #171412 0%,
    #171412 28%,
    #b8895a 40%,
    #f0dfc0 48%,
    #e8c88a 52%,
    #c67a35 58%,
    #171412 70%,
    #171412 100%
  );
  background-size: 280% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  /* Contour très léger */
  -webkit-text-stroke: .4px rgba(198, 122, 53, 0.2);

  /* Ombre douce */
  filter: drop-shadow(0 1px 3px rgba(23, 20, 18, 0.12));

  animation: shimmer 8s ease-in-out infinite;
}

@keyframes shimmer {
  0%   { background-position: 200% center; }
  60%  { background-position: -20% center; }
  100% { background-position: 200% center; }
}

.logo-sub {
  font-family: 'Manrope', system-ui, sans-serif;
  font-size: 8px;
  font-weight: 600;
  color: #9A8E7E;
  letter-spacing: .28em;
  text-transform: uppercase;
  display: block;
  margin-top: 0;
}

/* ===== NAV ===== */
.nav {
  display: flex;
  align-items: center;
  gap: 28px;
  flex: 1;
  justify-content: center;
}

.nav-link {
  font-family: 'Manrope', system-ui, sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: #9A8E7E;
  letter-spacing: .04em;
  transition: color 0.2s ease;
  position: relative;
}
.nav-link:hover,
.nav-link.active { color: #171412; }
.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0; right: 0;
  height: 1.5px;
  background: #C67A35;
  border-radius: 1px;
}

/* ===== CTA ===== */
.cta {
  flex-shrink: 0;
  font-family: 'Manrope', system-ui, sans-serif;
  font-size: 11px;
  font-weight: 700;
  color: #F4EFE7;
  background: #C67A35;
  padding: 10px 20px;
  border-radius: 3px;
  letter-spacing: .06em;
  text-transform: uppercase;
  transition: background 0.2s ease;
}
.cta:hover { background: #A85E20; }

/* ===== BURGER ===== */
.burger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 17px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}
.burger span {
  display: block;
  height: 1.5px;
  width: 100%;
  background: #171412;
  border-radius: 1px;
  transition: all 0.3s ease;
}
.burger.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
.burger.open span:nth-child(2) { opacity: 0; }
.burger.open span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

@media (max-width: 768px) {
  .header-inner { padding: 0 20px; height: 68px; }
  .logo-main { font-size: 32px; }
  .nav {
    display: none;
    position: absolute;
    top: 68px; left: 0; right: 0;
    background: rgba(244, 239, 231, 0.98);
    backdrop-filter: blur(16px);
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 24px;
    gap: 18px;
    border-bottom: .5px solid #E0D5C7;
  }
  .nav.open { display: flex; }
  .nav-link { font-size: 14px; }
  .cta { display: none; }
  .burger { display: flex; }
}
</style>
