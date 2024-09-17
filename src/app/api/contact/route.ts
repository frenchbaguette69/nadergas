import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type FormData = {
  name: string;
  phone: string;
  email: string;
  service: string;
  area: string;
};

export async function POST(request: Request) {
  try {
    const data: FormData = await request.json();
    const { name, phone, email, service, area } = data;

    // Log ontvangen gegevens
    console.log("Ontvangen gegevens:", { name, phone, email, service, area });

    // Configuratie voor Nodemailer om Postfix te gebruiken
    const transporter = nodemailer.createTransport({
      host: "localhost", // Verbind met de lokale Postfix-server
      port: 25, // Standaard SMTP-poort voor Postfix
      secure: false, // Gebruik geen SSL/TLS omdat we de lokale server gebruiken
      tls: {
        rejectUnauthorized: false, // Schakel de verificatie van het zelfondertekende certificaat uit
      },
    });

    // Instellingen voor de e-mail
    const mailOptions = {
      from: "root@ubuntu", // Verzendadres dat overeenkomt met je domein
      to: "marcowammes@outlook.com", // Ontvangstadres
      subject: "Nieuw formulier ontvangen",
      text: `Er is een nieuw formulier ingediend met de volgende gegevens:
      Naam: ${name}
      Telefoonnummer: ${phone}
      Email: ${email}
      Service: ${service}
      Aantal m²: ${area}`,
    };

    // Verstuur de e-mail
    await transporter.sendMail(mailOptions);

    // Stuur een succesantwoord terug
    return NextResponse.json(
      { message: "Formulier succesvol ingediend en e-mail verzonden!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Fout bij het verwerken van het formulier:", error);

    // Stuur een foutantwoord terug
    return NextResponse.json(
      {
        message:
          "Er is een fout opgetreden bij het indienen van het formulier.",
      },
      { status: 500 }
    );
  }
}
