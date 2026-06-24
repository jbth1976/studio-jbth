<script lang="ts">
  let nom = '';
  let email = '';
  let message = '';
  let submitted = false;
  let error = false;
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
      if (response.ok) { submitted = true; nom = ''; email = ''; message = ''; }
      else error = true;
    } catch {
      error = true;
    } finally {
      loading = false;
    }
  }
</script>

<div class="page">

  <section class="page-hero">
    <div class="aurora" aria-hidden="true">
      <div class="ab ab1"></div>
      <div class="ab ab2"></div>
    </div>
    <div class="page-hero-inner">
      <span class="kicker">Contact</span>
      <h1>Un projet<br><em>en tête ?</em></h1>
      <p class="hero-desc">Discutons de vos besoins créatifs. Je vous réponds sous 48h.</p>
    </div>
  </section>

  <div class="content">
    <div class="contact-grid">

      <!-- INFOS -->
      <div class="info-col">
        <div class="info-card">
          <h2>Restons en contact</h2>
          <p>Que vous ayez un projet précis ou une simple question, je suis disponible pour en discuter.</p>
          <div class="info-item">
            <span class="info-label">E-mail</span>
            <a href="mailto:contact@studiojbth.com" class="info-value">contact@studiojbth.com</a>
          </div>
          <div class="info-item">
            <span class="info-label">Délai de réponse</span>
            <span class="info-value">Sous 48h</span>
          </div>
          <div class="info-item">
            <span class="info-label">Disponibilité</span>
            <span class="info-value avail">Disponible — France & Remote</span>
          </div>
        </div>

        <div class="socials-card">
          <span class="socials-label">Réseaux</span>
          <div class="socials">
            <a href="https://www.instagram.com/jbth1976/" target="_blank" rel="noopener" class="social-link">Instagram</a>
            <a href="https://www.linkedin.com/in/m-tharrault-jean-baptise-046b9778" target="_blank" rel="noopener" class="social-link">LinkedIn</a>
            <a href="https://linktr.ee/jbth1976" target="_blank" rel="noopener" class="social-link">Linktree</a>
          </div>
        </div>
      </div>

      <!-- FORM -->
      <div class="form-col">
        {#if submitted}
          <div class="success-block">
            <span class="success-icon">✓</span>
            <h3>Message envoyé !</h3>
            <p>Merci pour votre message. Je vous répondrai très rapidement.</p>
          </div>
        {:else if error}
          <p class="error-msg">Une erreur est survenue. Réessayez ou écrivez-moi directement.</p>
        {:else}
          <form class="form" on:submit={handleSubmit}>
            <input type="text" name="_gotcha" style="display:none" tabindex="-1" autocomplete="off" />
            <div class="form-group">
              <label for="nom">Votre nom</label>
              <input id="nom" type="text" placeholder="Jean-Baptiste" bind:value={nom} required autocomplete="name" />
            </div>
            <div class="form-group">
              <label for="email">Votre e-mail</label>
              <input id="email" type="email" placeholder="vous@exemple.fr" bind:value={email} required autocomplete="email" />
            </div>
            <div class="form-group">
              <label for="message">Votre message</label>
              <textarea id="message" rows="6" placeholder="Expliquez votre projet, besoins, délais, budget…" bind:value={message} required></textarea>
            </div>
            <button type="submit" disabled={loading}>{loading ? 'Envoi...' : 'Envoyer le message'}</button>
          </form>
        {/if}
      </div>

    </div>
  </div>
</div>

<style>
.page { background: #F4EFE7; }

.page-hero {
  position: relative; overflow: hidden;
  padding: 80px 28px 60px; background: #F4EFE7;
}
.aurora { position: absolute; inset: 0; pointer-events: none; }
.ab { position: absolute; border-radius: 50%; filter: blur(80px); }
.ab1 { width: 400px; height: 300px; background: rgba(198,122,53,.07); top: -80px; right: 0; animation: aur 16s ease-in-out infinite; }
.ab2 { width: 280px; height: 240px; background: rgba(198,122,53,.05); bottom: -40px; left: 20%; animation: aur 20s ease-in-out infinite reverse; }
@keyframes aur { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(20px,-15px) scale(1.08)} }

.page-hero-inner { position: relative; z-index: 1; max-width: 1280px; margin: 0 auto; }
.kicker { display: inline-block; font-size: 10px; font-weight: 600; color: #C67A35; letter-spacing: .16em; text-transform: uppercase; margin-bottom: 16px; }
.page-hero-inner h1 {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: clamp(40px, 5vw, 58px); font-weight: 700;
  line-height: 1.05; color: #171412; margin-bottom: 16px;
}
.page-hero-inner h1 em { font-style: italic; font-weight: 400; color: #C67A35; }
.hero-desc { font-size: 14px; color: #7a6e5e; line-height: 1.8; }

.content { max-width: 1280px; margin: 0 auto; padding: 0 28px 80px; }

.contact-grid {
  display: grid; grid-template-columns: 340px 1fr;
  gap: 16px; align-items: start;
}

/* INFO */
.info-card {
  background: #EDE7DD;
  border: .5px solid #D8D0C4;
  border-radius: 10px; padding: 32px;
  margin-bottom: 8px;
}
.info-card h2 {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 22px; font-weight: 700; color: #171412;
  margin-bottom: 10px;
}
.info-card > p { font-size: 13px; color: #7a6e5e; line-height: 1.7; margin-bottom: 28px; }
.info-item { margin-bottom: 18px; padding-bottom: 18px; border-bottom: .5px solid #D8D0C4; }
.info-item:last-child { margin-bottom: 0; padding-bottom: 0; border-bottom: none; }
.info-label { display: block; font-size: 9px; color: #9A8E7E; letter-spacing: .14em; text-transform: uppercase; margin-bottom: 5px; }
.info-value { font-size: 13px; color: #171412; font-weight: 500; }
.info-value.avail::before { content: '◎ '; color: #7ecfa0; }
a.info-value { color: #C67A35; }
a.info-value:hover { opacity: .75; }

.socials-card {
  background: #F4EFE7;
  border: .5px solid #D8D0C4;
  border-radius: 10px; padding: 24px;
}
.socials-label { display: block; font-size: 9px; color: #9A8E7E; letter-spacing: .14em; text-transform: uppercase; margin-bottom: 16px; }
.socials { display: flex; flex-direction: column; gap: 10px; }
.social-link {
  font-size: 13px; color: #171412; font-weight: 600;
  text-decoration: none;
  display: inline-flex; align-items: center; gap: 6px;
  transition: color 0.2s;
}
.social-link::after { content: '→'; color: #C67A35; font-weight: 400; }
.social-link:hover { color: #C67A35; }

/* FORM */
.form-col {
  background: #EDE7DD;
  border: .5px solid #C8BFB3;
  border-radius: 10px; padding: 40px;
  box-shadow: 0 2px 16px rgba(23,20,18,.06);
}
.form { display: flex; flex-direction: column; gap: 20px; }
.form-group { display: flex; flex-direction: column; gap: 6px; }
.form-group label { font-size: 9px; color: #9A8E7E; letter-spacing: .12em; text-transform: uppercase; }
.form input, .form textarea {
  background: #fff;
  border: 1px solid #C8BFB3;
  color: #171412; border-radius: 6px;
  padding: 14px 16px; font-size: 13px;
  font-family: inherit; transition: border-color 0.2s, box-shadow 0.2s; width: 100%;
  box-shadow: inset 0 1px 3px rgba(23,20,18,.04);
}
.form input::placeholder, .form textarea::placeholder { color: #B8A898; }
.form input:focus, .form textarea:focus { outline: none; border-color: #C67A35; box-shadow: 0 0 0 3px rgba(198,122,53,.1); }
.form textarea { resize: vertical; min-height: 160px; }
.form button {
  font-size: 11px; font-weight: 700;
  color: #F4EFE7; background: #171412;
  padding: 14px 32px; border-radius: 3px; border: none;
  letter-spacing: .08em; text-transform: uppercase;
  cursor: pointer; transition: background 0.2s; align-self: flex-start;
}
.form button:hover { background: #C67A35; }
.form button:disabled { opacity: .5; cursor: not-allowed; }

.success-block { text-align: center; padding: 40px 20px; }
.success-icon { display: block; font-size: 32px; color: #C67A35; margin-bottom: 16px; }
.success-block h3 { font-size: 20px; font-weight: 700; color: #171412; margin-bottom: 8px; }
.success-block p { font-size: 14px; color: #7a6e5e; }
.error-msg { font-size: 14px; color: #c0392b; padding: 20px 0; }

@media (max-width: 900px) {
  .contact-grid { grid-template-columns: 1fr; }
}
@media (max-width: 600px) {
  .page-hero { padding: 60px 16px 48px; }
  .content { padding: 0 16px 60px; }
  .form-col { padding: 28px 20px; }
}
</style>
