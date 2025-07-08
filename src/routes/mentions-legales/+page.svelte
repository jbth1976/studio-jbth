<script>
    import { onMount } from 'svelte';
    onMount(() => {
      document.title = "Mentions légales | Studio JBTH";
    });
  </script>
  
  <section class="mentions">
    <div class="container">
      <h1>Mentions Légales</h1>
  
      <h2>1. Éditeur du site</h2>
        <p>
        Studio JBTH<br/>
        THARRAULT Jean-Baptiste<br/>
        128, rue des Chabannes<br/>
        04200 Châteauneuf Val Saint Donat, France<br/>
        <strong>Statut :</strong> Particulier, non professionnel (site personnel en cours de création d’activité).<br/>
        Téléphone : 06 40 83 01 27<br/>
        Email : contact@studiojbth.com
        </p>
  
      <h2>2. Hébergement</h2>
      <p>
        Le site est hébergé par [Nom de l'hébergeur] (à compléter)<br/>
        Adresse : [Adresse de l'hébergeur]<br/>
        Téléphone : [Numéro de l'hébergeur]
      </p>
  
      <h2>3. Propriété intellectuelle</h2>
      <p>
        Tous les contenus présents sur ce site (textes, images, graphismes, logo, icônes) sont la propriété exclusive de Studio JBTH, sauf mention contraire. Toute reproduction, distribution ou utilisation sans autorisation est interdite.
      </p>
  
      <h2>4. Responsabilité</h2>
      <p>
        Studio JBTH s'efforce de fournir des informations fiables et régulièrement mises à jour. Toutefois, des erreurs ou omissions peuvent survenir. L'utilisateur est invité à vérifier l'exactitude des informations et à signaler toute erreur via le formulaire de contact.
      </p>
  
      <h2>5. Données personnelles</h2>
      <p>
        Les informations collectées via le formulaire de contact sont destinées exclusivement à Studio JBTH pour répondre aux demandes des utilisateurs. Pour plus d'informations, consultez notre <a href="/confidentialite">Politique de Confidentialité</a>.
      </p>
  
      <h2>6. Cookies</h2>
      <p>
        Ce site peut utiliser des cookies à des fins statistiques ou pour améliorer l'expérience utilisateur. Vous pouvez configurer votre navigateur pour refuser les cookies.
      </p>
  
      <h2>7. Liens externes</h2>
      <p>
        Le site Studio JBTH peut contenir des liens vers d'autres sites. Studio JBTH n'est pas responsable du contenu ou des pratiques de confidentialité de ces sites externes.
      </p>
  
      <h2>8. Contact</h2>
      <p>
        Pour toute question concernant ces mentions légales, vous pouvez contacter :
      </p>
      <p class="contact">
        THARRAULT Jean-Baptiste<br/>
        128, rue des Chabannes<br/>
        04200 Châteauneuf Val Saint Donat<br/>
        Téléphone : 06 40 83 01 27<br/>
        Email : contact@studiojbth.com
      </p>
    </div>
  </section>
  
  <style>
    .mentions {
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
    p {
      line-height: 1.6;
      font-size: 1rem;
      margin-top: 0.5rem;
    }
    .contact {
      font-weight: bold;
      margin-top: 0.5rem;
    }
  </style>
  