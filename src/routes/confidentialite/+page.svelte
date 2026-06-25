<svelte:head>
  <title>Politique de confidentialité | Studio JBTH</title>
</svelte:head>

<div class="page">
  <div class="content">
    <span class="kicker">Légal</span>
    <h1>Politique de <em>confidentialité</em></h1>

    <div class="sections">
      <div class="bloc">
        <h2>Introduction</h2>
        <p>Studio JBTH attache une grande importance à la protection de vos données personnelles. Cette politique explique comment nous collectons, utilisons et protégeons vos informations lorsque vous visitez ce site.</p>
      </div>

      <div class="bloc">
        <h2>1. Données collectées</h2>
        <p>Nous pouvons collecter les informations suivantes :</p>
        <ul>
          <li>Nom et prénom</li>
          <li>Adresse e-mail</li>
          <li>Numéro de téléphone (si renseigné)</li>
          <li>Données de navigation (cookies, statistiques anonymes)</li>
        </ul>
      </div>

      <div class="bloc">
        <h2>2. Utilisation des données</h2>
        <p>Vos informations sont utilisées pour :</p>
        <ul>
          <li>Répondre à vos demandes de contact</li>
          <li>Améliorer nos contenus et services</li>
          <li>Assurer la sécurité et le bon fonctionnement du site</li>
        </ul>
      </div>

      <div class="bloc">
        <h2>3. Cookies</h2>
        <p>Des cookies peuvent être utilisés pour analyser l'audience de manière anonyme et améliorer votre expérience utilisateur. Vous pouvez les refuser via les paramètres de votre navigateur. Consultez notre <a href="/cookies">Politique de Cookies</a>.</p>
      </div>

      <div class="bloc">
        <h2>4. Durée de conservation</h2>
        <p>Les données sont conservées uniquement le temps nécessaire pour répondre à vos demandes ou conformément aux obligations légales.</p>
      </div>

      <div class="bloc">
        <h2>5. Sécurité</h2>
        <p>Studio JBTH met en œuvre des mesures de sécurité adaptées pour protéger vos données contre tout accès non autorisé ou divulgation.</p>
      </div>

      <div class="bloc">
        <h2>6. Vos droits (RGPD)</h2>
        <p>Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants :</p>
        <ul>
          <li>Accès, rectification ou suppression de vos données</li>
          <li>Limitation ou opposition au traitement</li>
          <li>Portabilité des données</li>
        </ul>
        <p style="margin-top:12px;">Pour exercer ces droits, contactez :<br/>
          THARRAULT Jean-Baptiste — 128, rue des Chabannes, 04200 Châteauneuf Val Saint Donat<br/>
          Email : <a href="mailto:contact@studiojbth.com">contact@studiojbth.com</a>
        </p>
      </div>

      <div class="bloc">
        <h2>7. Modifications</h2>
        <p>Cette politique peut être mise à jour. Nous vous invitons à la consulter régulièrement.</p>
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
ul {
  font-family: 'Manrope', sans-serif;
  font-size: 14px; color: #5a5048; line-height: 1.8;
  padding-left: 20px; margin: 8px 0 0;
}
a { color: #C67A35; text-decoration: none; border-bottom: .5px solid #C67A35; }
a:hover { opacity: .7; }

@media (max-width: 600px) {
  .content { padding: 40px 16px 60px; }
}
</style>
