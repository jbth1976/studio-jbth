<script lang="ts">
  let year: number = new Date().getFullYear();
</script>

<footer class="footer">
  <div class="footer-inner">
    <div class="footer-brand">
      <span class="footer-logo">Studio JBTH</span>
      <p class="footer-tagline">Design · Développement · Édition</p>
    </div>

    <nav class="footer-nav">
      <a href="/mentions-legales">Mentions légales</a>
      <a href="/confidentialite">Confidentialité</a>
      <a href="/cookies">Cookies</a>
      <a href="/contact">Contact</a>
      <a href="/ai-access">Accès IA</a>
    </nav>

    <p class="footer-copy">&copy; {year} Studio JBTH</p>
  </div>
</footer>

<style>
.footer {
  background: #2e2a26;
  border-top: .5px solid #3d3830;
  padding: 36px 28px;
}

.footer-inner {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}

.footer-logo {
  font-size: 14px;
  font-weight: 800;
  color: #f4f0ea;
  letter-spacing: -.02em;
  display: block;
  margin-bottom: 4px;
}

.footer-tagline {
  font-size: 10px;
  color: #9A8E7E;
  letter-spacing: .1em;
  text-transform: uppercase;
  margin: 0;
}

.footer-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.footer-nav a {
  font-size: 11px;
  color: #9A8E7E;
  letter-spacing: .04em;
  transition: color 0.2s ease;
}
.footer-nav a:hover {
  color: #C67A35;
}

.footer-copy {
  font-size: 11px;
  color: #6b6158;
  margin: 0;
}

@media (max-width: 768px) {
  .footer-inner {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .footer-nav {
    gap: 14px;
  }
}
</style>
