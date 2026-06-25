<svelte:head>
  <title>Mentions légales | Studio JBTH</title>
</svelte:head>

<div class="page">
  <div class="content">
    <span class="kicker">Légal</span>
    <h1>Mentions <em>légales</em></h1>

    <div class="sections">
      <div class="bloc">
        <h2>1. Éditeur du site</h2>
        <p>
          Studio JBTH<br/>
          THARRAULT Jean-Baptiste<br/>
          128, rue des Chabannes<br/>
          04200 Châteauneuf Val Saint Donat, France<br/>
          <strong>Statut :</strong> Particulier, non professionnel (site personnel en cours de création d'activité).<br/>
          Téléphone : 06 40 83 01 27<br/>
          Email : <a href="mailto:contact@studiojbth.com">contact@studiojbth.com</a>
        </p>
      </div>

      <div class="bloc">
        <h2>2. Hébergement</h2>
        <p>
          Le site est hébergé par Vercel Inc.<br/>
          340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis<br/>
          <a href="https://vercel.com" target="_blank" rel="noopener">vercel.com</a>
        </p>
      </div>

      <div class="bloc">
        <h2>3. Propriété intellectuelle</h2>
        <p>Tous les contenus présents sur ce site (textes, images, graphismes, logo, icônes) sont la propriété exclusive de Studio JBTH, sauf mention contraire. Toute reproduction, distribution ou utilisation sans autorisation est interdite.</p>
      </div>

      <div class="bloc">
        <h2>4. Responsabilité</h2>
        <p>Studio JBTH s'efforce de fournir des informations fiables et régulièrement mises à jour. Toutefois, des erreurs ou omissions peuvent survenir. L'utilisateur est invité à vérifier l'exactitude des informations et à signaler toute erreur via le formulaire de contact.</p>
      </div>

      <div class="bloc">
        <h2>5. Données personnelles</h2>
        <p>Les informations collectées via le formulaire de contact sont destinées exclusivement à Studio JBTH pour répondre aux demandes des utilisateurs. Pour plus d'informations, consultez notre <a href="/confidentialite">Politique de Confidentialité</a>.</p>
      </div>

      <div class="bloc">
        <h2>6. Cookies</h2>
        <p>Ce site peut utiliser des cookies à des fins statistiques ou pour améliorer l'expérience utilisateur. Vous pouvez configurer votre navigateur pour refuser les cookies. Consultez notre <a href="/cookies">Politique de Cookies</a>.</p>
      </div>

      <div class="bloc">
        <h2>7. Liens externes</h2>
        <p>Le site Studio JBTH peut contenir des liens vers d'autres sites. Studio JBTH n'est pas responsable du contenu ou des pratiques de confidentialité de ces sites externes.</p>
      </div>

      <div class="bloc">
        <h2>8. Contact</h2>
        <p>
          THARRAULT Jean-Baptiste<br/>
          128, rue des Chabannes, 04200 Châteauneuf Val Saint Donat<br/>
          Téléphone : 06 40 83 01 27<br/>
          Email : <a href="mailto:contact@studiojbth.com">contact@studiojbth.com</a>
        </p>
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
.sections { display: flex; flex-direction: column; gap: 0; }
.bloc {
  padding: 28px 0;
  border-bottom: .5px solid #E0D5C7;
}
.bloc:last-child { border-bottom: none; }
h2 {
  font-family: 'Manrope', sans-serif;
  font-size: 11px; font-weight: 700;
  color: #C67A35; letter-spacing: .14em;
  text-transform: uppercase; margin-bottom: 12px;
}
p {
  font-family: 'Manrope', sans-serif;
  font-size: 14px; color: #5a5048;
  line-height: 1.8; margin: 0;
}
a { color: #C67A35; text-decoration: none; border-bottom: .5px solid #C67A35; }
a:hover { opacity: .7; }
strong { color: #171412; }

@media (max-width: 600px) {
  .content { padding: 40px 16px 60px; }
}
</style>
