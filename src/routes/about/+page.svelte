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
        statusMessage = '✅ Message envoyé avec succès. Je vous répondrai rapidement.';
        nom = '';
        email = '';
        message = '';
      } else {
        statusMessage = '❌ Une erreur est survenue. Veuillez réessayer ou utiliser le mail direct.';
      }
    } catch {
      statusMessage = '❌ Une erreur est survenue. Veuillez réessayer plus tard.';
    } finally {
      loading = false;
    }
  }
</script>

<section class="about-container">
  <h1 class="about-title">À Propos</h1>
  <img src="/images/IMG_0060.jpg" alt="Jean-Baptiste Tharrault" class="portrait" />

  <h2 class="section-heading">Jean-Baptiste Tharrault</h2>
  <p>Je suis auteur, développeur web et créateur de contenus visuels. Depuis plus de dix ans, je mêle technologies numériques, narration sensible et design innovant pour donner vie à des projets uniques.</p>
  <p>Mon univers se situe à la croisée de la créativité et de la technique, avec une exigence constante de qualité, d'authenticité et d'impact émotionnel.</p>
  <p>Je publie des romans introspectifs, conçois des interfaces futuristes, et j'accompagne les professionnels dans leur transition digitale grâce à des outils simples, esthétiques et sur mesure.</p>

  <h2 class="section-heading">L’Entreprise</h2>
  <p><strong>Studio JBTH</strong> est bien plus qu’un portfolio : c’est une vitrine vivante de mes compétences et de ma vision.</p>
  <p>Chaque élément graphique, chaque ligne de code, chaque idée déployée ici reflète ma volonté d’innover sans perdre l’humain de vue.</p>

  <p>Nous proposons des services de développement web (sites vitrines, e-commerce, applications personnalisées), de graphisme (identité visuelle, contenu pour les réseaux), et d’édition (mise en page, accompagnement à la publication).</p>

  <p class="quote">“Créer, c’est traduire l’invisible en pixels.” — <strong>Jean-Baptiste Tharrault</strong></p>

  <div class="contact-links">
    <a href="mailto:contact@studiojbth.com" class="button">contact@studiojbth.com</a>
  </div>

  <form class="contact-form" on:submit={handleSubmit}>
    <input type="text" placeholder="Votre nom" bind:value={nom} required />
    <input type="email" placeholder="Votre e-mail" bind:value={email} required />
    <textarea rows="5" placeholder="Votre message..." bind:value={message} required></textarea>
    <button type="submit" disabled={loading}>{loading ? 'Envoi en cours...' : 'Envoyer'}</button>
    {#if statusMessage}
      <p class="status">{statusMessage}</p>
    {/if}
  </form>
</section>

<style>
  .about-container {
    background: radial-gradient(circle at top, #111 0%, #000 100%);
    color: #e6f9ff;
    border-radius: 1rem;
    padding: 4rem 2rem;
    max-width: 960px;
    margin: 3rem auto;
    box-shadow: 0 0 60px rgba(0, 255, 255, 0.08);
  }

  .about-title {
    font-size: 2.8rem;
    font-weight: 700;
    color: #00f7ff;
    text-shadow: 0 0 15px #00f7ff, 0 0 30px #00f7ff;
    margin-bottom: 2rem;
    text-align: center;
  }

  .section-heading {
    font-size: 1.8rem;
    font-weight: 600;
    color: #9aefff;
    text-shadow: 0 0 10px #9aefff;
    margin-top: 3rem;
    margin-bottom: 1.2rem;
    text-align: center;
  }

  p {
    font-size: 1.05rem;
    color: #d6faff;
    margin-bottom: 1.25rem;
    text-shadow: 0 0 6px rgba(0, 255, 255, 0.2);
    line-height: 1.7;
    text-align: center;
  }

  .portrait {
    width: 180px;
    height: 180px;
    object-fit: cover;
    border-radius: 50%;
    margin: 0 auto 2rem;
    box-shadow: 0 0 30px #00f7ff, 0 0 60px #00f7ff;
    display: block;
  }

  .quote {
    font-style: italic;
    color: #a7bfff;
    text-shadow: 0 0 10px #a7bfff;
    margin: 2rem auto;
    font-size: 1.1rem;
    text-align: center;
  }

  .contact-links {
    text-align: center;
    margin: 2.5rem 0 1.5rem;
  }

  .button {
    background: #00f7ff;
    color: #000;
    padding: 0.8rem 1.8rem;
    border-radius: 30px;
    font-weight: bold;
    text-decoration: none;
    box-shadow: 0 0 20px #00f7ff, 0 0 40px #00f7ff;
    transition: all 0.3s ease;
  }

  .button:hover {
    background: #0cf;
    transform: scale(1.05);
    box-shadow: 0 0 40px #0cf, 0 0 80px #0cf;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 500px;
    margin: 2rem auto 0;
  }

  .contact-form input,
  .contact-form textarea {
    background: rgba(0, 0, 0, 0.6);
    border: 1px solid #00f7ff;
    color: #dff;
    border-radius: 10px;
    padding: 0.9rem 1rem;
    font-size: 1rem;
    backdrop-filter: blur(6px);
    box-shadow: 0 0 10px #00f7ff50;
  }

  .contact-form input:focus,
  .contact-form textarea:focus {
    border-color: #0cf;
    box-shadow: 0 0 20px #0cf;
    outline: none;
  }

  .contact-form button {
    background: linear-gradient(135deg, #00f7ff, #0cf);
    color: #000;
    padding: 0.9rem 2rem;
    font-weight: bold;
    font-size: 1.1rem;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    box-shadow: 0 0 20px #00f7ff, 0 0 40px #00f7ff;
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .contact-form button:hover {
    transform: scale(1.05);
    box-shadow: 0 0 40px #0cf, 0 0 80px #0cf;
  }

  .status {
    margin-top: 1rem;
    font-weight: bold;
    color: #0f0;
    text-align: center;
    text-shadow: 0 0 10px #0f0;
  }
</style>