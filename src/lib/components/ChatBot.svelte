<script lang="ts">
    import { onMount, afterUpdate } from 'svelte';
    
    export let customClass: string = '';
    
    let isOpen = false;
    let messages: { from: string; text: string }[] = [];
    let input = '';
    
    onMount(() => {
        const storedMessages = localStorage.getItem('chatbot-messages');
        if (storedMessages) {
            messages = JSON.parse(storedMessages);
        } else {
            resetChat();
        }
        setTimeout(() => {
            if (messages.length <= 1) {
                addBotMessage("Vous pouvez me demander nos tarifs, services, livres ou prendre un rendez-vous.");
            }
        }, 15000);
    });
    
    afterUpdate(() => {
        const chatMessages = document.querySelector('.chat-messages');
        if (chatMessages) {
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    });
    
    function saveMessages() {
        localStorage.setItem('chatbot-messages', JSON.stringify(messages));
    }
    
    function addBotMessage(text: string) {
        messages = [...messages, { from: 'bot', text }];
        saveMessages();
    }
    
    function sendMessage() {
        if (input.trim() === '') return;
        messages = [...messages, { from: 'user', text: input }];
        processInput(input.toLowerCase());
        input = '';
        saveMessages();
    }
    
    function processInput(text: string) {
        let response = "Merci pour votre message. Un conseiller JBTH vous répondra bientôt.";
    
        if (text.includes('tarif') || text.includes('prix') || text.includes('devis')) {
            response = "Nos tarifs varient selon le service. Vous pouvez demander un devis ici : <a href='/contact' target='_blank' style='color:#00ffff; text-decoration:underline;'>Contact</a>.";
        } else if (text.includes('contact') || text.includes('email') || text.includes('mail')) {
            response = "Voici le lien direct pour nous contacter : <a href='/contact' target='_blank' style='color:#00ffff; text-decoration:underline;'>Contact</a>.";
        } else if (text.includes('service') || text.includes('prestations')) {
            response = "Découvrez nos services en création web, design et IA <a href='/services' target='_blank' style='color:#00ffff; text-decoration:underline;'>Services</a>.";
        } else if (text.includes('livre') || text.includes('ebooks') || text.includes('roman')) {
            response = "Nos livres et préventes sont disponibles <a href='/livres' target='_blank' style='color:#00ffff; text-decoration:underline;'>Livres</a>.";
        } else if (text.includes('réservation') || text.includes('rdv') || text.includes('rendez-vous')) {
            response = "Prenez rendez-vous directement <a href='/contact' target='_blank' style='color:#00ffff; text-decoration:underline;'>ici</a>.";
        } else if (text.includes('réalisation') || text.includes('projets')) {
            response = "Découvrez nos réalisations sur mesure <a href='/realisations-sur-mesure' target='_blank' style='color:#00ffff; text-decoration:underline;'>Réalisations</a>.";
        } else if (text.includes('boutique')) {
            response = "Accédez à notre boutique en ligne <a href='/boutique' target='_blank' style='color:#00ffff; text-decoration:underline;'>Boutique</a>.";
        } else if (text.includes('merci')) {
            response = "Avec plaisir ✨. Je reste disponible si besoin.";
        } else {
            response = "Vous pouvez me poser vos questions sur nos services, tarifs, livres ou pour prendre rendez-vous.";
        }
        addBotMessage(response);
    }
    
    function toggleChat() {
        isOpen = !isOpen;
    }
    
    function resetChat() {
        messages = [{ from: 'bot', text: "Bonjour 👋, je suis l'assistant JBTH. Comment puis-je vous guider aujourd'hui ?" }];
        saveMessages();
    }
    </script>
    
    <button class="chat-button" on:click={toggleChat} aria-label="Ouvrir le chat">
        {#if isOpen} ✕ {:else} 💬 {/if}
    </button>
    
    {#if isOpen}
    <div class={`chatbox ${customClass}`}>
        <div class="chat-header">
            Assistant JBTH
            <button on:click={resetChat} class="reset-button" aria-label="Réinitialiser le chat">♻️</button>
        </div>
        <div class="chat-messages">
            {#each messages as msg}
                <div class={`message ${msg.from}`}>{@html msg.text}</div>
            {/each}
        </div>
        <div class="chat-input">
            <input type="text" bind:value={input} placeholder="Écrivez un message..." on:keydown={(e: KeyboardEvent) => e.key === 'Enter' && sendMessage()} />
            <button on:click={sendMessage}>Envoyer</button>
        </div>
    </div>
    {/if}
    
    <style>
    .chat-button {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #00ffff;
        color: black;
        border: none;
        padding: 0.8rem 1.2rem;
        border-radius: 50px;
        font-weight: bold;
        cursor: pointer;
        box-shadow: 0 0 15px rgba(0, 255, 255, 0.7);
        transition: transform 0.2s;
        z-index: 1000;
    }
    .chat-button:hover { transform: scale(1.05); }
    .chatbox {
        position: fixed;
        bottom: 80px;
        right: 20px;
        width: 340px;
        max-height: 500px;
        background: rgba(0, 0, 0, 0.95);
        border-radius: 12px;
        box-shadow: 0 0 25px rgba(0, 255, 255, 0.5);
        display: flex;
        flex-direction: column;
        overflow: hidden;
        z-index: 1000;
        font-family: 'Helvetica Neue', sans-serif;
    }
    .chat-header {
        background: #00ffff;
        padding: 0.8rem;
        text-align: center;
        font-weight: bold;
        color: black;
        font-size: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .reset-button {
        background: none;
        border: none;
        color: black;
        font-size: 1rem;
        cursor: pointer;
    }
    .chat-messages {
        flex: 1;
        padding: 1rem;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        scroll-behavior: smooth;
    }
    .message {
        padding: 0.5rem 0.8rem;
        border-radius: 10px;
        max-width: 80%;
        animation: fadeIn 0.3s ease;
        word-wrap: break-word;
    }
    .message.bot {
        background: rgba(0, 255, 255, 0.12);
        align-self: flex-start;
        color: #00ffff;
    }
    .message.user {
        background: rgba(255, 255, 255, 0.1);
        align-self: flex-end;
        color: white;
    }
    /* Removed unused CSS selectors for .message a and .message a:hover */
    .chat-input {
        display: flex;
        padding: 0.5rem;
        border-top: 1px solid #00ffff44;
        background: rgba(0, 0, 0, 0.8);
    }
    .chat-input input {
        flex: 1;
        padding: 0.5rem;
        border: none;
        background: rgba(255, 255, 255, 0.05);
        color: white;
        border-radius: 8px;
        font-size: 0.9rem;
    }
    .chat-input button {
        background: #00ffff;
        color: black;
        border: none;
        padding: 0.5rem 1rem;
        margin-left: 0.5rem;
        border-radius: 8px;
        cursor: pointer;
        font-weight: bold;
        font-size: 0.9rem;
    }
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(5px); }
        to { opacity: 1; transform: translateY(0); }
    }
    </style>