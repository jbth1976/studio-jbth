<script lang="ts">
  let nom = '';
  let email = '';
  let message = '';
  let statusMessage = '';
  let loading = false;

  async function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    loading = true;
    try {
      const response = await fetch('/api/send-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nom, email, message })
      });
      if (response.ok) {
        statusMessage = 'Message envoyé avec succès. Je vous répondrai rapidement.';
        nom = ''; email = ''; message = '';
      } else {
        statusMessage = "Une erreur est survenue. Veuillez réessayer ou m'écrire directement.";
      }
    } catch {
      statusMessage = 'Une erreur est survenue. Veuillez réessayer plus tard.';
    } finally {
      loading = false;
    }
  }
</script>

<div class="page">

  <!-- HERO -->
  <section class="hero">
    <div class="aurora" aria-hidden="true">
      <div class="ab ab1"></div>
      <div class="ab ab2"></div>
    </div>
    <div class="hero-inner">
      <span class="kicker">À propos</span>
      <h1>Jean-Baptiste<br><em>Tharrault</em></h1>
      <p class="hero-desc">Auteur, développeur web et créateur de contenus visuels — à la croisée de la créativité et de la technique.</p>
    </div>
  </section>

  <div class="content">

    <!-- BIO : portrait + texte -->
    <section class="bio">
      <div class="portrait-col">
        <div class="portrait-frame">
          <img src="/images/IMG_0060.jpg" alt="Jean-Baptiste Tharrault" class="portrait" />
        </div>
        <div class="portrait-caption">
          <span class="caption-name">Jean-Baptiste Tharrault</span>
          <span class="caption-role">Développeur · Designer · Auteur</span>
        </div>
      </div>
      <div class="bio-col">
        <div class="section-tag">Qui suis-je ?</div>
        <h2 class="bio-title">Créer, connecter,<br><em>transmettre</em></h2>
        <div class="bio-body">
          <p>Depuis plus de dix ans, je mêle technologies numériques, narration sensible et design innovant pour donner vie à des projets uniques.</p>
          <p>Mon univers se situe à la croisée de la créativité et de la technique, avec une exigence constante de qualité, d'authenticité et d'impact émotionnel.</p>
          <p>Je publie des romans introspectifs, conçois des interfaces modernes, et j'accompagne les professionnels dans leur transition digitale.</p>
        </div>
        <a href="mailto:contact@studiojbth.com" class="email-link">contact@studiojbth.com →</a>
      </div>
    </section>

    <!-- STUDIO + CITATION -->
    <section class="studio">
      <div class="studio-col">
        <div class="section-tag">Le Studio</div>
        <h2 class="studio-title">Studio JBTH</h2>
        <p class="studio-desc"><strong>Studio JBTH</strong> est bien plus qu'un portfolio : c'est une vitrine vivante de mes compétences et de ma vision. Chaque élément graphique, chaque ligne de code reflète ma volonté d'innover sans perdre l'humain de vue.</p>
        <p class="studio-desc">Sites vitrines, e-commerce, identité visuelle, mise en page éditoriale — je couvre l'ensemble du spectre créatif et technique.</p>
      </div>
      <blockquote class="quote">
        <div class="quote-mark">"</div>
        <p class="quote-text">Créer, c'est traduire l'invisible en pixels.</p>
        <cite class="quote-cite">— Jean-Baptiste Tharrault</cite>
      </blockquote>
    </section>

    <!-- VALEURS -->
    <section class="values">
      <div class="divider">
        <div class="div-line"></div>
        <span class="div-label">Mes valeurs</span>
        <div class="div-line"></div>
      </div>
      <div class="values-grid">
        {#each [
          { num: '01', n: 'Qualité', d: "Chaque projet reçoit une attention méticuleuse — du pixel au code, rien n'est laissé au hasard." },
          { num: '02', n: 'Authenticité', d: 'Des solutions sur-mesure qui vous ressemblent vraiment, jamais des templates recyclés.' },
          { num: '03', n: 'Innovation', d: "L'IA, les nouvelles stacks et les tendances design au service de votre vision, pas de la mienne." },
          { num: '04', n: 'Proximité', d: 'Un interlocuteur unique du brief à la livraison — disponible, direct et à votre écoute.' },
        ] as v}
          <div class="value-card">
            <div class="value-bar"></div>
            <span class="value-num">{v.num}</span>
            <h3 class="value-title">{v.n}</h3>
            <p class="value-desc">{v.d}</p>
          </div>
        {/each}
      </div>
    </section>

    <!-- FORMULAIRE -->
    <section class="form-section">
      <div class="form-left">
        <div class="section-tag light">Travaillons ensemble</div>
        <h2 class="form-title">Un projet<br><em>en tête ?</em></h2>
        <p class="form-sub">Partagez votre idée, je vous réponds sous 48h avec une proposition claire et adaptée à votre budget.</p>
      </div>
      <div class="form-right">
        {#if statusMessage}
          <p class="status-msg">{statusMessage}</p>
        {:else}
          <form class="form" on:submit={handleSubmit}>
            <div class="form-row">
              <input type="text" placeholder="Votre nom" bind:value={nom} required />
              <input type="email" placeholder="Votre e-mail" bind:value={email} required />
            </div>
            <textarea rows="5" placeholder="Votre message…" bind:value={message} required></textarea>
            <button type="submit" disabled={loading}>{loading ? 'Envoi…' : 'Envoyer le message'}</button>
          </form>
        {/if}
      </div>
    </section>

  </div>
</div>

<style>
.page { background: #F4EFE7; }

/* HERO */
.hero {
  position: relative; overflow: hidden;
  padding: 80px 28px 64px; background: #F4EFE7;
}
.aurora { position: absolute; inset: 0; pointer-events: none; }
.ab { position: absolute; border-radius: 50%; filter: blur(70px); }
.ab1 { width: 400px; height: 350px; background: rgba(198,122,53,.08); top: -100px; right: -60px; animation: aur 16s ease-in-out infinite; }
.ab2 { width: 300px; height: 260px; background: rgba(198,122,53,.05); bottom: -60px; left: 10%; animation: aur 20s ease-in-out infinite reverse; }
@keyframes aur { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(20px,-15px) scale(1.08)} }

.hero-inner { position: relative; z-index: 1; max-width: 1280px; margin: 0 auto; }
.kicker {
  display: inline-block; font-family: 'Manrope', sans-serif;
  font-size: 10px; font-weight: 700; color: #C67A35;
  letter-spacing: .2em; text-transform: uppercase; margin-bottom: 16px;
}
.hero-inner h1 {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: clamp(44px, 6vw, 64px); font-weight: 700;
  line-height: 1; letter-spacing: .02em; color: #171412; margin-bottom: 20px;
}
.hero-inner h1 em { font-style: italic; font-weight: 400; color: #9A8E7E; }
.hero-desc { font-family: 'Manrope', sans-serif; font-size: 14px; color: #7a6e5e; line-height: 1.8; max-width: 480px; }

/* CONTENT */
.content { max-width: 1280px; margin: 0 auto; padding: 0 28px 80px; }

/* TAG */
.section-tag {
  font-family: 'Manrope', sans-serif;
  display: inline-block; font-size: 9px; font-weight: 700;
  color: #F4EFE7; background: #6B4C32;
  letter-spacing: .2em; text-transform: uppercase;
  padding: 5px 12px; border-radius: 2px; margin-bottom: 16px;
}
.section-tag.light {
  background: rgba(244,239,231,.12);
  color: #E8C88A;
}

/* BIO */
.bio {
  display: grid; grid-template-columns: 280px 1fr;
  gap: 64px; align-items: start;
  padding: 56px 0; border-top: .5px solid #E0D5C7;
}
.portrait-frame {
  border-radius: 10px; overflow: hidden;
  border: .5px solid #D8D0C4;
  box-shadow: 0 8px 32px rgba(23,20,18,.1);
}
.portrait { width: 100%; aspect-ratio: 3/4; object-fit: cover; display: block; }
.portrait-caption {
  margin-top: 14px;
  display: flex; flex-direction: column; gap: 3px;
}
.caption-name {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 15px; font-weight: 700; color: #171412;
}
.caption-role {
  font-family: 'Manrope', sans-serif;
  font-size: 10px; color: #C67A35; letter-spacing: .12em; text-transform: uppercase;
}
.bio-title {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: clamp(32px, 4vw, 44px); font-weight: 700;
  color: #171412; line-height: 1.05; letter-spacing: .01em;
  margin-bottom: 24px;
}
.bio-title em { font-style: italic; font-weight: 400; color: #9A8E7E; }
.bio-body p {
  font-family: 'Manrope', sans-serif;
  font-size: 14px; color: #5a5048; line-height: 1.85; margin-bottom: 14px;
}
.email-link {
  font-family: 'Manrope', sans-serif;
  display: inline-block; margin-top: 8px;
  font-size: 12px; font-weight: 600; color: #C67A35;
  border-bottom: .5px solid #C67A35; padding-bottom: 1px;
  transition: opacity 0.2s;
}
.email-link:hover { opacity: .65; }

/* STUDIO */
.studio {
  display: grid; grid-template-columns: 1fr 380px;
  gap: 64px; align-items: center;
  padding: 56px 0; border-top: .5px solid #E0D5C7;
}
.studio-title {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 36px; font-weight: 700; color: #171412;
  margin-bottom: 20px; letter-spacing: .01em;
}
.studio-desc {
  font-family: 'Manrope', sans-serif;
  font-size: 14px; color: #5a5048; line-height: 1.85; margin-bottom: 14px;
}
.studio-desc strong { color: #171412; font-weight: 700; }
.quote {
  background: #171412; border-radius: 12px;
  padding: 36px; border: .5px solid #2e2a26;
  display: flex; flex-direction: column; gap: 14px;
}
.quote-mark {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 52px; color: #C67A35; opacity: .4;
  line-height: .8;
}
.quote-text {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 20px; color: #F4EFE7;
  font-style: italic; line-height: 1.5; margin: 0;
}
.quote-cite {
  font-family: 'Manrope', sans-serif;
  font-size: 10px; color: #C67A35; letter-spacing: .12em; text-transform: uppercase;
}

/* VALEURS */
.values { padding: 56px 0; border-top: .5px solid #E0D5C7; }
.divider { display: flex; align-items: center; gap: 16px; margin-bottom: 36px; }
.div-line { flex: 1; height: .5px; background: #E0D5C7; }
.div-label { font-family: 'Manrope', sans-serif; font-size: 10px; color: #9A8E7E; letter-spacing: .18em; text-transform: uppercase; white-space: nowrap; }
.values-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
.value-card {
  background: #EDE7DD; border-radius: 10px;
  border: .5px solid #D8D0C4;
  padding: 28px 22px 24px;
  display: flex; flex-direction: column; gap: 12px;
  position: relative;
  overflow: hidden;
}
.value-bar {
  width: 32px; height: 2px;
  background: #C67A35; border-radius: 1px;
  flex-shrink: 0;
}
.value-num {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 11px; color: #C67A35;
  letter-spacing: .14em; font-weight: 600;
}
.value-title {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 26px; font-weight: 700; color: #171412;
  line-height: 1; letter-spacing: .01em;
}
.value-desc {
  font-family: 'Manrope', sans-serif;
  font-size: 12px; color: #7a6e5e; line-height: 1.75;
  flex: 1;
}

/* FORMULAIRE */
.form-section {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 80px; align-items: center;
  background: #2e2a26; border-radius: 14px;
  padding: 64px 56px; margin-top: 16px;
}
.form-title {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 42px; font-weight: 700; color: #F4EFE7;
  line-height: 1.05; letter-spacing: .01em; margin-bottom: 20px;
}
.form-title em { font-style: italic; font-weight: 400; color: #E8C88A; }
.form-sub { font-family: 'Manrope', sans-serif; font-size: 13px; color: #B8A898; line-height: 1.85; max-width: 320px; }
.form { display: flex; flex-direction: column; gap: 12px; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.form input, .form textarea {
  background: #3a3530; border: .5px solid #4a4540;
  color: #F4EFE7; border-radius: 6px;
  padding: 14px 16px; font-size: 13px;
  font-family: 'Manrope', sans-serif;
  transition: border-color 0.2s; width: 100%;
}
.form input::placeholder, .form textarea::placeholder { color: #9A8E7E; }
.form input:focus, .form textarea:focus { outline: none; border-color: #C67A35; }
.form textarea { resize: vertical; min-height: 140px; }
.form button {
  align-self: flex-start; font-family: 'Manrope', sans-serif;
  font-size: 11px; font-weight: 700;
  color: #171412; background: #F4EFE7;
  padding: 13px 28px; border-radius: 3px; border: none;
  letter-spacing: .07em; text-transform: uppercase;
  cursor: pointer; transition: background 0.2s;
}
.form button:hover { background: #E8C88A; }
.form button:disabled { opacity: .5; cursor: not-allowed; }
.status-msg { font-family: 'Manrope', sans-serif; font-size: 14px; color: #E8C88A; padding: 20px 0; }

@media (max-width: 900px) {
  .bio { grid-template-columns: 1fr; gap: 32px; }
  .studio { grid-template-columns: 1fr; gap: 32px; }
  .form-section { grid-template-columns: 1fr; gap: 32px; padding: 40px 28px; }
  .values-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 600px) {
  .hero { padding: 60px 16px 48px; }
  .content { padding: 0 16px 60px; }
  .form-row { grid-template-columns: 1fr; }
  .form-section { padding: 32px 20px; }
  .values-grid { grid-template-columns: 1fr 1fr; gap: 8px; }
}
</style>
