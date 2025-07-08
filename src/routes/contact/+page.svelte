<script lang="ts">
  // Contact page fully cleaned, structured, ready for SMTP backend
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
  
  <style>
  .contact-hero {
      text-align: center;
      padding: 4rem 1rem 2rem;
      color: #dff;
  }
  .contact-hero h1 {
      font-size: 2.5rem;
      color: #00f7ff;
      text-shadow: 0 0 15px #00f7ff;
      margin-bottom: 1rem;
  }
  .contact-hero p {
      font-size: 1.15rem;
      max-width: 600px;
      margin: 0 auto;
      color: #c0fefe;
  }
  .mail-display {
      margin-top: 1rem;
      font-weight: 600;
      color: #00ffff;
  }
  .contact-form-section {
      max-width: 600px;
      margin: 0 auto;
      padding: 2rem 1rem 4rem;
  }
  .contact-form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
  }
  .contact-form input,
  .contact-form textarea {
      background: rgba(0, 0, 0, 0.7);
      border: 1px solid #00f7ff;
      padding: 0.9rem 1rem;
      border-radius: 10px;
      color: #e0f7ff;
      font-size: 1rem;
      transition: border 0.3s, box-shadow 0.3s;
  }
  .contact-form input:focus,
  .contact-form textarea:focus {
      outline: none;
      border-color: #00ffff;
      box-shadow: 0 0 12px #00ffff99;
  }
  .contact-form button {
      background: linear-gradient(135deg, #00f7ff, #0cf);
      color: #000;
      padding: 0.8rem 2rem;
      font-weight: bold;
      font-size: 1.1rem;
      border: none;
      border-radius: 30px;
      cursor: pointer;
      transition: transform 0.3s, box-shadow 0.3s;
      box-shadow: 0 0 18px rgba(0, 255, 255, 0.4);
  }
  .contact-form button:hover {
      transform: scale(1.05);
      box-shadow: 0 0 24px rgba(0, 255, 255, 0.5);
  }
  .confirmation {
      text-align: center;
      font-size: 1.2rem;
      color: #00ffff;
      padding: 2rem 0;
      font-weight: 600;
  }
  .confirmation.error {
      color: #ff5555;
  }
  @media (max-width: 600px) {
      .contact-hero h1 {
          font-size: 2rem;
      }
      .contact-hero p {
          font-size: 1rem;
      }
  }
  </style>
  