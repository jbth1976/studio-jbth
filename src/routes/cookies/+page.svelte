<svelte:head>
  <title>Politique de cookies | Studio JBTH</title>
</svelte:head>

<div class="page">
  <div class="content">
    <span class="kicker">Légal</span>
    <h1>Politique de <em>cookies</em></h1>

    <div class="sections">
      <div class="bloc">
        <h2>Qu'est-ce qu'un cookie ?</h2>
        <p>Un cookie est un petit fichier texte déposé sur votre appareil lors de votre visite sur un site web. Il permet de mémoriser certaines informations pour améliorer votre expérience.</p>
      </div>

      <div class="bloc">
        <h2>Cookies utilisés sur ce site</h2>
        <p>Studio JBTH utilise uniquement des cookies techniques nécessaires au bon fonctionnement du site (navigation, formulaires). Aucun cookie publicitaire ou de tracking tiers n'est utilisé.</p>
      </div>

      <div class="bloc">
        <h2>Cookies d'analyse</h2>
        <p>Des cookies anonymes peuvent être utilisés pour analyser le trafic et améliorer nos contenus. Ces données ne permettent pas de vous identifier personnellement.</p>
      </div>

      <div class="bloc">
        <h2>Gérer vos préférences</h2>
        <p>Vous pouvez configurer votre navigateur pour refuser tout ou partie des cookies. Attention, certaines fonctionnalités du site peuvent être affectées.</p>
      </div>

      <div class="bloc">
        <h2>En savoir plus</h2>
        <p>Pour toute question, consultez notre <a href="/confidentialite">Politique de confidentialité</a> ou contactez-nous à <a href="mailto:contact@studiojbth.com">contact@studiojbth.com</a>.</p>
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

@media (max-width: 600px) {
  .content { padding: 40px 16px 60px; }
}
</style>
