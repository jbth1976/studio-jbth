// src/routes/api/send-contact/+server.ts

import type { RequestHandler } from '@sveltejs/kit';
import nodemailer from 'nodemailer';

export const POST: RequestHandler = async ({ request }) => {
    try {
        const { nom, email, message } = await request.json();

        const transporter = nodemailer.createTransport({
            host: 'mail.infomaniak.com',
            port: 465,
            secure: true,
            auth: {
                user: 'contact@studiojbth.com',
                pass: 'Python1976!'
            }
        });

        await transporter.sendMail({
            from: 'contact@studiojbth.com',         // Obligé identique au user authentifié
            to: 'contact@studiojbth.com',
            replyTo: email,                         // Permet de répondre directement
            subject: `📩 Nouveau message de ${nom}`,
            text: `Nom: ${nom}\nEmail: ${email}\nMessage:\n${message}`,
            html: `
                <p><strong>Nom:</strong> ${nom}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
            `
        });

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error('Erreur envoi mail :', error);
        return new Response(JSON.stringify({ success: false, error: (error as Error).message }), { status: 500 });
    }
};