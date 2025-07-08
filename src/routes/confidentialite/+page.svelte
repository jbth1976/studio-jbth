<script>
    import { onMount } from 'svelte';
    onMount(() => {
      document.title = "Politique de confidentialité | Studio JBTH";
    });
  </script>
  
  <section class="confidentialite">
    <div class="container">
      <h1>Politique de Confidentialité</h1>
      <p class="intro">
        Studio JBTH attache une grande importance à la protection de vos données personnelles. Cette politique explique comment nous collectons, utilisons et protégeons vos informations lorsque vous visitez ce site.
      </p>
  
      <h2>1. Données collectées</h2>
      <p>Nous pouvons collecter les informations suivantes :</p>
      <ul>
        <li>Nom et prénom</li>
        <li>Adresse e-mail</li>
        <li>Numéro de téléphone (si renseigné)</li>
        <li>Données de navigation (cookies, statistiques anonymes)</li>
      </ul>
  
      <h2>2. Utilisation des données</h2>
      <p>Vos informations sont utilisées pour :</p>
      <ul>
        <li>Répondre à vos demandes de contact</li>
        <li>Améliorer nos contenus et services</li>
        <li>Assurer la sécurité et le bon fonctionnement du site</li>
      </ul>
  
      <h2>3. Cookies</h2>
      <p>Des cookies peuvent être utilisés pour analyser l’audience de manière anonyme et améliorer votre expérience utilisateur. Vous pouvez les refuser via les paramètres de votre navigateur.</p>
  
      <h2>4. Durée de conservation</h2>
      <p>Les données sont conservées uniquement le temps nécessaire pour répondre à vos demandes ou conformément aux obligations légales.</p>
  
      <h2>5. Sécurité</h2>
      <p>Studio JBTH met en œuvre des mesures de sécurité adaptées pour protéger vos données contre tout accès non autorisé ou divulgation.</p>
  
      <h2>6. Vos droits</h2>
      <p>Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants :</p>
      <ul>
        <li>Accès, rectification ou suppression de vos données</li>
        <li>Limitation ou opposition au traitement</li>
        <li>Portabilité des données</li>
      </ul>
      <p>Pour exercer ces droits, contactez :</p>
      <p class="contact">
        THARRAULT Jean-Baptiste<br/>
        128, rue des Chabannes, 04200 Châteauneuf Val Saint Donat<br/>
        Téléphone : 06 40 83 01 27<br/>
        Email : jbth1976@icloud.com
      </p>
  
      <h2>7. Contact</h2>
      <p>Pour toute question relative à cette politique, contactez-nous aux coordonnées ci-dessus.</p>
  
      <h2>8. Modifications</h2>
      <p>Cette politique peut être mise à jour. Nous vous invitons à la consulter régulièrement.</p>
    </div>
  </section>
  
  <style>
    .confidentialite {
      padding: 2rem 1rem;
      color: #f0f0f0;
      background: #000;
      font-family: system-ui, sans-serif;
    }
    .container {
      max-width: 700px;
      margin: 0 auto;
    }
    h1 {
      font-size: 1.8rem;
      color: #00ffff;
      margin-bottom: 1rem;
      text-align: center;
    }
    h2 {
      color: #00ffff;
      margin-top: 1.5rem;
      font-size: 1.2rem;
    }
    p, li {
      line-height: 1.6;
      font-size: 1rem;
      margin-top: 0.5rem;
    }
    ul {
      padding-left: 1.5rem;
      margin-top: 0.5rem;
    }
    .intro {
      text-align: center;
      margin-bottom: 1.5rem;
      font-size: 1.1rem;
    }
    .contact {
      font-weight: bold;
      margin-top: 0.5rem;
    }
  </style>