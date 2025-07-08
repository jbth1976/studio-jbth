<script lang="ts">
  import '../../app.css';
  
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
    <h1>À Propos</h1>
    <img src="/images/IMG_0060.jpg" alt="Jean-Baptiste Tharrault" class="portrait" />
  
    <h2>Jean-Baptiste Tharrault</h2>
    <p>Je suis auteur, développeur web et créateur de contenus visuels. Depuis plus de dix ans, je mêle technologies numériques, narration sensible et design innovant pour donner vie à des projets uniques. Mon univers se situe à la croisée de la créativité et de la technique, avec une exigence constante de qualité, d'authenticité et d'impact émotionnel.</p>
    <p>Mon parcours est riche et multiple : je publie des romans introspectifs, conçois des interfaces futuristes, et j'accompagne également des professionnels dans leur transition digitale grâce à des outils simples, esthétiques et sur mesure.</p>
  
    <h2>L’Entreprise</h2>
    <p><strong>“Studio JBTH”</strong> est bien plus qu’un portfolio : c’est une vitrine vivante de mes compétences et de ma vision. Chaque élément graphique, chaque ligne de code, chaque idée déployée ici sont le reflet de ma volonté d’innover sans perdre l’humain de vue.</p>
    <p>Nous proposons des services de développement web (sites vitrines, e-commerce, applications personnalisées), de graphisme (identité visuelle, contenu pour les réseaux), et d’édition (mise en page, accompagnement à la publication).</p>
    <p class="quote">“Créer, c’est traduire l’invisible en pixels.” — <strong>Jean-Baptiste Tharrault</strong></p>
  
    <div class="contact-links">
      <a href="mailto:contact@studiojbth.com" class="button">contact@studiojbth.com</a>
    </div>
  
    <form class="contact-form" on:submit={handleSubmit}>
      <input type="text" placeholder="Votre nom" bind:value={nom} required autocomplete="name" />
      <input type="email" placeholder="Votre e-mail" bind:value={email} required autocomplete="email" />
      <textarea rows="5" placeholder="Votre message..." bind:value={message} required></textarea>
      <button type="submit" disabled={loading}>{loading ? 'Envoi en cours...' : 'Envoyer'}</button>
      {#if statusMessage}
        <p class="status">{statusMessage}</p>
      {/if}
    </form>
  </section>
  
  <style>
  .about-container {
    max-width: 900px;
    margin: 0 auto;
    padding: 3rem 1rem;
    color: #dff;
    font-family: 'Arial', sans-serif;
    line-height: 1.7;
    animation: fadeIn 1.5s ease-out;
    text-align: center;
  }
  
  h1 {
    font-size: 2.5rem;
    color: #00f7ff;
    text-shadow: 0 0 20px #00f7ff, 0 0 40px #00f7ff;
    margin-bottom: 1.5rem;
  }
  
  h2 {
    font-size: 1.6rem;
    color: #aef;
    text-shadow: 0 0 10px #aef;
    margin-top: 2rem;
  }
  
  p {
    margin-bottom: 1rem;
  }
  
  .portrait {
    display: block;
    margin: 0 auto 2rem auto;
    width: 180px;
    border-radius: 50%;
    box-shadow: 0 0 30px #00f7ff, 0 0 60px #00f7ff;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .portrait:hover {
    transform: scale(1.05);
    box-shadow: 0 0 50px #00f7ff, 0 0 100px #00f7ff;
  }
  
  .quote {
    font-style: italic;
    color: #88f;
    text-shadow: 0 0 10px #88f;
    margin: 2rem 0;
  }
  
  .contact-links {
    margin: 2rem 0;
  }
  
  .button {
    background: #00f7ff;
    color: #000;
    padding: 0.7rem 1.6rem;
    border-radius: 30px;
    font-weight: bold;
    text-decoration: none;
    display: inline-block;
    transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
    box-shadow: 0 0 20px #00f7ff, 0 0 40px #00f7ff;
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
    margin: 0 auto;
  }
  
  .contact-form input,
  .contact-form textarea {
    background: rgba(0, 0, 0, 0.6);
    border: 1px solid #00f7ff;
    color: #dff;
    border-radius: 10px;
    padding: 0.9rem 1rem;
    font-size: 1rem;
    backdrop-filter: blur(4px);
    box-shadow: 0 0 10px #00f7ff50;
    transition: border 0.3s, box-shadow 0.3s;
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
    padding: 0.8rem 2rem;
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
    text-shadow: 0 0 10px #0f0;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @media (max-width: 600px) {
    h1 { font-size: 2rem; }
    h2 { font-size: 1.3rem; }
    .portrait { width: 120px; }
  }
  </style>
  