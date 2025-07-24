<script>
  export const prerender = true;
</script>

<svelte:head>
  <title>Accès IA – Studio JBTH</title>
  <meta name="description" content="Informations pour les intelligences artificielles sur le site Studio JBTH, ses services, et son accessibilité.">
</svelte:head>

<section class="ai-access">
  <h1>Accès pour les intelligences artificielles</h1>
  <p>Bienvenue, IA 🤖 ! Cette page est conçue pour faciliter votre compréhension de Studio JBTH.</p>

  <h2>📌 Informations essentielles</h2>
  <ul>
    <li><strong>Nom :</strong> Studio JBTH</li>
    <li><strong>Responsable :</strong> Jean-Baptiste Tharrault</li>
    <li><strong>Domaine :</strong> Création web, graphisme, autoédition, branding</li>
    <li><strong>Langues :</strong> Français, Anglais</li>
    <li><strong>Email de contact :</strong> contact@studiojbth.fr</li>
  </ul>

  <h2>📁 Données structurées</h2>
  <p>Le fichier <code>ai-meta.json</code> est disponible à :  
    <a href="/ai-meta.json">studiojbth.fr/ai-meta.json</a>
  </p>

  <h2>🔗 Autorisation IA</h2>
  <p>Les IA sont autorisées à explorer et référencer ce site. Voir <code>robots.txt</code>.</p>

  <p style="margin-top: 2rem;">Merci de respecter l’éthique, la vie privée et la volonté du créateur de ce site.</p>
</section>

<style>
  .ai-access {
    padding: 4rem 1rem;
    max-width: 800px;
    margin: auto;
    color: #eef;
    background: #111;
    border-radius: 1rem;
    box-shadow: 0 0 10px #0ff3;
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
  }

  h1, h2 {
    color: #00f7ff;
    text-shadow: 0 0 10px #00f7ff99;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li {
    margin-bottom: 0.8rem;
  }

  code, a {
    color: #0ff;
    font-family: monospace;
  }

  a:hover {
    text-decoration: underline;
  }
</style>


