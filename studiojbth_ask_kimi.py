import os
from openai import OpenAI

client = OpenAI(
    base_url="https://router.huggingface.co/v1",
    api_key=os.environ["HF_TOKEN"],  # ou "hf_ta_clé_personnelle"
)

response = client.chat.completions.create(
    model="moonshotai/Kimi-K2-Instruct",
    messages=[
        {
            "role": "user",
            "content": "Bonjour, peux-tu m’expliquer ce que fait Studio JBTH ?"
        }
    ],
)

print(response.choices[0].message.content)

