<script lang="ts">
  let name = "";
  let email = "";
  let projet = "";
  let submitted = false;
  let error = false;

  async function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    try {
      const response = await fetch('/api/send-devis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, projet })
      });
      if (response.ok) {
        submitted = true;
      } else {
        error = true;
      }
    } catch {
      error = true;
    }
  }
</script>

<div class="container-wrapper">
  <section class="services-container">
    <h1>Nos Services</h1>
    <p class="intro">
      Des prestations simples et efficaces, adaptées aux auteurs, créateurs et entrepreneurs, sans complexité inutile.
    </p>

    <h2>💻 Développement Web</h2>
    <ul class="service-list">
      <li><strong>Site vitrine</strong> (one page ou multi-pages) — <span>590 €</span></li>
      <li><strong>Site e-commerce</strong> (Stripe, gestion produits) — <span>950 €</span></li>
      <li><strong>Refonte et optimisation de site</strong> — <span>450 €</span></li>
    </ul>

    <h2>🎨 Graphisme & Branding</h2>
    <ul class="service-list">
      <li>
        <strong>Logo Starter</strong> (IA assisté, 1 proposition + retouche) — <span>90 €</span><br>
        Une base rapide, conçue à l’aide d’IA et retravaillée manuellement pour les petits budgets ou projets personnels.
      </li>
      <li>
        <strong>Logo Pro</strong> (kit mini branding) — <span>280 €</span><br>
        Création sur mesure avec variantes, couleurs, typographies + une mini-charte graphique. Parfait pour un lancement pro.
      </li>
      <li>
        <strong>Logo Premium</strong> (animation + déclinaisons complètes) — <span>520 €</span><br>
        Identité visuelle complète avec animations, déclinaisons tous supports, export multi-formats + charte graphique détaillée.
      </li>
      <li><strong>Templates réseaux sociaux</strong> — <span>90 €/lot</span></li>
      <li><strong>Visuels publicitaires</strong> — <span>70 €</span></li>
    </ul>

    <h2>📚 Mise en page & Édition</h2>
    <ul class="service-list">
      <li><strong>Mise en page livre/ebook</strong> (pro + prêt Kindle) — <span>220 €</span></li>
      <li><strong>Couverture de livre professionnelle</strong> (2 propositions + modif) — <span>120 €</span></li>
      <li><strong>Accompagnement autoédition</strong> (Amazon KDP / Ingram) — <em>Sur devis</em></li>
    </ul>

    <h2>📦 Packs prêts à l'emploi</h2>
    <ul class="service-list">
      <li><strong>Pack WordPress Starter</strong> (thème léger, SEO) — <span>150 €</span></li>
      <li><strong>Pack Vite + Tailwind</strong> (landing page rapide) — <span>120 €</span></li>
      <li><strong>Pack SvelteKit</strong> (site vitrine) — <span>140 €</span></li>
    </ul>

    <h2>🛡️ Maintenance & Sécurité</h2>
    <ul class="service-list">
      <li><strong>Maintenance mensuelle</strong> (mises à jour, sauvegardes) — <span>50 €/mois</span></li>
      <li><strong>Maintenance premium</strong> (optimisation + support) — <span>80 €/mois</span></li>
      <li><strong>Monitoring sécurité avancée</strong> — <span>120 €/an</span></li>
    </ul>

    <div class="devis-block">✨ <strong>Prêt à démarrer ?</strong> Recevez un devis clair sous 48h.</div>

    {#if submitted}
      <p class="confirmation">✅ Merci pour votre demande de devis. Je vous répondrai rapidement.</p>
    {:else if error}
      <p class="confirmation error">❌ Une erreur est survenue. Veuillez réessayer ou m'écrire directement.</p>
    {:else}
      <form on:submit={handleSubmit} class="devis-form">
        <input type="text" placeholder="Votre nom complet" bind:value={name} required>
        <input type="email" placeholder="Votre e-mail professionnel" bind:value={email} required>
        <textarea placeholder="Décrivez votre projet : objectifs, délais, budget estimé…" rows="6" bind:value={projet} required></textarea>
        <button type="submit">Demander un devis</button>
      </form>
    {/if}
  </section>
</div>
<style>
  /* Conteneur principal centré avec fond */
  .container-wrapper {
  display: flex;
  justify-content: center;
  padding: 5rem 0;
  min-height: 100vh;
  background-color: #fff;
}
  
  /* Bloc central noir */
  .services-container {
    background-color: #111;
    max-width: 900px;
    width: 100%;
    padding: 4rem 2rem;
    border-radius: 16px;
    color: #dff;
    font-family: 'Arial', sans-serif;
    line-height: 1.7;
    animation: fadeIn 1.5s ease-out;
    box-shadow: 0 0 30px rgba(0, 255, 255, 0.07);
  }
  
  /* Titre principal */
  .services-container h1 {
    font-size: 2.8rem;
    text-align: center;
    margin-bottom: 2rem;
    color: #00f7ff;
    text-shadow: 0 0 20px #00f7ff;
  }
  
  /* Sous-titre introductif */
  .intro {
    text-align: center;
    font-style: italic;
    color: #aee;
    max-width: 650px;
    margin: 0 auto 3rem auto;
    font-size: 1.1rem;
  }
  
  /* Titres de section */
  .services-container h2 {
    font-size: 1.6rem;
    color: #aef;
    border-bottom: 1px solid #00f7ff55;
    padding-bottom: 0.5rem;
    margin-top: 3rem;
  }
  
  /* Liste des services */
  .service-list {
    list-style: none;
    padding-left: 0;
    margin-top: 1.2rem;
  }
  
  .service-list li {
    margin-bottom: 0.8rem;
    padding-left: 1.5rem;
    position: relative;
    color: #e8faff;
  }
  
  .service-list li::before {
    content: "▹";
    position: absolute;
    left: 0;
    color: #00f7ff;
  }
  
  .service-list span {
    color: #00ffff;
    font-weight: bold;
  }
  
  .service-list em {
    color: #ccc;
    font-style: italic;
  }
  
  /* Bloc d'accroche pour le devis */
  .devis-block {
    text-align: center;
    font-style: italic;
    color: #ccc;
    margin-top: 3rem;
    font-size: 1.05rem;
  }
  
  /* Formulaire de devis */
  .devis-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    gap: 1rem;
  }
  
  .devis-form input,
  .devis-form textarea {
    width: 100%;
    max-width: 500px;
    padding: 1rem;
    border: 1px solid #00f7ff;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.6);
    color: #e0f7ff;
    transition: border 0.3s, box-shadow 0.3s;
    font-size: 1rem;
  }
  
  .devis-form input:focus,
  .devis-form textarea:focus {
    outline: none;
    border-color: #00ffff;
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.4);
  }
  
  /* Bouton d'envoi */
  .devis-form button {
    background: linear-gradient(135deg, #00f7ff, #0cf);
    color: #000;
    border: none;
    padding: 0.9rem 2rem;
    font-weight: bold;
    border-radius: 30px;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .devis-form button:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px rgba(0, 255, 255, 0.4);
  }
  
  /* Messages de confirmation */
  .confirmation {
    text-align: center;
    font-size: 1.2rem;
    color: #00ffff;
    padding: 2rem 0;
    font-weight: 600;
  }
  
  .confirmation.error {
    color: #f55;
  }
  
  
  /* Animation d'entrée */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  </style>