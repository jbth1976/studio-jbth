<script lang="ts">
  let year: number = new Date().getFullYear();
</script>

<footer class="footer">
  <div class="footer__content">
    <p class="footer__copyright">
      &copy; {year} Studio JBTH. Tous droits réservés.
    </p>

    <nav class="footer__nav">
      <ul class="footer__links">
        <li><a href="/mentions-legales">Mentions Légales</a></li>
        <li><a href="/confidentialite">Confidentialité</a></li>
        <li><a href="/cookies">Cookies</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </div>
</footer>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
  }

  .footer {
    background: rgba(0, 0, 0, 0.85);
    color: white;
    padding: 2rem 1.5rem;
    backdrop-filter: blur(10px);
    border-top: 1px solid rgba(0, 255, 255, 0.2);
    width: 100%;
    box-sizing: border-box;
  }

  .footer__content {
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.25rem;
  }

  .footer__copyright {
    font-size: 0.95rem;
    margin: 0;
  }

  .footer__nav {
    width: 100%;
  }

  .footer__links {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin: 0;
    padding: 0;
  }

  .footer__links a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;
  }

  .footer__links a:hover {
    color: cyan;
  }

  /* Mobile : marge latérale harmonieuse, centrage propre */
  @media (max-width: 420px) {
    .footer {
      padding: 2rem 1rem;
    }

    .footer__links {
      flex-direction: column;
      gap: 0.75rem;
    }

    .footer__content {
      gap: 1rem;
    }
  }
</style>