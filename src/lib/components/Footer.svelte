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
  .footer {
    background: rgba(0, 0, 0, 0.85);
    color: white;
    padding: 1.5rem 2rem;
    backdrop-filter: blur(10px);
    border-top: 1px solid rgba(0, 255, 255, 0.2);
    width: 100%;
  }

  .footer__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1280px;
    margin: 0 auto;
    gap: 1rem;
  }

  .footer__copyright {
    margin: 0;
    font-size: 0.95rem;
  }

  .footer__links {
    list-style: none;
    display: flex;
    gap: 1.5rem;
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

  @media (max-width: 768px) {
    .footer__content {
      flex-direction: column;
      text-align: center;
    }

    .footer__links {
      flex-direction: column;
      gap: 0.75rem;
    }
  }
</style>