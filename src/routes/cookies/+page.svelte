<script>
  // Ne pas importer Header ou Footer ici si déjà gérés dans +layout.svelte
</script>

<main class="cookie-wrapper">
  <div class="cookie-content">
    <h1>Politique de Cookies</h1>
    <p>
      Cette page explique comment <strong>Studio JBTH</strong> utilise les cookies pour améliorer votre expérience sur notre site.
    </p>
    <p>
      Vous pouvez configurer vos préférences de cookies ou les refuser dans les paramètres de votre navigateur.
    </p>
    <p>
      Nous utilisons des cookies pour l’analyse de trafic, l’amélioration du contenu et le bon fonctionnement de certaines fonctionnalités du site.
    </p>
    <p>
      Pour plus d'informations, veuillez consulter notre <a href="/confidentialite">politique de confidentialité</a>.
    </p>
  </div>
</main>

<style>
  .cookie-wrapper {
    min-height: 100vh;
    background-color: #111;
    padding: 3rem 1rem 4rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .cookie-content {
    max-width: 800px;
    background-color: #000;
    padding: 2.5rem;
    border-radius: 12px;
    box-shadow: 0 0 25px rgba(0, 255, 255, 0.15);
    color: #e0f7ff;
    line-height: 1.7;
    font-size: 1.05rem;
  }

  .cookie-content h1 {
    color: #00f7ff;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
    text-shadow: 0 0 12px #00f7ff;
  }

  .cookie-content a {
    color: #00ffff;
    text-decoration: underline;
  }

  .cookie-content p {
    margin-bottom: 1.2rem;
  }

  @media (max-width: 600px) {
    .cookie-content {
      padding: 1.5rem;
      font-size: 1rem;
    }

    .cookie-content h1 {
      font-size: 1.6rem;
    }
  }
</style>