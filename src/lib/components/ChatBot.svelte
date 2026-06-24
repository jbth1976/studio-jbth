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
            response = "Nos tarifs varient selon le service. Vous pouvez demander un devis ici : <a href='/contact' target='_blank' style='color:#C67A35; text-decoration:underline;'>Contact</a>.";
        } else if (text.includes('contact') || text.includes('email') || text.includes('mail')) {
            response = "Voici le lien direct pour nous contacter : <a href='/contact' target='_blank' style='color:#C67A35; text-decoration:underline;'>Contact</a>.";
        } else if (text.includes('service') || text.includes('prestations')) {
            response = "Découvrez nos services en création web, design et IA <a href='/services' target='_blank' style='color:#C67A35; text-decoration:underline;'>Services</a>.";
        } else if (text.includes('livre') || text.includes('ebooks') || text.includes('roman')) {
            response = "Nos livres et préventes sont disponibles <a href='/livres' target='_blank' style='color:#C67A35; text-decoration:underline;'>Livres</a>.";
        } else if (text.includes('réservation') || text.includes('rdv') || text.includes('rendez-vous')) {
            response = "Prenez rendez-vous directement <a href='/contact' target='_blank' style='color:#C67A35; text-decoration:underline;'>ici</a>.";
        } else if (text.includes('réalisation') || text.includes('projets')) {
            response = "Découvrez nos réalisations sur mesure <a href='/realisations-sur-mesure' target='_blank' style='color:#C67A35; text-decoration:underline;'>Réalisations</a>.";
        } else if (text.includes('boutique')) {
            response = "Accédez à notre boutique en ligne <a href='/boutique' target='_blank' style='color:#C67A35; text-decoration:underline;'>Boutique</a>.";
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
        bottom: 24px; right: 24px;
        width: 48px; height: 48px;
        background: #171412;
        color: #F4EFE7;
        border: .5px solid #3d3830;
        border-radius: 50%;
        font-size: 18px;
        cursor: pointer;
        box-shadow: 0 4px 20px rgba(23,20,18,.25);
        transition: background 0.2s ease, transform 0.2s ease;
        z-index: 1000;
        display: flex; align-items: center; justify-content: center;
    }
    .chat-button:hover { background: #C67A35; transform: scale(1.05); }

    .chatbox {
        position: fixed;
        bottom: 84px; right: 24px;
        width: 340px; max-height: 480px;
        background: #F4EFE7;
        border: .5px solid #D8D0C4;
        border-radius: 12px;
        box-shadow: 0 12px 40px rgba(23,20,18,.3);
        display: flex; flex-direction: column;
        overflow: hidden; z-index: 1000;
        font-family: 'Manrope', system-ui, sans-serif;
    }

    .chat-header {
        background: #171412;
        padding: 14px 16px;
        font-size: 11px; font-weight: 700;
        color: #F4EFE7;
        letter-spacing: .1em; text-transform: uppercase;
        display: flex; justify-content: space-between; align-items: center;
        border-bottom: .5px solid #3d3830;
    }

    .reset-button {
        background: none; border: none;
        color: #9A8E7E; font-size: 14px;
        cursor: pointer; transition: color 0.2s; padding: 0; line-height: 1;
    }
    .reset-button:hover { color: #C67A35; }

    .chat-messages {
        flex: 1; padding: 16px;
        overflow-y: auto;
        display: flex; flex-direction: column; gap: 10px;
        scroll-behavior: smooth;
    }

    .message {
        padding: 10px 14px; border-radius: 8px;
        max-width: 82%; font-size: 13px; line-height: 1.55;
        animation: fadeIn 0.25s ease; word-wrap: break-word;
    }
    .message.bot {
        background: #EDE7DD; align-self: flex-start;
        color: #171412; border-radius: 2px 8px 8px 8px;
    }
    .message.user {
        background: #C67A35; align-self: flex-end;
        color: #F4EFE7; border-radius: 8px 2px 8px 8px;
    }

    .chat-input {
        display: flex; gap: 8px; padding: 12px;
        border-top: .5px solid #D8D0C4;
        background: #EDE7DD;
    }
    .chat-input input {
        flex: 1; padding: 10px 14px;
        border: .5px solid #D8D0C4;
        background: #F4EFE7; color: #171412;
        border-radius: 6px; font-size: 12px;
        font-family: 'Manrope', sans-serif;
        outline: none; transition: border-color 0.2s;
    }
    .chat-input input::placeholder { color: #9A8E7E; }
    .chat-input input:focus { border-color: #C67A35; }
    .chat-input button {
        background: #C67A35; color: #F4EFE7;
        border: none; padding: 10px 16px;
        border-radius: 6px; cursor: pointer;
        font-family: 'Manrope', sans-serif;
        font-weight: 700; font-size: 11px;
        letter-spacing: .06em; text-transform: uppercase;
        transition: background 0.2s; white-space: nowrap;
    }
    .chat-input button:hover { background: #A06828; }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(4px); }
        to { opacity: 1; transform: translateY(0); }
    }
    </style>