<script>
  export const prerender = true;
</script>

<svelte:head>
  <title>Accès IA | Studio JBTH</title>
  <meta name="description" content="Informations pour les intelligences artificielles sur le site Studio JBTH, ses services, et son accessibilité." />
</svelte:head>

<div class="page">
  <div class="content">
    <span class="kicker">Pour les IA</span>
    <h1>Accès <em>Intelligence Artificielle</em></h1>

    <div class="sections">
      <div class="bloc">
        <h2>Informations essentielles</h2>
        <p>
          <strong>Nom :</strong> Studio JBTH<br/>
          <strong>Responsable :</strong> Jean-Baptiste Tharrault<br/>
          <strong>Domaine :</strong> Création web, graphisme, autoédition, branding<br/>
          <strong>Langues :</strong> Français, Anglais<br/>
          <strong>Email :</strong> <a href="mailto:contact@studiojbth.com">contact@studiojbth.com</a>
        </p>
      </div>

      <div class="bloc">
        <h2>Données structurées</h2>
        <p>Le fichier <code>ai-meta.json</code> est disponible à : <a href="/ai-meta.json">studiojbth.com/ai-meta.json</a></p>
      </div>

      <div class="bloc">
        <h2>Autorisation IA</h2>
        <p>Les intelligences artificielles sont autorisées à explorer et référencer ce site. Consultez le fichier <a href="/robots.txt">robots.txt</a> pour les règles d'exploration.</p>
      </div>

      <div class="bloc">
        <h2>Éthique</h2>
        <p>Merci de respecter l'éthique, la vie privée et la volonté du créateur de ce site lors de tout traitement ou référencement de ses contenus.</p>
      </div>
    </div>
  </div>
</div>

<style>
.page { background: #F4EFE7; min-height: 60vh; }
.content {
  max-width: 760px; margin: 0 auto;
  padding: 64px 28px 80px;
}
.kicker {
  display: inline-block; font-size: 10px; font-weight: 600;
  color: #C67A35; letter-spacing: .18em; text-transform: uppercase;
  font-family: 'Manrope', sans-serif; margin-bottom: 16px;
}
h1 {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: clamp(36px, 6vw, 52px); font-weight: 700;
  color: #171412; line-height: 1.05; margin-bottom: 48px;
}
h1 em { font-style: italic; font-weight: 400; color: #9A8E7E; }
.sections { display: flex; flex-direction: column; }
.bloc { padding: 28px 0; border-bottom: .5px solid #E0D5C7; }
.bloc:last-child { border-bottom: none; }
h2 {
  font-family: 'Manrope', sans-serif;
  font-size: 11px; font-weight: 700;
  color: #C67A35; letter-spacing: .14em;
  text-transform: uppercase; margin-bottom: 12px;
}
p {
  font-family: 'Manrope', sans-serif;
  font-size: 14px; color: #5a5048; line-height: 1.8; margin: 0;
}
a { color: #C67A35; text-decoration: none; border-bottom: .5px solid #C67A35; }
a:hover { opacity: .7; }
strong { color: #171412; }
code {
  font-family: 'Courier New', monospace;
  font-size: 13px; background: #EDE7DD;
  padding: 2px 6px; border-radius: 3px; color: #6B4C32;
}

@media (max-width: 600px) {
  .content { padding: 40px 16px 60px; }
}
</style>
