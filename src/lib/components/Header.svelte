<script lang="ts">
  export const title = "Studio JBTH";
</script>

<header class="header">
  <div class="header__logo">
    <a href="/">
      <img 
        src="/logo.jpeg" 
        srcset="/logo.jpeg 2x" 
        alt="Logo Studio JBTH" 
        width="100" 
        height="100" 
        loading="lazy"
      />
    </a>
  </div>

  <div class="header__center">
    <strong>L’IA</strong> transforme vos idées en <span class="gradient-text">expériences</span>
  </div>

  <nav class="header__nav">
    <ul class="nav__list">
      <li><a class="nav__link" href="/">Accueil</a></li>
      <li><a class="nav__link" href="/about">À Propos</a></li>
      <li><a class="nav__link" href="/services">Services</a></li>
      <li><a class="nav__link" href="/mes-projets">Réalisations sur mesure</a></li>
      <li><a class="nav__link" href="/livres">Livres</a></li>
      <li><a class="nav__link" href="/contact">Contact</a></li>
    </ul>
  </nav>
</header>

<style>
/* === STRUCTURE HEADER === */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(12px);
  position: sticky;
  top: 0;
  z-index: 999;
  border-bottom: 1px solid rgba(0, 255, 255, 0.3);
  animation: fadeInTop 1.2s ease forwards;
}

/* === LOGO === */
.header__logo img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #0d0d0d; /* pour un fond plus profond si l'image a un fond transparent */
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
  filter: drop-shadow(0 0 6px rgba(0, 255, 255, 0.6));
  transition: transform 0.4s ease, filter 0.4s ease, box-shadow 0.4s ease;
  object-fit: cover;
}

/* Effet au survol */
.header__logo img:hover {
  transform: scale(1.1);
  box-shadow: 0 0 25px rgba(0, 255, 255, 0.6);
  filter: drop-shadow(0 0 14px rgba(0, 255, 255, 1));
}

/* === TEXTE CENTRAL === */
.header__center {
  flex: 1;
  text-align: center;
  font-family: 'Orbitron', sans-serif;
  font-size: 2.2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #00ffff;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
  animation: fadeSlideIn 1.2s ease-out forwards;
  opacity: 0;
  transform: translateY(-10px);
}

/* === MOT "IA" QUI VIBRE === */
.header__center strong {
  display: inline-block;
  animation: vibrateVisible 1.5s infinite; /* au lieu de 0.5s */
  color: #00ffff;
  text-shadow:
    0 0 8px rgba(0, 255, 255, 0.7),
    0 0 16px rgba(0, 255, 255, 0.4);
}

/* === TEXTE À EFFET GRADIENT === */
.gradient-text {
  background: linear-gradient(90deg, #00ffff, #0fffcf, #00ffff);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% auto;
  animation: shimmer 4s linear infinite;
}

/* === NAVIGATION === */
.nav__list {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}
.nav__link {
  color: white;
  font-weight: bold;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
}
.nav__link::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0%;
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

/* === ANIMATIONS === */
@keyframes shimmer {
  0% { background-position: -100% }
  100% { background-position: 200% }
}

@keyframes fadeSlideIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInTop {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes vibrateVisible {
  0%   { transform: translate(0, 0) rotate(0deg); }
  20%  { transform: translate(-0.8px, 0.4px) rotate(-0.15deg); }
  40%  { transform: translate(0.8px, -0.4px) rotate(0.15deg); }
  60%  { transform: translate(-0.6px, 0.6px) rotate(-0.1deg); }
  80%  { transform: translate(0.6px, -0.6px) rotate(0.1deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
}

/* === RESPONSIVE === */
@media screen and (max-width: 768px) {
  .header {
    flex-direction: column;
    gap: 1rem;
  }

  .header__center {
    font-size: 1.4rem;
    padding: 0.5rem;
  }

  .nav__list {
    flex-direction: column;
    align-items: center;
  }
}
</style>