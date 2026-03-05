import { Resend } from "resend";
import ContactEmailTemplate from "./ContactEmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  console.log("Request received in contact route");
  const { firstName, lastName, email, phone, message } = await request.json();
  // console.log("Data:", { firstName, lastName, email, phone, message });

  try {
    console.log("Sending email...");
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL_TO,
      subject: `Nouveau message de ${firstName} ${lastName}`,
      html: ContactEmailTemplate({ firstName, lastName, email, phone, message }),
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Erreur Resend :", error);
    return Response.json({ success: false }, { status: 500 });
  }
}