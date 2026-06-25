<script lang="ts">
  let name = '';
  let email = '';
  let projet = '';
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
      if (response.ok) submitted = true;
      else error = true;
    } catch {
      error = true;
    }
  }

  const services = [
    {
      cat: 'Développement web',
      items: [
        { label: 'Site vitrine (one page ou multi-pages)', price: '590 €' },
        { label: 'Site e-commerce (Stripe, gestion produits)', price: '950 €' },
        { label: 'Refonte et optimisation de site', price: '450 €' },
      ]
    },
    {
      cat: 'Graphisme & Branding',
      items: [
        { label: 'Logo Starter (IA assisté, 1 proposition)', price: '90 €', desc: "Base rapide, conçue à l'aide d'IA et retravaillée pour les petits budgets." },
        { label: 'Logo Pro (kit mini branding)', price: '280 €', desc: 'Création sur mesure, variantes, couleurs, typographies + mini-charte.' },
        { label: 'Logo Premium (animation + déclinaisons)', price: '520 €', desc: 'Identité complète, animations, export multi-formats + charte détaillée.' },
        { label: 'Templates réseaux sociaux', price: '90 €/lot' },
        { label: 'Visuels publicitaires', price: '70 €' },
      ]
    },
    {
      cat: 'Mise en page & Édition',
      items: [
        { label: 'Mise en page livre/ebook (prêt Kindle)', price: '220 €' },
        { label: 'Couverture de livre (2 propositions + modif)', price: '120 €' },
        { label: 'Accompagnement autoédition (KDP / Instagram)', price: 'Sur devis' },
      ]
    },
    {
      cat: 'Packs prêts à l\'emploi',
      items: [
        { label: 'Pack WordPress Starter (thème léger, SEO)', price: '150 €' },
        { label: 'Pack Vite + Tailwind (landing page rapide)', price: '120 €' },
        { label: 'Pack SvelteKit (site vitrine)', price: '140 €' },
      ]
    },
    {
      cat: 'Maintenance & Sécurité',
      items: [
        { label: 'Maintenance mensuelle (mises à jour, sauvegardes)', price: '50 €/mois' },
        { label: 'Maintenance premium (optimisation + support)', price: '80 €/mois' },
        { label: 'Monitoring sécurité avancée', price: '120 €/an' },
      ]
    },
  ];
</script>

<div class="page">

  <section class="page-hero">
    <div class="aurora" aria-hidden="true">
      <div class="ab ab1"></div>
      <div class="ab ab2"></div>
    </div>
    <div class="page-hero-inner">
      <span class="kicker">Services</span>
      <h1>Des prestations<br><em>claires et efficaces</em></h1>
      <p class="hero-desc">Adaptées aux auteurs, créateurs et entrepreneurs — sans complexité inutile.</p>
    </div>
  </section>

  <div class="content">

    <div class="services-grid">
      {#each services as s}
        <div class="service-block">
          <h2 class="service-cat">{s.cat}</h2>
          <div class="items">
            {#each s.items as item}
              <div class="item">
                <div class="item-left">
                  <span class="item-label">{item.label}</span>
                  {#if item.desc}<span class="item-desc">{item.desc}</span>{/if}
                </div>
                <span class="item-price">{item.price}</span>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>

    <!-- DEVIS -->
    <div class="devis-section">
      <div class="devis-header">
        <h2>Demander un devis</h2>
        <p>Recevez une réponse claire sous 48h.</p>
      </div>

      {#if submitted}
        <p class="status-msg success">Merci pour votre demande. Je vous répondrai rapidement.</p>
      {:else if error}
        <p class="status-msg err">Une erreur est survenue. Réessayez ou écrivez-moi directement.</p>
      {:else}
        <form class="form" on:submit={handleSubmit}>
          <div class="form-row">
            <input type="text" placeholder="Votre nom complet" bind:value={name} required />
            <input type="email" placeholder="Votre e-mail" bind:value={email} required />
          </div>
          <textarea rows="5" placeholder="Décrivez votre projet : objectifs, délais, budget estimé…" bind:value={projet} required></textarea>
          <button type="submit">Envoyer ma demande</button>
        </form>
      {/if}
    </div>

  </div>
</div>

<style>
.page { background: #f4f0ea; }

.page-hero {
  position: relative; overflow: hidden;
  padding: 80px 28px 70px; background: #f4f0ea;
}
.aurora { position: absolute; inset: 0; pointer-events: none; }
.ab { position: absolute; border-radius: 50%; filter: blur(70px); }
.ab1 { width: 400px; height: 350px; background: rgba(42,31,94,.11); top: -100px; left: -60px; animation: aur 16s ease-in-out infinite; }
.ab2 { width: 300px; height: 260px; background: rgba(200,192,255,.1); bottom: -40px; right: 15%; animation: aur 20s ease-in-out infinite reverse; }
@keyframes aur { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(20px,-15px) scale(1.08)} }

.page-hero-inner { position: relative; z-index: 1; max-width: 1280px; margin: 0 auto; }
.kicker { display: inline-block; font-size: 10px; font-weight: 600; color: #2a1f5e; letter-spacing: .16em; text-transform: uppercase; margin-bottom: 16px; }
.page-hero-inner h1 { font-size: clamp(36px, 5vw, 52px); font-weight: 900; line-height: .98; letter-spacing: -.04em; color: #1a1612; margin-bottom: 16px; }
.page-hero-inner h1 em { font-style: italic; font-weight: 300; color: #9a8e7e; }
.hero-desc { font-size: 14px; color: #7a6e5e; line-height: 1.8; max-width: 460px; }

.content { max-width: 1280px; margin: 0 auto; padding: 0 28px 80px; }

/* SERVICES */
.services-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 48px; }

.service-block {
  background: #ede9e1; border-radius: 12px; padding: 28px;
  border: .5px solid #D8D0C4;
}
.service-cat {
  font-family: 'Manrope', sans-serif;
  font-size: 10px; font-weight: 700; color: #F4EFE7;
  letter-spacing: .18em; text-transform: uppercase;
  background: #6B4C32;
  display: inline-block;
  padding: 5px 12px;
  border-radius: 2px;
  margin-bottom: 20px;
}
.items { display: flex; flex-direction: column; gap: 0; }
.item {
  display: grid;
  grid-template-columns: 1fr 90px;
  align-items: baseline;
  gap: 12px;
  padding: 12px 0;
  border-bottom: .5px solid #EDE7DD;
}
.item:last-child { border-bottom: none; }
.item-left { flex: 1; }
.item-label { font-size: 14px; color: #171412; font-weight: 600; display: block; margin-bottom: 3px; font-family: 'Manrope', sans-serif; }
.item-desc { font-size: 11px; color: #9A8E7E; line-height: 1.5; display: block; }
.item-price {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 18px; font-weight: 700; color: #C67A35;
  white-space: nowrap; text-align: right;
}

/* DEVIS */
.devis-section {
  background: #1a1612; border-radius: 14px; padding: 48px;
  width: 100%; max-width: 100%; box-sizing: border-box; overflow: hidden;
}
.devis-header { margin-bottom: 32px; }
.devis-header h2 { font-size: 24px; font-weight: 800; color: #f4f0ea; letter-spacing: -.03em; margin-bottom: 6px; }
.devis-header p { font-size: 13px; color: #6b6158; }
.form {
  display: flex; flex-direction: column; gap: 12px;
  width: 100%; max-width: 100%; min-width: 0; box-sizing: border-box;
}
.form-row {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 12px;
  width: 100%; max-width: 100%; min-width: 0;
}
.form input, .form textarea {
  display: block;
  width: 100%; max-width: 100%; min-width: 0; box-sizing: border-box;
  background: #242018; border: .5px solid #3a3428;
  color: #f4f0ea; border-radius: 6px;
  padding: 14px 16px; font-size: 13px;
  font-family: inherit; transition: border-color 0.2s;
}
.form input::placeholder, .form textarea::placeholder { color: #6b6158; }
.form input:focus, .form textarea:focus { outline: none; border-color: #2a1f5e; }
.form textarea { resize: vertical; min-height: 140px; }
.form button {
  align-self: flex-start;
  font-size: 11px; font-weight: 700;
  color: #1a1612; background: #f4f0ea;
  padding: 13px 28px; border-radius: 3px; border: none;
  letter-spacing: .06em; text-transform: uppercase;
  cursor: pointer; transition: background 0.2s;
}
.form button:hover { background: #fff; }
.status-msg { font-size: 14px; padding: 16px 0; }
.status-msg.success { color: #c8c0ff; }
.status-msg.err { color: #f09595; }

@media (max-width: 900px) {
  .services-grid { grid-template-columns: 1fr; }
}

@media (max-width: 768px) {
  .page-hero { padding: 48px 16px 36px; }
  .content { padding: 0 16px 48px; }
  .services-grid { grid-template-columns: 1fr; }
  .form-row { grid-template-columns: 1fr; }
  .devis-section { padding: 28px 16px; border-radius: 10px; }
  .devis-header h2 { font-size: 22px; }
  .service-block { padding: 20px 16px; }
  .item-label { font-size: 13px; }
  .item { grid-template-columns: 1fr auto; gap: 8px; }
  .item-price { font-size: 15px; }
  .form button { width: 100%; text-align: center; align-self: auto; }
  .page-hero-inner h1 { font-size: 32px; }
}
</style>
