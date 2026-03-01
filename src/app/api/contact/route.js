import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Ajoute cette fonction au-dessus de la fonction POST existante
function buildEmailTemplate({ firstName, lastName, email, phone, message }) {
  return `
      <!DOCTYPE html>
      <html lang="fr">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>Nouveau message</title>
        </head>
        <body style="margin:0;padding:0;background-color:#0f1629;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color:#141b3d;border-radius:16px;overflow:hidden;border:1px solid rgba(96,165,250,0.2);">
  
                  <!-- Header -->
                  <tr>
                    <td style="padding:32px 40px;background:linear-gradient(135deg,#1e3a8a,#1e40af);text-align:center;">
                      <p style="margin:0 0 8px 0;font-size:13px;color:#93c5fd;letter-spacing:3px;text-transform:uppercase;">Portfolio</p>
                      <h1 style="margin:0;font-size:24px;color:#ffffff;font-weight:700;">Nouveau message reçu</h1>
                    </td>
                  </tr>
  
                  <!-- Content -->
                  <tr>
                    <td style="padding:36px 40px;">
  
                      <!-- Infos expéditeur -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                        <tr>
                          <td style="padding:14px 16px;background:#0f1629;border-radius:10px 10px 0 0;border-bottom:1px solid rgba(96,165,250,0.1);">
                            <span style="font-size:11px;color:#60a5fa;text-transform:uppercase;letter-spacing:1px;">Nom</span><br/>
                            <span style="font-size:16px;color:#f1f5f9;font-weight:600;">${firstName} ${lastName}</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:14px 16px;background:#0f1629;border-bottom:1px solid rgba(96,165,250,0.1);">
                            <span style="font-size:11px;color:#60a5fa;text-transform:uppercase;letter-spacing:1px;">Email</span><br/>
                            <a href="mailto:${email}" style="font-size:16px;color:#fbbf24;font-weight:600;text-decoration:none;">${email}</a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:14px 16px;background:#0f1629;border-radius:0 0 10px 10px;">
                            <span style="font-size:11px;color:#60a5fa;text-transform:uppercase;letter-spacing:1px;">Téléphone</span><br/>
                            <span style="font-size:16px;color:#f1f5f9;font-weight:600;">${phone || "Non renseigné"}</span>
                          </td>
                        </tr>
                      </table>
  
                      <!-- Message -->
                      <p style="margin:0 0 12px 0;font-size:11px;color:#60a5fa;text-transform:uppercase;letter-spacing:1px;">Message</p>
                      <div style="background:#0f1629;border-left:3px solid #fbbf24;border-radius:0 10px 10px 0;padding:20px 24px;">
                        <p style="margin:0;font-size:15px;color:#e2e8f0;line-height:1.7;">${message.replace(/\n/g, "<br/>")}</p>
                      </div>
  
                      <!-- Répondre -->
                      <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
                        <tr>
                          <td align="center">
                            <a href="mailto:${email}" style="display:inline-block;background:linear-gradient(135deg,#fbbf24,#f59e0b);color:#0f1629;font-size:14px;font-weight:700;text-decoration:none;padding:14px 32px;border-radius:8px;letter-spacing:0.5px;">
                              Répondre à ${firstName}
                            </a>
                          </td>
                        </tr>
                      </table>
  
                    </td>
                  </tr>
  
                  <!-- Footer -->
                  <tr>
                    <td style="padding:20px 40px;border-top:1px solid rgba(96,165,250,0.1);text-align:center;">
                      <p style="margin:0;font-size:12px;color:#475569;">Reçu depuis le formulaire de contact de ton portfolio</p>
                    </td>
                  </tr>
  
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;
}

export async function POST(request) {
  const { firstName, lastName, email, phone, message } = await request.json();

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // à remplacer par ton domaine vérifié plus tard
      to: process.env.CONTACT_EMAIL_TO,
      subject: `Nouveau message de ${firstName} ${lastName}`,
      html: buildEmailTemplate({ firstName, lastName, email, phone, message }),
      replyTo: email,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Erreur Resend :", error);
    return Response.json({ success: false }, { status: 500 });
  }
}