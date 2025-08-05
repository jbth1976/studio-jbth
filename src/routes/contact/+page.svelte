<script lang="ts">
    let nom = "";
    let email = "";
    let message = "";
    let submitted = false;
    let error = false;
  
    async function handleSubmit(event: SubmitEvent) {
      event.preventDefault();
      try {
        const response = await fetch('/api/send-contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ nom, email, message })
        });
        submitted = response.ok;
        error = !response.ok;
      } catch {
        error = true;
      }
    }
  </script>
  
  <div class="contact-wrapper">
    <section class="contact-hero">
      <h1>Contactez-moi</h1>
      <p>Discutons de votre projet ou besoins créatifs.<br />Réponse sous 48h maximum.</p>
      <p class="mail-display">📧 contact@studiojbth.com</p>
    </section>
  
    <section class="contact-form-section">
      {#if submitted}
        <p class="confirmation">✅ Merci pour votre message, je vous répondrai très vite.</p>
      {:else if error}
        <p class="confirmation error">❌ Une erreur est survenue, veuillez réessayer ou m'écrire directement.</p>
      {:else}
        <form class="contact-form" on:submit={handleSubmit}>
          <input type="text" name="_gotcha" style="display:none;" tabindex="-1" autocomplete="off" />
          <input type="text" placeholder="Votre nom" bind:value={nom} required autocomplete="name" />
          <input type="email" placeholder="Votre e-mail" bind:value={email} required autocomplete="email" />
          <textarea rows="6" placeholder="Expliquez votre projet, besoins, délais, budget…" bind:value={message} required></textarea>
          <button type="submit">Envoyer</button>
        </form>
      {/if}
    </section>
  </div>
  
  <style>
    /* === Wrapper général de la page Contact === */
    .contact-wrapper {
      background: linear-gradient(to right, #ffffff 15%, #111111 15%, #111111 85%, #ffffff 85%);
      max-width: 100vw;
      overflow-x: hidden;
      min-height: 100vh;
      padding: 6rem 1rem 4rem;
    }
  
    /* === En-tête section === */
    .contact-hero {
      text-align: center;
      padding-bottom: 2rem;
      color: #dff;
    }
  
    .contact-hero h1 {
      font-size: 2.8rem;
      color: #00f7ff;
      text-shadow: 0 0 18px rgba(0, 247, 255, 0.6);
      margin-bottom: 1rem;
    }
  
    .contact-hero p {
      font-size: 1.2rem;
      max-width: 680px;
      margin: 0 auto;
      color: #c0fefe;
      line-height: 1.6;
    }
  
    .mail-display {
      margin-top: 1.2rem;
      font-weight: 600;
      color: #00ffff;
    }
  
    /* === Formulaire === */
    .contact-form-section {
      max-width: 680px;
      margin: 0 auto;
      padding-top: 3rem;
    }
  
    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
  
    .contact-form input,
    .contact-form textarea {
      background: rgba(0, 0, 0, 0.7);
      border: 1px solid #00f7ff;
      padding: 1rem 1.2rem;
      border-radius: 12px;
      color: #e0f7ff;
      font-size: 1.05rem;
      transition: border 0.3s, box-shadow 0.3s;
    }
  
    .contact-form textarea {
      min-height: 180px;
      resize: vertical;
    }
  
    .contact-form input:focus,
    .contact-form textarea:focus {
      outline: none;
      border-color: #00ffff;
      box-shadow: 0 0 14px rgba(0, 255, 255, 0.4);
    }
  
    .contact-form button {
      background: linear-gradient(135deg, #00f7ff, #0cf);
      color: #000;
      padding: 1rem 2rem;
      font-weight: bold;
      font-size: 1.15rem;
      border: none;
      border-radius: 30px;
      cursor: pointer;
      transition: transform 0.3s, box-shadow 0.3s;
      box-shadow: 0 0 22px rgba(0, 255, 255, 0.4);
    }
  
    .contact-form button:hover {
      transform: scale(1.06);
      box-shadow: 0 0 30px rgba(0, 255, 255, 0.55);
    }
  
    /* === Confirmation après envoi === */
    .confirmation {
      text-align: center;
      font-size: 1.3rem;
      color: #00ffff;
      padding: 2rem 0;
      font-weight: 600;
    }
  
    .confirmation.error {
      color: #ff4444;
    }
  
    /* === Responsive === */
    @media (max-width: 768px) {
      .contact-hero h1 {
        font-size: 2.2rem;
      }
      .contact-hero p {
        font-size: 1.05rem;
      }
    }
    @media (max-width: 768px) {
      .contact-wrapper {
        background: #111111; /* Fond plein noir au lieu du gradient */
        padding: 5rem 1rem 3rem;
      }
    }
  
    @media (max-width: 480px) {
      .contact-form-section {
        padding: 2rem 1rem 4rem;
      }
      .contact-form button {
        font-size: 1rem;
        padding: 0.8rem 1.6rem;
      }
    }
  </style>