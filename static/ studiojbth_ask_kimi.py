import os
from together import Together

# Récupération de la clé API
api_key = os.environ["TOGETHER_API_KEY"]

# Initialisation du client Together
client = Together(api_key=api_key)

# Requête au modèle Kimi
response = client.chat.completions.create(
    model="moonshotai/Kimi-K2-Instruct",
    messages=[
        {"role": "user", "content": "Bonjour, peux-tu m’expliquer ce que fait Studio JBTH ?"}
    ]
)

# Affichage de la réponse
print(response.choices[0].message["content"])
